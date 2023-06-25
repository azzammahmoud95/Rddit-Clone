import React from "react";

function Img(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={props.style}
      width="100%"
      height="100%"
    />
  );
}

export default Img;