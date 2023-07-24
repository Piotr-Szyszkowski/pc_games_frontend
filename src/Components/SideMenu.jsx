// import { useState } from "react";
import "../Css/SideMenu.css";

function SideMenu({ sideMenuProps }) {
  const { isMenuOpen, toggleMenu } = sideMenuProps;

  console.log(toggleMenu, isMenuOpen);
  return (
    <div className="SideMenu-Container">
      {isMenuOpen && <div className="overlay"></div>}
      <div className={`SideMenu-Content-Wrapper ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`SideMenu-CloseButton-Wrapper ${
            !isMenuOpen ? "closed" : ""
          }`}
        >
          <svg
            className={`SideMenu-CloseButton `}
            onClick={toggleMenu}
            viewBox="0 0 100 100"
            width="16"
            height="16"
            fill="none"
          >
            <path d="M68.71,35.75a4.69,4.69,0,0,0-8-3.12L50,43.37,39.26,32.63a4.69,4.69,0,0,0-6.63,6.63L43.37,50,32.63,60.74a4.69,4.69,0,0,0,6.63,6.63L50,56.63,60.75,67.37a4.69,4.69,0,0,0,6.63-6.63L56.63,50,67.37,39.26A4.63,4.63,0,0,0,68.71,35.75ZM50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90.63A40.63,40.63,0,1,1,90.63,50,40.67,40.67,0,0,1,50,90.63Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
