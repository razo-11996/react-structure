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
        imgUrl={`%PUBLIC_URL%/images/one.webp`}
      />
      <h1>Page One</h1>
    </Fragment>
  );
}
