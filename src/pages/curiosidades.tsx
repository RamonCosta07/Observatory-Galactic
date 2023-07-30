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
import Image from "next/legacy/image";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Interfaces
import { IApodData, ICuriositiesProps } from "@/interfaces/iPages/ICuriosity";

const Curiosities = ({ initialApodData }: ICuriositiesProps) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_NASA;
  const [apodData, setApodData] = useState<IApodData | null>(initialApodData);
  const [error, setError] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [newCuriosity, setNewCuriosity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [firstCall, setFirstCall] = useState(1);
  const [expandedImageUrl, setExpandedImageUrl] = useState("");
  const router = useRouter();
  const currentDate = new Date().toISOString().split("T")[0];

  const fetchData = async (date: string) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    try {
      setError("");
      setLoading(true);
      setNotFound(false);

      const response = await axios.get<IApodData>(url);
      const translatedTitle = await translate(response.data.title, {
        from: "en",
        to: "pt",
      });
      const translatedExplanation = await translate(response.data.explanation, {
        from: "en",
        to: "pt",
      });
      setApodData({
        ...response.data,
        title: translatedTitle,
        explanation: translatedExplanation,
      });
      setLoading(false);
    } catch (error: any) {
      if (
        error.message == "Request failed with status code 404" &&
        firstCall === 1
      ) {
        setNotFound(true);
        return;
      }
      setError(error.message);
      console.log(error.message);
      setLoading(false);
    }
  };

  const getRandomDate = () => {
    const startDate = new Date(1995, 5, 16).getTime();
    const currentDateSearch = new Date().getTime();
    const randomDate = Math.floor(
      Math.random() * (currentDateSearch - startDate + 1) + startDate
    );
    return new Date(randomDate).toISOString().split("T")[0];
  };

  useEffect(() => {
    if (newCuriosity < 1) {
      if (!apodData) {
        fetchData(currentDate);
      }
      return;
    }
    getRandomDate();
    const currentSearchDate = getRandomDate();
    fetchData(currentSearchDate);
  }, [apiKey, newCuriosity]);

  setTimeout(() => {
    if (notFound && firstCall === 1) {
      setNotFound(false);
      const nextDayObj = new Date(currentDate);
      nextDayObj.setDate(nextDayObj.getDate() - 2);
      const nextDayFormatted = nextDayObj.toISOString().split("T")[0];
      setFirstCall(2);
      fetchData(nextDayFormatted);
    }
  }, 4000);

  const handleNewCuriosity = () => {
    setFirstCall(3);
    setNewCuriosity((prev) => prev + 1);
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
        <h1>Curiosidades Sobre o Universo</h1>
        {loading ? (
          <S.LoadingContainer>
            <Loading />
          </S.LoadingContainer>
        ) : (
          <>
            <S.Card>
              <S.Title>{apodData.title}</S.Title>
              <S.ImageLoad
                className={`image-container ${
                  imageLoaded ? "image-loaded" : ""
                }`}
              >
                <S.Image
                  title="Expandir"
                  src={apodData.url}
                  alt={apodData.title}
                  onClick={() => handleImageClick(apodData.url)}
                />
              </S.ImageLoad>
              <S.Explanation>{apodData.explanation}</S.Explanation>
              <S.DateStyles>
                Data de referência:{" "}
                {new Date(apodData.date).toLocaleDateString("pt-BR")}
              </S.DateStyles>
              <Button
                onClick={handleNewCuriosity}
                title="Trazer uma curiosidade de uma data aleatória"
              >
                Gerar curiosidades aleatórias
              </Button>
            </S.Card>
            {modalOpen && (
              <ImageOpenModal onClose={() => setModalOpen(false)}>
                {!imageLoaded && <Loading />}
                <Image
                  src={expandedImageUrl}
                  alt={apodData.title}
                  layout="fill"
                  objectFit="contain"
                />
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

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_NASA;
  const currentDate = new Date().toISOString().split("T")[0];
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

  try {
    const response = await axios.get<IApodData>(url);
    const translatedTitle = await translate(response.data.title, {
      from: "en",
      to: "pt",
    });
    const translatedExplanation = await translate(response.data.explanation, {
      from: "en",
      to: "pt",
    });
    const apodData = {
      ...response.data,
      title: translatedTitle,
      explanation: translatedExplanation,
    };

    return {
      props: {
        initialApodData: apodData,
      },
    };
  } catch (error) {
    return {
      props: {
        initialApodData: null,
      },
    };
  }
}
