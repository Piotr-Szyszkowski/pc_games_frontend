// import { useState } from "react";
import "../Css/SideMenu.css";

function SideMenu({ sideMenuProps }) {
  const { isMenuOpen, toggleMenu } = sideMenuProps;

  console.log(toggleMenu, isMenuOpen);
  return (
    <div className="SideMenu-Container">
      {/* <button className="placeholder-button" onClick={toggleMenu}>
        Open Menu
      </button> */}
      <div className={`SideMenu-Content-Wrapper ${isMenuOpen ? "open" : ""}`}>
        <button className="placeholder-button" onClick={toggleMenu}>
          Close Menu
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
