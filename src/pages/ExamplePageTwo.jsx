import { Fragment } from "react";
import Seo from "../components/Seo";

export default function ExamplePageTwo() {
  return (
    <Fragment>
      <Seo
        title="Page Two Dynamic Title"
        description="Page Two"
        name="Company name."
        type="article"
        imgUrl={`%PUBLIC_URL%/images/two.jpeg`}
      />
      <h1>Page two</h1>
    </Fragment>
  );
}
