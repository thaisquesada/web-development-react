import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 200px;
  background-color: #bab3b3;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
`;

const Text = styled.div`
  color: #7bd473;
  text-align: center;
  font-size: 24px;
`;

const Product = ({ prodName, price, image }) => {
  return (
    <ProductWrapper>
      <ProductImage src={image} />
      <Text>{prodName}</Text>
      <Text>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Text>
    </ProductWrapper>
  );
};

export default Product;