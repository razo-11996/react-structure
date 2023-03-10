import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export function Seo(props) {
  const [title, setTitle] = useState("My Website");
  const [description, setDescription] = useState("This is my website.");
  const [imageUrl, setImageUrl] = useState("https://example.com/image.jpg");
  const [url, setUrl] = useState("https://example.com");

  // Update meta tags based on component props
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setTitle(props.title);
    // eslint-disable-next-line react/prop-types
    setDescription(props.description);
    // eslint-disable-next-line react/prop-types
    setImageUrl(props.imageUrl);
    // eslint-disable-next-line react/prop-types
    setUrl(props.imageUrl);
  }, [props]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Rest of component */}
    </div>
  );
}
