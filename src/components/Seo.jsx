import React from "react";
import { Helmet } from "react-helmet-async";

class Seo extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={this.props.imgUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content={window.origin} />
          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:description" content={this.props.description} />
          <meta name="twitter:image" content={this.props.imageName} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        {/* Rest of component */}
      </div>
    );
  }
}

export default Seo;
