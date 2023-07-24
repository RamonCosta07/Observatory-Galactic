// Styles
import * as S from "@/styles/CuriosityStyles";
import { Button } from "@/styles/ButtonStyles";
// Hooks
import { useEffect, useState } from "react";
// Bibliotecas
import axios from "axios";
import translate from "translate";
// Components
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ImageOpenModal from "@/components/ImageOpenModal";
// Next
import { useRouter } from "next/router";
import Head from "next/head";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Interfaces
import { ApodData } from "@/interfaces/iPages/ICuriosity";

const Curiosities = (): JSX.Element => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_NASA;
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [error, setError] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [newCuriosity, setNewCuriosity] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [firstCall, setFirstCall] = useState(1);
  const [expandedImageUrl, setExpandedImageUrl] = useState("");
  const router = useRouter();
  
   useEffect(() => {
    setLoading(true);
    setNotFound(false);

    const getAPOD = async (date: string) => {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
      console.log('Oi');
      try {
        setError("");
        window.scrollTo({ top: 0, behavior: "smooth" });
        const response = await axios.get<ApodData>(url);
        const translatedTitle = await translate(response.data.title, {
          from: "en",
          to: "pt",
        });
        const translatedExplanation = await translate(
          response.data.explanation,
          { from: "en", to: "pt" }
        );
        setApodData({
          ...response.data,
          title: translatedTitle,
          explanation: translatedExplanation,
        });
        setLoading(false);
        setNotFound(false);
      } catch (error: any) {
        setError(error.message);
        setNotFound(true);
        setLoading(false);
      }
    };

    const getRandomDate = () => {
      const startDate = new Date(1995, 5, 16).getTime();
      const currentDate = new Date().getTime();
      const randomDate = Math.floor(
        Math.random() * (currentDate - startDate + 1) + startDate
      );
      return new Date(randomDate).toISOString().split("T")[0];
    };

    const getAPODWithRetry = async (date: string, retryCount: number = 0) => {
      if (retryCount > 5) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      await getAPOD(date);

      if (notFound && !apodData) {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() - 1);
        const newDate = currentDate.toISOString().split("T")[0];
        getAPODWithRetry(newDate, retryCount + 1);
      } else {
        setFirstCall(1);
      }
    };

    const currentDate = new Date().toISOString().split("T")[0];
    if (firstCall === 1 && !notFound) {
      getAPODWithRetry(currentDate);
    } else if (firstCall === 2) {
      const randomDate = getRandomDate();
      getAPOD(randomDate);
    }
  }, [newCuriosity, firstCall]);

  const handleNewCuriosity = () => {
    setFirstCall(2);
    setNewCuriosity((prev) => !prev);
  };

  const handleImageClick = (imageUrl: string) => {
    setExpandedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const handleAboutPage = () => {
    router.push("/sobre");
  };

  if (error) {
    return <div>{<Error>{error}</Error>}</div>;
  }

  if (!apodData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Curiosidades | Galactic Observatory</title>
      </Head>
      <S.Container>
        <h1>
          Curiosidades Sobre o Universo
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.Card>
              <S.Title>{apodData.title}</S.Title>
              <S.Image
                title="Expandir"
                src={apodData.url}
                alt={apodData.title}
                onClick={() => handleImageClick(apodData.url)}
              />
              <S.Explanation>{apodData.explanation}</S.Explanation>
              <S.DateStyles>
                Data de referência: {" "}
                {new Date(apodData.date).toLocaleDateString("pt-BR")}
              </S.DateStyles>
              <Button onClick={handleNewCuriosity} title="Trazer uma curiosidade de uma data aleatória">
                Gerar curiosidades aleatórias
              </Button>
            </S.Card>
            {modalOpen && (
              <ImageOpenModal onClose={() => setModalOpen(false)}>
                <img src={expandedImageUrl} alt={apodData.title} />
              </ImageOpenModal>
            )}
          </>
        )}
        <Button onClick={handleAboutPage} title="Ir para a página sobre o site">
          Sobre o Site <AiOutlineArrowRight />
        </Button>
      </S.Container>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export default Curiosities;
