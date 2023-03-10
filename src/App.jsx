import { Fragment } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route, Link } from "react-router-dom";
import ExamplePageOne from "./pages/ExamplePageOne";
import ExamplePageTwo from "./pages/ExamplePageTwo";

export default function App() {
  return (
    <Fragment>
      <Link to="/">One</Link>
      <Link to="two">Two</Link>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<ExamplePageOne />} />
          <Route path="two" element={<ExamplePageTwo />} />
        </Routes>
      </HelmetProvider>
    </Fragment>
  );
}
