import { useState } from "react";
import { Container } from "../../Styles";
import { Button, Title, ErrorMessage } from "./Styles";

const Counter = () => {
  const [number, setNumber] = useState(1);
  const [error, setError] = useState(false);

  const changeValue = () => {
    if (number > 10) {
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
      <Button onClick={() => resetCounter()}>Reset</Button>
      <Text value={number} />
    </Container>
  );
};

// PROP
const Text = ({ value }) => {
  return <span>{value}</span>;
};

export default Counter;