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
        imgUrl={`https://640ce3143e8b1000085413bb--singular-cat-b72cc0.netlify.app/images/two.jpeg`}
      />
      <h1>Page two</h1>
    </Fragment>
  );
}
