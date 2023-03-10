import { Fragment, useLayoutEffect } from "react";

export default function ExamplePageTwo() {
  useLayoutEffect(() => {
    document.title = "Learning how to add dynamic meta tags in react";
    const metaImg = document.createElement("meta");
    metaImg.setAttribute("og:images", "images/two.jpeg");
    document.head.append(metaImg);
  }, []);

  return (
    <Fragment>
      <h1>Page Two</h1>
    </Fragment>
  );
}
