import React, { Component } from "react";

import Layout from "components/layout/layout";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

// import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  makeIncrement = (index) => {
    this.setState((prevState) => {
      if (index === 0) {
        return { good: prevState.good + 1 };
      } else if (index === 1) {
        return { neutral: prevState.neutral + 1 };
      } else if (index === 2) {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  handleBtn = (index) => {
    this.makeIncrement(index);
  };

  render() {
    console.log(this.state);

    return (
      <Layout className="App-header">
        <FeedbackOptions
          title={"Please leave feedback"}
          btn={["Good", "Neutral", "Bad"]}
          onClick={this.handleBtn}
        />
      </Layout>
    );
  }
}

export default App;
