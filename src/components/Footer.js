import React from "react";

const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/abd.hamid.1293575"
            className="icon alt fa-facebook"
            aria-label="Lets connect each other through Facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; 2019 ijenwithhamid.com</li>
        <li>
          <a href="https://rahmatramadhan.com">
            Made with <span style={{ color: "#e25555" }}>♥</span> by Rahmat Ramadhan
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
