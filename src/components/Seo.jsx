import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function Seo(props) {
  // eslint-disable-next-line react/prop-types
  const { name, title, type, description, imgName } = props;
  let version = 1;
  // eslint-disable-next-line no-restricted-globals
  const pageUrl = `${location.href}/?v=${version}`;

  useEffect(() => {
    version++;
    console.log(version);
  }, [version]);

  return (
    <Helmet prioritizeSeoTags>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgName} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* eslint-disable-next-line no-restricted-globals */}
      <meta property="og:url" content={pageUrl} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
