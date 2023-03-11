import React from "react";
import { Helmet } from "react-helmet-async";

class Seo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Dynamic Title",
      description: "Dynamic Description",
      url: window.origin,
      imageUrl: window.origin + "/images/two.jpeg",
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
          <meta property="og:title" content={this.state.title} />
          <meta property="og:description" content={this.state.description} />
          <meta property="og:image" content={this.state.imageUrl} />
          <meta property="og:url" content={this.state.url} />
          <meta name="twitter:title" content={this.state.title} />
          <meta name="twitter:description" content={this.state.description} />
          <meta name="twitter:image" content={this.state.imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        {/* Rest of component */}
      </div>
    );
  }
}

export default Seo;
