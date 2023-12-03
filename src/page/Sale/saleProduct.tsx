import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Productcard from "../../components/Productcard";

type props = {
  productList: any[];
  HandleAddproductSale: (id: string, barcode: string, qty: number, price: number) => void;
};

//const Products = [1, 2, 3, 4, 5];
const saleproduct = (props: props) => {
  return (
    <Container>
      <Paper sx={{ p: 5 }}>
        <h1>Product</h1>
        <Grid container spacing={2}>
          {props.productList.map((product) => (
            <Grid key={product} item xs={12} sm={6} lg={3}>
              <Productcard
                _id={product._id}
                barcode={product.barcode}
                name={product.name}
                qty={product.qty}
                price={product.price}
                HandleAddproductSale={props.HandleAddproductSale}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
export default saleproduct;
