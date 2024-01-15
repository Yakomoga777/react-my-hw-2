import React, { Component } from "react";

import Layout from "components/layout/layout";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

// import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (evt) => {
    console.log(evt.target.name);
    this.setState((prevState) => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));

    this.countTotal();
  };

  countTotal() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositivFeedback() {
    const positive =
      ((this.state.good + this.state.neutral) / this.countTotal()) * 100;

    return Math.round(positive);
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <Layout className="App-header">
        <FeedbackOptions
          title={"Please leave feedback"}
          options={options}
          onLeaveFeedback={this.addFeedback}
        />

        {this.countTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            feedback={options}
            valey={this.state}
            total={this.countTotal()}
            positive={this.countPositivFeedback()}
            totalOption={"Total"}
            percentagesOption={"Positive feedback"}
            // addedOptions={["Total", "Positive feedback"]}
          />
        )}
      </Layout>
    );
  }
}

export default App;
