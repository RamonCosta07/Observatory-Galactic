// Types
import type { AppProps } from "next/app";
// Styles
import GlobalStyle from "@/styles/Global";
// Components
import Layout from "@/components/Layout";
// Context
import { VideoProvider } from "@/contexts/VideoContext";
import { AuthProvider } from "@/contexts/AuthContext";
// Next
import NextNProgress from "nextjs-progressbar";
// Hooks
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo simulado de carregamento (1 segundo)
  };
  return (
    <>
      <VideoProvider>
        <AuthProvider>
          <Layout>
            <GlobalStyle />
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={60}
            />
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </VideoProvider>
    </>
  );
}

export default App;
