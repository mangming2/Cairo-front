import React from "react";
import NavBar from "./NavBar";
import Img from "../../public/cairo.jpeg";

function Header({ handleClickNavLink }: { handleClickNavLink: any }) {
  return (
    <div className="bg-none flex justify-center items-center">
      <img src={Img} className="w-24 h-24 m-4" alt="logo" />
      <div className="m-auto font-[Lilita] font-extrabold text-6xl">CAIRO</div>
      <NavBar handleClickNavLink={handleClickNavLink} />
    </div>
  );
}

export default Header;
