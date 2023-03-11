import { Fragment } from "react";
import Seo from "../components/Seo";

export default function ExamplePageOne() {
  return (
    <Fragment>
      <Seo
        title="Learning React Helmet!"
        description="Page One"
        name="Company name."
        type="article"
        imgUrl={`${window.origin}/images/one.webp`}
      />
      <h1>Page One</h1>
    </Fragment>
  );
}
