import React from "react";
import { Helmet } from "react-helmet-async";

class Seo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Dynamic Title",
      description: "Dynamic Description",
      url: window.origin,
      imageUrl: `${window.origin}/images/two.jpeg`,
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.props.description} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={this.props.imageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />
          <meta property="og:url" content={this.props.url} />
          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:description" content={this.props.description} />
          <meta name="twitter:image" content={this.props.imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        {/* Rest of component */}
      </div>
    );
  }
}

export default Seo;
