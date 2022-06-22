import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  font-family: sans-serif;
`;

export const Button = styled.button`
  background-color: #91a6fe;
  color: #fff;
  border: 1px solid #91a6fe;
  padding: 7px;
  margin-right: 10px;
  border-radius: 5px;
  &:hover {
    background-color: #617ef4;
  }
`;

export const ErrorMessage = styled.p`
  color: #fa6fef;
`;

export const ResetButton = styled(Button)`
  && {
    width: 73px;
    height: 31px;
    margin-right: 10px;
  }
`;