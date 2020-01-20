import React from "react";
import Logo from "../assets/logo.png";
import AccountIcon from "../assets/account_circle.png";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" height="24" src={Logo} alt="Logo Facebook" />
      <div className="header-menu">
        <span>Meu Perfil</span>
        <img width="22" src={AccountIcon} />
      </div>
    </div>
  );
}

export default Header;
