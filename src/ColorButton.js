// // ColorButton.js

// // Create a Pure Component(class) called ColorButton.
// // It should have a button that changes the background color
import React, { Component } from "react";
import withColor from "./withColor";

class ColorButton extends Component {
  render() {
    const { color, handleClick } = this.props;
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {color === "WHITE" ? "Turn Black" : "Turn White"}
      </button>
    );
  }
}

export default withColor(ColorButton);
// //Go back to the ColorButton component and instead of exporting it directly,
// // export it as export default withColor(CollorButton).
