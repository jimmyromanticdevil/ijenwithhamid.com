import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SeoDetailPage from "../components/SeoDetailPage";
import pic11 from "../assets/images/instagram/hikeijenwithhamid.png";
import provide from "../assets/images/safety3.webp";
import proper from "../assets/images/proper.webp";
import whatwedo from "../assets/images/whatwedo.webp";

const Landing = (props) => (
  <Layout>
    <SeoDetailPage />
    <div id="main" className="alt">
      <section id="aboutijen">
        <div className="inner">
          <header className="major">
            <h1>
              Hiking Ijen Volcano, Explore Sunrise Of Java & Blue Fire Ijen
            </h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <h3>About The Ijen</h3>
          <p>
            Ijen Crater ( Kawah Ijen Indonesia ) also known as Ijen volcano Blue
            Flame has been calling mountain buffs and nature lovers for years
            with its wonders. This is no ordinary crater as it shoots and sparks
            a blue fire to the air. The image of blue flames blowing out of the
            crater resembles a giant stove. Some see it as an imaginary land in
            the fairy tales that come to life.
            <br />
            <br />
            The so-called volcano blue fire is not actually a fire as it is a
            complex chemical reaction. The sulfuric gas comes in contact with
            oxygen, leading to the combustion of the gas. Thus, the infamous “
            blue flames ” will show up and dance before the wondering eyes. The
            size of the crater is 960 meters x 600 meters, 200 meters deep.
            Another natural treasure of Ijen Crater is its acidic lake, the
            biggest one in the world. Ijen lake’s water is greenish blue and the
            bottom is not visible. As the marvelous dance of flame comes to an
            end, the morning sun gradually rises. Its golden ray showers Ijen’s
            peak and unveils the dark remnants of the night.
            <br />
            <br />
            The view from the top gives a look at the neighboring mountains. The
            tips of Raung, Suket, and Rante, that surround Ijen Crater are very
            visible. There is nothing beyond the horizon but more mountaintops,
            clouds, and sky. The sun also allows a clearer vision of Ijen’s gray
            dusty sandy terrain. A seven-meters-wide path allows nature
            enthusiasts and locals to walk around comfortably. The best time to
            watch this ballet of fire is at 2 – 4 AM. It takes about two hours
            for this midnight trekking, about three kilometers. It is pitch
            black and the only source of light is from the flashlights.
            Sometimes, the smell of intense sulfur lingers in the cold
            mountainous air.
          </p>
        </div>
      </section>

      <section className="spotlights">
        <section id="what">
          <Link
            to="/hike-ijen-with-personal-tour-guide#provide"
            className="image"
          >
            <img src={whatwedo} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>What we will do</h3>
              </header>
              <p>
                I will pick you up at your place of stay around 12.00 midnight.
                And you can also start getting ready, besides that I will also
                help check and ensure your readiness for Trekking. If I can
                suggest it would be nice if you could stay around Licin
                Subdistrict: Banjar Village or Taman Sari. so that the journey
                is not so far away and I can also invite you to get around. Many
                inns around the area where you can find on airbnb or
                booking.com.
                <br />
                <br />
                After the preparation is complete we will leave for Paltuding
                namely the gate of Mount Ijen, The journey taken is around 30-40
                minutes if you stay in the Region which I recommend, and if you
                stay in the City it will take approximately 1 and a half hours
                <br />
                <br />
                After arriving at paltuding, we will brief for a moment, pray
                and start climbing to the crater of Ijen. The climb is taken for
                approximately 1.5 hours. After reaching the top of the mountain,
                we will go down again to the crater to see the Blue Fire API
                BLUE and the expanse of blue Lake of sulfur which is very
                beautiful. The trip to the crater is approximately 15-20
                minutes.
                <br />
                <br />
                After that we will go up again and get ready for the sunrise
                spot, where if you are lucky with good weather you will enjoy
                the famous Sunrise Of Java. After that we will get ready to go
                back down to Paltuding where the driver waits to pick up We
                return to the hotel or homestay where you are staying. And if
                your condition is not too tired we can stop for a moment at Twin
                Waterfall to enjoy Breakfast / Breakfast there.
              </p>
            </div>
          </div>
        </section>
        <section id="provide">
          <Link to="/generic" className="image">
            <img src={provide} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>What I will provide</h3>
              </header>
              <ul className="list">
                <li>
                  Safety equipment
                  <br />
                  *Gask Mask, Rain Coat, headlamp/flashlight, Gloves & Hat
                </li>
                <li>
                  Entrance Fee
                  <br />
                  *All of Entrance fee Ticket
                </li>
                <li>
                  Snacks & Drinks
                  <br />
                  *Mineral Water, coffe or tea & snacks
                </li>
                <li>
                  Transportation
                  <br />
                  *Pick up dan drop off from & to your hotel/homestay
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="bring">
          <Link to="/generic" className="image">
            <img src={proper} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>What you’ll need to bring</h3>
              </header>
              <ul className="list">
                <li>Wear warm clothes and jacket/jumpers</li>
                <li>Wear proper hiking shoes</li>
                <li>Travel insurance (I recommend World Nomads)</li>
                <li>Asthma drugs or other drugs if you have health problems</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section id="note">
        <div className="inner">
          <div className="box">
            <h3>Things to Note</h3>
            <p>
              You do not need to have a climbing experience, or a very strong
              stamina, because the path is not so steep. We will walk with care
              and be careful. it's okay slow as long as it arrives safely. I
              will make sure everything goes well. Make sure your doctor allows
              you to climb the mountain or your insurance company allows you to
              go to Banyuwangi and climb Mount Ijen. Some of you may have
              existing respiratory conditions (asthma, easy panic when you
              breathe anything other than oxygen, etc.) and / or have very
              sensitive eyes, so I strongly recommend that you bring your
              medicines and also I suggest not need to go down to the caldera
              (the part where we see the blue fire closely) even though we can
              still see the Blue Fire from the top of the mountain.
            </p>
          </div>
        </div>
      </section>
      <section id="stay" style={{ borderTop: "0px" }}>
        <div className="inner">
          <div className="box">
            <h3>Where to stay</h3>
            <p>
              Most visitors stay near the foot of Ijen Crater in Licin or Taman
              Sari area, which are only a 30-40 min drive to the trailhead at
              Paltuding. Homestays are considered very basic but you could also
              find some Hotel like Grand Harvest and Ijen joglo or Villa Ijen
              villa and Micasa house.
              <br />
              <br />
              There are some interesting sights in the vicinity of the area,
              such as coffee plantations and coffee processing factories. There
              is also a waterfall and hotspring nearby. Also If you want to
              experience living like a local you can stay at Banjar Village,
              which is a part of Licin area.
            </p>
            <p>
              <a
                href="https://www.airbnb.com/s/licin?irgwc=1&irclid=XreU-IRN1xyJRx10ElylqXhuUklWDl3-Q0xURU0&ircid=4273&sharedid=&af=49497874&iratid=9627&c=.pi73.pk4273_297397"
                className="button small"
              >
                Airbnb.com
              </a>
              &nbsp;&nbsp;
              <a
                href="https://www.booking.com/searchresults.en-us.html?label=gen173nr-1FCAEoggI46AdIM1gEaGiIAQGYATG4AQfIAQzYAQHoAQH4AQKIAgGoAgO4AviRg-kFwAIB&sid=54f3b28dd16de6488a78e28325ab82d2&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaGiIAQGYATG4AQfIAQzYAQHoAQH4AQKIAgGoAgO4AviRg-kFwAIB%3Bsid%3D54f3b28dd16de6488a78e28325ab82d2%3Bsb_price_type%3Dtotal%26%3B&ss=Licin%2C+East+Java%2C+Indonesia&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=licin&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2685269&dest_type=city&place_id_lat=-8.2&place_id_lon=114.25&search_pageview_id=5a14723ced1d00d2&search_selected=true&search_pageview_id=5a14723ced1d00d2&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0"
                className="button small"
              >
                Booking.com
              </a>
              &nbsp;&nbsp;
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Landing;
