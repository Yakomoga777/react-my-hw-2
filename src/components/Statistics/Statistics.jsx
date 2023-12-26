import React, { Component } from "react";

class Statistics extends Component {
  render() {
    const { feedback, valey, percentagesOption, totalOption, total, positive } =
      this.props;

    return (
      <>
        <ul>
          {feedback.map((i) => {
            // console.log(feedback.i);
            return (
              <li key={i}>
                {i.charAt(0).toUpperCase() + i.slice(1)}
                <span>: {valey[i]}</span>
              </li>
            );
          })}
        </ul>

        {total ? (
          <p>
            {totalOption}: {total === 0 ? null : total}
          </p>
        ) : null}

        {!Number.isNaN(positive) && (
          <p>
            {percentagesOption}: {positive}%
          </p>
        )}
      </>
    );
  }
}

export default Statistics;
