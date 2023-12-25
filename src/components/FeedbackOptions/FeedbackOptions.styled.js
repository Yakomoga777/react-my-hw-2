import styled from "styled-components";

export const TitleStyled = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;

  text-align: center;
`;

export const BtnContanerStyled = styled.div`
  display: flex;
  gap: 10px;

  justify-content: center;
`;

export const ButtonStyled = styled.button`
  font-size: 20px;
  line-height: 1;
  padding: 5px;

  border: none;
  border-radius: 5px;

  &:active {
    background-color: lightblue;
  }
`;
