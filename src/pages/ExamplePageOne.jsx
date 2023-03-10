import { Fragment } from "react";
import { Seo } from "../components/Seo";

export default function ExamplePageOne() {
  return (
    <Fragment>
      <Seo
        title="Learning React Helmet!"
        description="Beginner friendly page for learning React Helmet. Page One"
        name="Company name."
        type="article"
        imgName="images/one.webp"
      />
      <h1>Page One</h1>
    </Fragment>
  );
}
