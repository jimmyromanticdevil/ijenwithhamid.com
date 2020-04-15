import React from "react";

const Contact = (props) => (
  <section id="contact">
    <div className="inner">
      <section>
        <form
          name="contact"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
          <br></br>
          <p>
            *All of non-cash transactions are processed by Xendit.co &
            Paypal.com, I will always prioritizes your convenience and security
            in every request and transaction process.
          </p>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a
              href="mailto:halo@ijenwithhamid.com?Subject=Hallo%2C%20I%27m%20ready%20to%20hike%20Ijen%21%21"
              target="_top"
            >
              halo@ijenwithhamid.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>
              <a href="tel:6282331489128" target="_top">
                +62 823-3148-9128
              </a>
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Desa Segobang, Kecamatan Licin, at the foot of Mount Ijen
              <br />
              Banyuwangi, East Java
              <br />
              Indonesia
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
