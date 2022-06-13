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
      <Titulo>Counter</Titulo>
      {/* PROP: Parametros dos componentes React */}
      {error && (<ErrorMessage>Não é possível acrescentar</ErrorMessage>)}
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