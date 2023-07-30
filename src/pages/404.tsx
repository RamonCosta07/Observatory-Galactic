// Styles
import * as S from "@/styles/404Styles";
// Next
import Head from "next/head";
import Image from "next/image";
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
          <p>&quot;Busquem conhecimento&quot; — Et Bilu.</p>
          <Link href="/" title="Redirecionar para Home">Voltar para página Inicial</Link>
          <Image src="/alien.png" alt="Imagem de alien" width={290} height={290} />
        </S.Container404>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export default NotFound;
