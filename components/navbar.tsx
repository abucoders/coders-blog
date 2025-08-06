import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full bg-gray-800">
      <div className="container h-full flex justify-between items-center mx-auto">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold uppercase">Logo</h1>
        </Link>

        <div className="flex items-center gap-2">
          <Link href={"/client"}>Client</Link>
          <Link href={"/server"}>Server</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
