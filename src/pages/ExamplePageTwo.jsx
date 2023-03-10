import { Fragment } from "react";
import { Seo } from "../components/Seo";

export default function ExamplePageTwo() {
  return (
    <Fragment>
      <Seo
        title="Learning React Helmet! Two"
        description="Beginner friendly page for learning React Helmet. Page Two"
        name="Company name."
        type="article"
        imgName="two.jpeg"
      />
      <h1>Page Two</h1>
    </Fragment>
  );
}