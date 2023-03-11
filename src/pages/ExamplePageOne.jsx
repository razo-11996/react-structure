import { Fragment } from "react";
import Seo from "../components/Seo";

export default function ExamplePageOne() {
  return (
    <Fragment>
      <Seo
        title="Page One Dynamic Title"
        description="Page One"
        name="Company name."
        type="article"
        imgUrl={`https://640ce3143e8b1000085413bb--singular-cat-b72cc0.netlify.app/images/one.webp`}
      />
      <h1>Page One</h1>
    </Fragment>
  );
}
