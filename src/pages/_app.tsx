// Interfaces e Types
import type { AppProps } from "next/app";
// Styles
import GlobalStyle from "@/styles/Global";
// Components
import Layout from "@/components/Layout";
// Context
import { VideoProvider } from "@/contexts/VideoContext";
import { AuthProvider } from "@/contexts/AuthContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <VideoProvider>
        <AuthProvider>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </VideoProvider>
    </>
  );
}

export default App;
