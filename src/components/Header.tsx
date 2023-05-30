import React from "react";
import NavBar from "./NavBar";

function Header({ handleClickNavLink }: { handleClickNavLink: any }) {
  return (
    <div className="bg-none flex justify-center items-center">
      <img
        src="https://i.imgur.com/1Q1Z1Zy.png"
        className="w-24 h-24 m-4"
        alt="logo"
      />
      <div className="m-auto font-[Lilita] font-extrabold text-4xl">
        This is Template
      </div>
      <NavBar handleClickNavLink={handleClickNavLink} />
    </div>
  );
}

export default Header;
