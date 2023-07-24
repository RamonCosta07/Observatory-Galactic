// Styles
import { LayoutContainer } from "@/styles/LayoutStyles";
// Components
import Navbar from "./Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";
// Interfaces
import { ILayoutProps } from "@/interfaces/iComponents/ILayout";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <BackgroundVideo />
    </LayoutContainer>
  );
};

export default Layout;
