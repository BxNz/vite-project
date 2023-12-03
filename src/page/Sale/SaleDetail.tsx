import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import OrderItem from "./OrderItem";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import QrCodeIcon from "@mui/icons-material/QrCode";
//import { useRef } from "react";
//import ReactToPrint from "react-to-print";

type Props = {
  productTosale: any[];
  handleSelectionPaymethod: (method : string) => void;
  Saledata : any;
  handcheckout : () => void;
  handleDeleteProductToSale: (id: string) => void;
};
//const Products = [1, 2, 3, 4, 5];
const PaymentMethods = [
  { title: "Cash", icon: <AttachMoneyIcon />, value :"cash" },
  { title: "QR Code", icon: <QrCodeIcon /> , value :"qr"},
];
const saleDetail = (props: Props) => {
//const componentRef = useRef(null);

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
          {props.productTosale.map((product) => (
            <OrderItem
              key={product.barcode}
              id={product._id}
              barcode={product.barcode}
              name={product.name}
              qtyTosale={product.qtyTosale}
              price={product.price}
              handleDeleteProductToSale={props.handleDeleteProductToSale}
            />
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
            <Typography variant="body1">
              {" "}
              {props.productTosale.reduce((acc, cur) => acc + cur.total, 0)} LAK
            </Typography>
            <Typography variant="body1"> 7%
            </Typography>
            <Typography variant="h6">{props.productTosale.reduce((acc, cur) => acc + cur.total, 0)} LAK</Typography>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {PaymentMethods.map((paymethods) => (
            <Box
              border={2}
              borderColor= {props.Saledata.PaymentMethods === paymethods.value ? "green" : ""}
              borderRadius={50}
              height={30}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={1}
              sx={{ cursor: "pointer" }}
              onClick ={() => props.handleSelectionPaymethod(paymethods.value)}
            >
              <Typography variant="body1"color={props.Saledata.PaymentMethods === paymethods.value ? "green" : ""}>{paymethods.title}</Typography>
            </Box>
          ))}
          <Button variant="contained" fullWidth onClick={props.handcheckout}> Pay </Button>
          {/* <ReactToPrint
            trigger={() => (
              <Button variant="contained" fullWidth>
                Pay
              </Button>
            )}
            content={() => componentRef.current}
          />
          <Box ref={componentRef} display={"none"}>
            dsfs
          </Box> */}
        </Box>
      </Paper>
    </Container>
  );
};

export default saleDetail;
