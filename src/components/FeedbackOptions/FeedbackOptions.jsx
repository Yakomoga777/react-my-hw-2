import React, { Component } from "react";
import {
  BtnContanerStyled,
  ButtonStyled,
  TitleStyled,
} from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    const { title, options, onLeaveFeedback } = this.props;

    return (
      <>
        <TitleStyled>{title}</TitleStyled>
        <BtnContanerStyled>
          {options.map((i) => (
            <ButtonStyled
              key={i}
              type="button"
              name={i}
              onClick={onLeaveFeedback}
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </ButtonStyled>
          ))}
        </BtnContanerStyled>
      </>
    );
  }
}

export default FeedbackOptions;
