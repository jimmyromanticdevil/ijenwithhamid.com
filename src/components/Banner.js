import React from "react";

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is Abdul Hamid</h1>
      </header>
      <div className="content">
        <p style={{ fontSize: "15px" }}>
          Are you looking for a personal tour guide Ijen, Banyuwangi? Then you
          came to the right place.
          <br />
        </p>
        <ul className="actions">
          <li>
            <a
              onClick={props.onToggleMenu}
              href="#about"
              className="button next scrolly"
            >
              Who Am I
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
