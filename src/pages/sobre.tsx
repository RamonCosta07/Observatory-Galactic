// Styles
import * as S from "@/styles/AboutStyles";
// Next
import Head from "next/head";
// Icons
import { BsStars } from "react-icons/bs";
import { RiStarSmileLine } from "react-icons/ri";

const About = () => {
  return (
    <>
      <S.Container>
        <Head>
          <title>Sobre | Galactic Observatory</title>
        </Head>
        <h1 style={{ textAlign: "center", cursor: "default" }}>
          Sobre o Galactic Observatory
        </h1>
        <S.Icon src="/favicon.png" alt="Ícone do site" />
        <S.ContainerCard>
          <h2>
            Nosso site <BsStars />
          </h2>
          <S.InfoCard>
            <p>
              Descubra eventos astronômicos, agende e-mails desses eventos,
              explore animações dos planetas e informações sobre o sistema
              solar. Além disso, poderá saciar curiosidades astronômicas e ter
              acesso a um painel de usuário completo.
            </p>
          </S.InfoCard>
          <h2>
            Tecnologias <BsStars />{" "}
          </h2>
          <S.InfoCard>
            <p>O site foi desenvolvido com as seguintes tecnologias: </p>
          </S.InfoCard>
          <S.Footer>
            <RiStarSmileLine /> Passe o cursor ou o dedo por cima para expandir
            o ícone.
          </S.Footer>
          <S.InfoCard>
            <S.IconsTechnologiesContainer>
              <S.React title="React" />
              <S.TypeScript title="TypeScript" />
              <S.NextJS title="Next JS" />
              <S.JSON title="JSON" />
              <S.StyledComponents title="Styled Components" />
              <S.Firebase title="Firebase" />
              <S.Firestore title="Firestore" />
              <S.JSX title="JSX" />
            </S.IconsTechnologiesContainer>
          </S.InfoCard>

          <h2>
            Bibliotecas <BsStars />
          </h2>
          <S.InfoCard>
            <p>
              Além deles, foram utilizadas as seguintes bibliotecas durante a
              elaboração do projeto:
            </p>
          </S.InfoCard>
          <S.InfoCardUl>
            <ul>
              <li>Axios: Utilizado para requisição HTTP da API da NASA</li>
              <li>Date Fns: Biblioteca para manipulação de datas</li>
              <li>
                Dotenv: Biblioteca para carregar variáveis de ambiente e ocultar
                dados sigilosos do código final
              </li>
              <li>
                E-mail validator: Usada para validar endereços de e-mail no
                cadastro e login
              </li>
              <li>
                Emailjs-com: Biblioteca para envio de e-mails de boas vindas
              </li>
              <li>
                Eslint: Ferramenta de linting para manter o código consistente
              </li>
              <li>
                Firebase Functions: Serviço para que a função de e-mails
                agendados seja realizado externamente pelo firebase todos os
                dias
              </li>
              <li>
                JS Cookie: Manipulação de cookies para manter usuário logado
              </li>
              <li>
                React Apexcharts: Utilizadas para exibição de gráficos do
                sistema solar
              </li>
              <li>
                React Calendar: Componente de calendário para exibição de
                eventos astronômicos
              </li>
              <li>React Icons: Utilizada para exibição dos ícones do site</li>
              <li>
                React Responsive: Usado para verificar dinamicamente o tamanho
                da tela para definir comportamentos especificos dos gráficos e
                planetas 3D, na hora de torná-los responsivos
              </li>
              <li>
                Three: Biblioteca para criação de gráficos e animações 3D dos
                planetas nas páginas Home e Sistema Solar
              </li>
              <li>
                Translate: Foi utilizado para traduzir os dados da API da NASA
              </li>
            </ul>
          </S.InfoCardUl>
          <h2>
            API&apos;s <BsStars />
          </h2>
          <S.InfoCard>
            <p>
              Por fim, foi utilizada a API da NASA &quot;Astronomy Picture of the
              Day&quot; &#40;APOD&#41; para trazer informações aleatórias sobre o
              universo, trazendo consigo uma imagem por dia.
            </p>
          </S.InfoCard>
          <S.InfoCard>
            <S.NASA title="API Astronomy Picture of the Day" />
          </S.InfoCard>
          <h2>
            Fontes de Imagens, Vídeo e Referências <BsStars />{" "}
          </h2>
          <S.InfoCard>
            <p>As fontes utilizadas no projeto são do Google Fonts.</p>
          </S.InfoCard>
          <S.InfoCard>
            <p>
              Informações técnicas sobre planetas, sistema solar e números de
              gráficos para comparações foram pegos através do:
            </p>
          </S.InfoCard>
          <S.InfoCardUl>
            <ul>
              <li>
                <a
                  title="Acessar ChatGPT"
                  href="https://chat.openai.com/"
                  target="_blank"
                >
                  ChatGPT
                </a>
              </li>

              <li>
                <a
                  title="Acessar site Mundo Educação"
                  href="https://mundoeducacao.uol.com.br/geografia/sistema-solar.htm"
                  target="_blank"
                >
                  Mundo Educação
                </a>
              </li>

              <li>
                <a
                  title="Acessar site Brasil Escola"
                  href="https://brasilescola.uol.com.br/geografia/sistema-solar.htm#:~:text=O%20Sistema%20Solar%20%C3%A9%20um,%2C%20Saturno%2C%20Urano%20e%20Netuno."
                  target="_blank"
                >
                  Brasil Escola
                </a>
              </li>
            </ul>
          </S.InfoCardUl>
          <S.InfoCard>
            <p>
              Não localizei uma API que fornecesse dados de eventos próximos
              como eventos lunares e eclipses. Por conta disso, criei um arquivo
              JSON baseado nas datas dos próximos eventos que ocorrerão em 2023
              e 2024.<strong>¹</strong> As fontes deles são as seguintes:
            </p>
          </S.InfoCard>
          <S.InfoCardUl>
            <ul>
              <li>
                <a
                  title="Acessar site G1"
                  href="https://g1.globo.com/ciencia/noticia/2023/01/04/calendario-astronomico-de-2023-confira-quando-havera-eclipses-chuvas-de-meteoro-e-superluas.ghtml"
                  target="_blank"
                >
                  G1
                </a>
              </li>
              <li>
                <a
                  title="Acessar site Tutiempo"
                  href="https://pt.tutiempo.net/astronomia/calendario-2023.html"
                  target="_blank"
                >
                  Tutiempo
                </a>
              </li>
            </ul>
          </S.InfoCardUl>
          <S.InfoCard>
            <p>
              As imagens utilizadas no projeto são em sua maioria utilizadas de
              banco de imagens livres de direitos autorais. Além disso, as
              imagens utilizadas para o mapa de textura dos planetas na
              elaboração dos objetos 3D pelo Three foram pegas do seguinte site
              <strong>²</strong>:
            </p>
          </S.InfoCard>
          <S.InfoCardUl>
            <ul>
              <li>
                <a
                  title="Acessar site Solar System Scope"
                  href="https://www.solarsystemscope.com/textures/"
                  target="_blank"
                >
                  Solar System Scope
                </a>
              </li>
            </ul>
          </S.InfoCardUl>

          <S.InfoCard>
            <p>
              O vídeo utilizado como fundo do site foi pego através do canal do
              youtube Nature Relaxation Films:
            </p>
          </S.InfoCard>
          <S.InfoCardUl>
            <ul>
              <li>
                <a
                  title="Acessar vídeo original do fundo do site"
                  href="https://www.youtube.com/watch?v=gosjiD288Jk"
                  target="_blank"
                >
                  Celestial Relaxation
                </a>
              </li>
            </ul>
          </S.InfoCardUl>

          <h2>
            Deploy <BsStars />{" "}
          </h2>
          <S.InfoCard>
            <p>
              O site foi disponibilizado através da plataforma de hospedagem
              Vercel.
            </p>
          </S.InfoCard>
          <S.InfoCard>
            <S.Vercel title="Vercel" />
          </S.InfoCard>
          <h2>
            Repositório <BsStars />
          </h2>
          <S.InfoCard>
            <p>
              Caso deseje, poderá acessar o código fonte do projeto, bem como
              sua documentação, pelo repositório do GitHub. Basta clicar no
              ícone abaixo:
            </p>
          </S.InfoCard>
          <S.InfoCard>
            <a
              href="https://github.com/RamonCosta07/Observatory-Galactic"
              target="_blank"
            >
              <S.Github title="Acessar repositório do GitHub" />
            </a>
          </S.InfoCard>
          <span />
          <hr color="#0D0D1A" style={{ width: "100%", marginBottom: "1rem" }} />

          <S.Footer>
            <p>
              <strong>¹</strong> Os eventos astronômicos são calculados com base
              em modelos e previsões astronômicas. Embora esses cálculos sejam
              muito precisos, podem ocorrer pequenas variações devido a ajustes
              e refinamentos contínuos nos modelos utilizados.
            </p>
            <p>
              Condições climáticas, como nuvens densas ou neblina, podem
              obstruir a visibilidade de um evento astronômico. Isso pode afetar
              a capacidade de observação do evento em determinadas regiões.
            </p>
            <p>
              A órbita da Lua em torno da Terra não é perfeitamente estável. Ela
              está sujeita a pequenas variações ao longo do tempo, o que pode
              afetar a ocorrência e o tempo exato de alguns eventos lunares.
            </p>
          </S.Footer>
          <S.Footer>
            <p>
              <strong>²</strong> Apesar de me certificar de que todas as imagens
              estão livres de direitos autorais, ainda assim vale ressaltar que
              o Observatory Galactic é um site sem fins lucrativos. Dessa forma
              caso acredite que alguma das imagens utilizadas em nosso portal
              violou os direitos autoriais, por favor entre em contato para que
              possam ser devidamente retiradas.
            </p>
          </S.Footer>
        </S.ContainerCard>
      </S.Container>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export default About;
