import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const Success = (props) => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Thank You. Your message is successfully sent!</h1>
          </header>
          <p>I will contacting you soon!</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Success;
