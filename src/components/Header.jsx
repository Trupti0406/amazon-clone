import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="search" />
        {/* Search Logo */}
        <SearchIcon className="search__icon"/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineOne">& Orders</span>
        </div>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineOne">Prime</span>
      </div>
    </div>
  );
}

export default Header;