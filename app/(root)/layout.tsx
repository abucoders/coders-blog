import { ChildProps } from "@/types";
import { Footer, Navbar } from "./_components";
import NextTopLoader from "nextjs-toploader";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <NextTopLoader />

      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
