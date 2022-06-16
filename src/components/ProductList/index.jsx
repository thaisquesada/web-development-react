import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProductList = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ProductList;