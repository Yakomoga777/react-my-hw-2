import React, { Component } from "react";
import {
  BtnContanerStyled,
  ButtonStyled,
  TitleStyled,
} from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    const { title, btn, onClick } = this.props;

    return (
      <>
        <TitleStyled>{title}</TitleStyled>
        <BtnContanerStyled>
          {btn.map((i, index) => (
            <ButtonStyled
              key={i}
              type="button"
              onClick={() => {
                onClick(index);
              }}
            >
              {i}
            </ButtonStyled>
          ))}
        </BtnContanerStyled>
      </>
    );
  }
}

export default FeedbackOptions;
