import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../Styles";

const InputWrapper = styled.div`
  width: 100%;
`;

// declaração da função
function Form() {
  // estado é parecido com get e set, porém sofre alterações e renderiza novamente
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  // const [get ou valor, set ou alteração] = useState(valor inicial que vem no get)

  const changeName = (e) => {
    // função que chama o set e altera o estado
    setName(e.target.value);
  };

  // retorno do código visual (pseudo-HTML, JSX)
  return (
    <Container>
      <InputWrapper>
        <input
          value={name}
          onChange={(e) => changeName(e)}
          placeholder="Your name: "
        />
        {name}
      </InputWrapper>
      <InputWrapper>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email: "
        />
        {email}
      </InputWrapper>
    </Container>
  );
}

// exportando para permitir importação em outros arquivos
export default Form;