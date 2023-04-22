import React, { useState } from "react";
import Nav from "./Nav/Nav";
import "./Header.scss";
import Hamburger from "./Hamburger/Hamburger";
import Logo from "./Logo/Logo";

const Header = () => {
  //mobile navbar
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header>
      <div className="caption">
        <Logo />
        <span className="slogan">Təhsil hər zaman öndədir!</span>
      </div>
      <Hamburger isOpened={isOpened} setIsOpened={setIsOpened} />
      <Nav isOpened={isOpened} />
    </header>
  );
};

export default Header;
