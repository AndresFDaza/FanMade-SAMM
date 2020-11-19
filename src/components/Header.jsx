import React from "react";
import "../assets/styles/components/Header.css";
import iconoBandeja from "../assets/static/bandeja-de-entrada.svg";
import logoSAMM from "../assets/static/logoSAMM_down.jpg";

const Header = ({ title }) => (
  <div className="header__container">
    <div className="header__inbox-icon-container">
      <img
        className="header__inbox-icon"
        src={iconoBandeja}
        alt="icono de bandeja"
      />
    </div>
    <h1 className="header__title">{title}</h1>
    <div className="header__logo-container">
      <img className="header__logo-img" src={logoSAMM} alt="logo SAMM" />
    </div>
  </div>
);

export default Header;
