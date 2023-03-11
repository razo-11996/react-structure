import { Fragment } from "react";
import Seo from "../components/Seo";

export default function ExamplePageTwo() {
  return (
    <Fragment>
      <Seo
        title="Learning React Helmet!"
        description="Page Two"
        name="Company name."
        type="article"
        imgUrl={`${window.origin}/images/two.jpeg`}
      />
      <h1>Page two</h1>
    </Fragment>
  );
}
