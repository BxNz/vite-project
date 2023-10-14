import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Productcard from "../../components/Productcard";
type Props = {};

const Products = [1, 2, 3, 4, 5];
const saleproduct = ({}: Props) => {
  return (
    <Container>
      <Paper sx={{p:5}}>
        <h1>Product</h1>
        <Grid container spacing={2}>
          {Products.map((Product) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Productcard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};
export default saleproduct;
