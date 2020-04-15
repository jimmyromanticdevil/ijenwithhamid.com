import React from "react";
import PropTypes from "prop-types";

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <a onClick={props.onToggleMenu} href="/">
            Home
          </a>
        </li>
        <li>
          <a onClick={props.onToggleMenu} href="/#about">
            About me
          </a>
        </li>
        <li>
          <a onClick={props.onToggleMenu} href="/#whyme">
            Why me
          </a>
        </li>
        <li>
          <a onClick={props.onToggleMenu} href="/#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a onClick={props.onToggleMenu} href="/#mytour">
            My Tour
          </a>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            onClick={props.onToggleMenu}
            href="#contact"
            className="button special fit"
          >
            BOOK ME
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="#close">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
