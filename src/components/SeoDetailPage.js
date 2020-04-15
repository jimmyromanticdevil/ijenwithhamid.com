import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import config from "../../config/website_details";

const Head = (props) => {
  const {
    data: {
      site: { buildTime },
    },
  } = props;

  const title = config.siteTitle;
  const description = config.siteDescription;

  const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
  const homeURL = `${config.siteUrl}${realPrefix}`;
  const image = `${homeURL}${config.siteLogo}`;

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: homeURL,
    headline: config.siteHeadline,
    inLanguage: "en",
    mainEntityOfPage: homeURL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      "@type": "Person",
      name: config.author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: config.author,
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: config.author,
    },
    publisher: {
      "@type": "Person",
      name: config.author,
    },
    datePublished: "2019-01-17",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: image,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": homeURL,
        name: "Homepage",
      },
      position: 1,
    },
  ];

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  };

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta
        name="keywords"
        content="blue fire ijen, kawah ijen indonesia, volcano blue fire, ijen crater, sulfur lake, mount ijen, tour guide ijen"
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content="https://ijenwithhamid.com/hike-ijen-with-personal-tour-guide"
      />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      {config.siteFBAppID && (
        <meta property="fb:app_id" content={config.siteFBAppID} />
      )}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
};

Head.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const SeoDetailPage = (props) => (
  <StaticQuery
    query={querySeoDetailPage}
    render={(data) => <Head {...props} data={data} />}
  />
);

export default SeoDetailPage;

const querySeoDetailPage = graphql`
  query SeoDetailPage {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`;
