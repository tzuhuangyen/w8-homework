// Create a Higher-Order Component (HOC) called withColor .
//This should wrap the CollorButton component
// and provide it with the necessary state and functionality to handle the background color and the button
// name.
//Higher-Order Component是一個函式，其接收Component為參數並回傳Component
import React, { useState } from "react";

const withColor = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "WHITE",
      };
    }

    handleClick = () => {
      this.setState((prevState) => ({
        color: prevState.color === "WHITE" ? "BLACK" : "WHITE",
      }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          color={this.state.color}
          handleClick={this.handleClick}
        />
      );
    }
  };
};

export default withColor;
