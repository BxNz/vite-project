import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import OrderItem from "./OrderItem";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QrCodeIcon from '@mui/icons-material/QrCode';

type Props = {};
const Products = [1, 2, 3, 4, 5];
const PaymentMethods = [{ title: "Cash",icon:<AttachMoneyIcon/> },{title:"QR Code",icon:<QrCodeIcon/>}];
const saleDetail = ({}: Props) => {
  return (
    <Container maxWidth="lg">
      <Paper>
        <Typography>Order Details</Typography>
        <Divider />
        <br />
        <Box
          height={"50vh"}
          overflow={"scroll"}
          padding={1}
          sx={{ backgroundColor: "#3d3d3d" }}
        >
          {Products.map((product) => (
            <OrderItem />
          ))}
        </Box>
        <Divider />
        <Box display={"flex"}>
          <Box flex={1}>
            <Typography variant="body1"> Subtoal:</Typography>
            <Typography variant="body1"> VAT:</Typography>
            <Typography variant="h6"> Toal:</Typography>
          </Box>
          <Box flex={2} flexDirection={"column"} alignItems={"flex-end"}>
            <Typography variant="body1"> 100.000 LAK</Typography>
            <Typography variant="body1">7%</Typography>
            <Typography variant="h6"> 107.000 LAK</Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
        {PaymentMethods.map((paymethods)=>
        <Box
          border={2}
          borderColor={"green"}
          borderRight={50}
          height={30}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={1}
          sx={{cursor:"pointer"}}
        >
          <Typography variant="body1">{paymethods.title}</Typography>
          {paymethods.icon}
        </Box>
        )}
        <Button variant="contained" fullWidth>
          Pay
        </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default saleDetail;
