import { ChildProps } from "@/types";
import { Footer, Navbar } from "./_components";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
