import Counter from "../Counter";
import Form from "../Form";
import List from "../List";
import ProductList from "../../ProductList";
import Product from "../../Product";

function Body() {
  const products = [
    {
      prodName: "Avocado",
      price: 10,
      image: "https://st.depositphotos.com/1020804/1373/i/600/depositphotos_13739284-stock-photo-avocado-isolated-on-a-white.jpg"
    },
    {
      prodName: "Fini",
      price: 15,
      image: "https://www.finistore.com.br/dw/image/v2/BHBX_PRD/on/demandware.static/-/Sites-fini-master-catalog/default/dw757258b5/icecream_90g_1.jpg?sw=1000&sh=1000&sm=fit"
    },
    {
      prodName: "Xbox",
      price: 8000,
      image: "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/x/b/xbox_one_series_x_perfil_-1_1.jpg"
    }
  ];
      
  return (
    <div>
      <Counter /> 
      <Form />
      <List>
        <List.Item content="Paraguai" />
        <List.Item content="Uruguai" />
        <List.Item content="Argentina" />
        <List.Item content="Venezuela" />
      </List>

      <ProductList>
        {
          products.map(product => {
            return (
              <Product
                prodName={product.prodName}
                price={product.price}
                image={product.image}
              />
            )
          })
        }
      </ProductList>
    </div>
  );
}

export default Body;