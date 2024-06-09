import { MegaMenu } from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white ">
      <div className="sticky top-0 left-0 right-0 z-30 w-full shadow-sm shadow-black/40">
        <Navbar />
        <div className="bg-white py-3 mt-0.5 flex justify-center items-center z-50">
          <MegaMenu />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
