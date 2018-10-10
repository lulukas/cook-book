import React from "react";
import PropTypes from "prop-types";
import logo from "../../atoms/icons/logo.svg";

const MainHeader = ({ className, title }) => (
  <header className={className}>
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{title}</h1>
  </header>
);

MainHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

export default MainHeader;
