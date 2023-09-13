import React, { Component } from "react";

class ZoomableImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isZoomedIn: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isZoomedIn: true });
  };

  handleMouseLeave = () => {
    this.setState({ isZoomedIn: false });
  };

  render() {
    const { isZoomedIn } = this.state;
    const { src, alt } = this.props;

    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all 0.2s linear",
      transform: isZoomedIn ? "scale(1.1)" : "scale(1)",
    };

    return (
      <>
        <div
          className="main-photo"
          style={{
            width: "847px",
            height: "508px",
            border: "1px solid #424242",
            borderRadius: "4px",
            float: "left",
            marginRight: "20px",
            overflow: "hidden",
          }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img style={imageStyle} src={src} alt={alt} />
        </div>
      </>
    );
  }
}

export default ZoomableImage;
