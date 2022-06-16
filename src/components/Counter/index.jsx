import { useState } from "react";
import { Container } from "../../Styles";
import { Button, Title, ErrorMessage, ResetButton } from "./Styles";

const Counter = () => {
  const [number, setNumber] = useState(1);
  const [error, setError] = useState(false);

  const changeValue = () => {
    if (number >= 10) {
      setError(true);
    } 

    setNumber(number + 1);
  };

  const resetCounter = () => {
    setNumber(0);
    setError(false);
  }

  return (
    <Container>
      <Title>Counter</Title>
      {/* PROP: são os parametros dos componentes REACT */}
      {error && (<ErrorMessage>10 is the maximum number!</ErrorMessage>)}
      <Button onClick={() => changeValue()}>Increase</Button>
      <ResetButton
        onClick={() => resetCounter()}
        variant="contained"
        disabled={number === 0}
      >
        Reset
      </ResetButton>
      <Text value={number} />
    </Container>
  );
};

// PROP
const Text = ({ value }) => {
  return <span>{value}</span>;
};

export default Counter;