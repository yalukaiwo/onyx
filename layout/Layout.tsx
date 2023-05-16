import { Footer, Header } from "@/components";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const withLayout = (component: ReactNode) => {
  return () => <Layout>{component}</Layout>;
};

export default withLayout;
