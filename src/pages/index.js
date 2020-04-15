import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import Banner from "../components/Banner";
import pic01 from "../assets/images/independent.webp";
import pic02 from "../assets/images/hamid-local-baru.webp";
import pic03 from "../assets/images/experience.webp";
import pic04 from "../assets/images/organize.webp";
import pic05 from "../assets/images/trusted.webp";
import pic06 from "../assets/images/safety2.webp";
import ig01 from "../assets/images/instagram/01.webp";
import ig02 from "../assets/images/instagram/02.webp";
import ig03 from "../assets/images/instagram/03.webp";
import ig04 from "../assets/images/instagram/04.webp";
import ig05 from "../assets/images/instagram/05.webp";
import ig06 from "../assets/images/instagram/06.webp";
import ig07 from "../assets/images/instagram/07.webp";
import ig08 from "../assets/images/instagram/08.webp";
import ig09 from "../assets/images/instagram/09.webp";
import tour01 from "../assets/images/instagram/hikeijen.webp";
import tour02 from "../assets/images/instagram/ijencycling.webp";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Seo />
        <Banner />

        <div id="main">
          <section id="about">
            <div className="inner">
              <header className="major">
                <h2>Who Am I?</h2>
              </header>
              <p>
                My name is Abdul Hamid and I’m a native Banyuwangi, with a
                passion for guiding and years of experience working as a tour
                guide in Ijen area. Choose me, because I have extensive local
                knowledge and I’m always willing to go the extra mile to make
                your private Ijen tour a success. And everything on the best
                price.
              </p>
            </div>
          </section>
          <section id="moreabout" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Independent</h3>
                <p>
                  I am an independent personal tour guide. I work with small
                  groups, maximum four people, in order to give exclusive
                  service & best price to each of my customers.
                </p>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Native Local & Knowledge</h3>
                <p>
                  I'm a local people living in Ijen crater area. I offer wide
                  range of cultural trips with Intimate, authentic, and
                  memorable experience.{" "}
                </p>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Experience</h3>
                <p>
                  With over 8 years of local guiding experience, I have a
                  complete knowledge of Ijen crater - its history and legends,
                  its traditions and culture.{" "}
                </p>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Tours</h3>
                <p>
                  I organize private tours, 100% customized and tailored to your
                  tastes and needs, all around, providing exceptional service at
                  fair and reasonable prices!{" "}
                </p>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Price</h3>
                <p>
                  I strive to provide cost efficiency without sacrificing
                  quality.
                </p>
              </header>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Safety first!</h3>
                <p>
                  I will always prioritize your safety over everything else, so
                  I have safe gear equipment for you to hike Ijen and Always
                  have breafing time to give you an explanation and make sure
                  everythings is ok.{" "}
                </p>
              </header>
            </article>
          </section>
          <section id="whyme">
            <div className="inner">
              <header className="major">
                <h2>Why Choose my tours?</h2>
              </header>
              <ul>
                <li>
                  I will unlock the hidden gems of Banyuwangi, which rarely
                  appear on any run of the mill tourist itinerary.
                </li>
                <li>
                  My large network of friends and contacts, will ensure you
                  experience the true food, drinks, customs and hospitality of
                  the Banyuwangi people.
                </li>
                <li>
                  I do not believe in the “one size fits all” tour - people are
                  different so tours should be too.
                </li>
                <li>
                  I work hard every night to confirm and amend if necessary the
                  agenda for the tour.
                </li>
                <li>
                  My tours are 100% custom-made for you and your group - down to
                  photo stops, dwell times at places of interest, and yes,
                  comfort breaks!
                </li>
                <li>
                  You will enjoy personal attention and care, something you
                  can't get on a group tour
                </li>
                <li>
                  Every day is flexible and can be amended to suit your
                  interests, even once the tour has started.
                </li>
                <li>
                  Think of me as your personal concierge. I can assist with
                  getting tickets and restaurant bookings.
                </li>
                <li>
                  I will always advise if something is not possible or will not
                  be as enjoyable.
                </li>
                <li>
                  Someone else does the driving. You see the country instead of
                  avoiding potholes and trying to read Cyrillic road signs (if
                  there are any).
                </li>
                <li>
                  Someone else does the talking. You enjoy your vacation instead
                  of trying to communicate with non - English speaking locals.
                </li>
                <li>
                  I am reliable, always there for you and will not let you down.
                </li>
              </ul>
            </div>
          </section>
          <section id="gallery">
            <div className="inner">
              <header className="major">
                <h2>My Happy Customer</h2>
              </header>
              <div className="box alt">
                <div className="grid-wrapper">
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig01} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig02} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig03} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig04} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig05} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig06} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig07} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig08} alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src={ig09} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="mytour" className="spotlights">
            <section>
              <Link to="/hike-ijen-with-personal-tour-guide" className="image">
                <img
                  src={tour01}
                  alt="Hiking ijen volcano, explore sunrise of java & blue fire ijen with tour guide"
                  aria-label="Hiking ijen volcano, explore sunrise of java & blue fire ijen with tour guide"
                />
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>
                      Hiking Ijen Volcano, Explore Sunrise Of Java & Blue Fire
                      Ijen
                    </h3>
                  </header>
                  <p>
                    For me, being a tour guide combines two things that I enjoy:
                    travel and connecting with people. Are you ready to hike
                    Ijen?
                  </p>
                  <ul className="list">
                    <li>
                      <Link to="/hike-ijen-with-personal-tour-guide#what">
                        What we’ll Do?
                      </Link>
                    </li>
                    <li>
                      <Link to="/hike-ijen-with-personal-tour-guide#provide">
                        What I’ll Provide?
                      </Link>
                    </li>
                    <li>
                      <Link to="/hike-ijen-with-personal-tour-guide#bring">
                        What you’ll need to Bring?
                      </Link>
                    </li>
                    <li>
                      <Link to="/hike-ijen-with-personal-tour-guide#note">
                        Things to Note
                      </Link>
                    </li>
                    <li>
                      <Link to="/hike-ijen-with-personal-tour-guide#stay">
                        Where to Stay?
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a
                href="https://drive.google.com/open?id=1aKa6Kp9d8X7yiOHZ0Q1GVpL5Mgrx-HHe"
                className="image"
              >
                <img
                  src={tour02}
                  alt="Biking through Ijen Hidden Beauty"
                  aria-label="Biking through Ijen Hidden Beauty"
                />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Biking through Ijen Hidden Beauty</h3>
                  </header>
                  <p>
                    Experience the real Banyuwangi. Encounter wildlife from your
                    saddle, immerse yourself into the culture, inspiring local
                    people, and landscapes. I collaborate with Ijen cycling
                    adventure. They are a cycling tour company offering
                    supported single and multi-day cycling trips in Banyuwangi.
                    With two years of experience, they are well equipped and
                    knowledgeable to handle all the logistical needs of a bike
                    trip hence giving you a memorable bicycle adventure.
                  </p>
                  <ul className="actions">
                    <li>
                      <a
                        href="https://drive.google.com/open?id=1aKa6Kp9d8X7yiOHZ0Q1GVpL5Mgrx-HHe"
                        className="button"
                      >
                        Yes. I'm interested in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
