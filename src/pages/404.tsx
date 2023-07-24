// Styles
import * as S from "@/styles/404Styles";
import { Container } from "@/styles/ContainerStyles";
// Next
import Head from "next/head";
import Link from "next/link";
// Icons
import { RiAliensLine } from "react-icons/ri";

const NotFound = () => {
  return (
    <>
      <S.Container404>
        <Head>
          <title>Página Não Encontrada | Galactic Observatory</title>
        </Head>
       
          <h1>
            Página Não Encontrada <RiAliensLine />
          </h1>
          <span>Você viajou para além dos confins do universo...</span>
          <p>"Busquem conhecimento" — Et Bilu.</p>
          <Link href="/" title="Redirecionar para Home">Ir para página Inicial</Link>
          <img src="/alien.png" />
        </S.Container404>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export default NotFound;
