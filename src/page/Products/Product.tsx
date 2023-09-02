import { Box, Button, Typography, Container } from "@mui/material";
import ProductTb from "./ProductTB.tsx";
import CreateProductDialog from "./ProductDialog.tsx";
import EditProductDialog from "./ProductDialog.tsx";
import "../../styles/Product/Product.css";
import { useState } from "react";


type Props = {};

const Product = ({}: Props) => {
  const [OpenCreateProductDialog, setOpenCreateProductDialog] =
    useState<boolean>(false);

    const [OpenEditProductDialog, setOpenEditProductDialog] =
    useState<boolean>(false);

  const handleOpenCreateProductDialog = () => {
    setOpenCreateProductDialog(true);
  };
  const handleCloseCreateProductDialog = () => {
    setOpenCreateProductDialog(false);
  };

  const handleOpenEditProductDialog = () => {
    setOpenEditProductDialog(true);
  };
  const handleCloseEditProductDialog = () => {
    setOpenEditProductDialog(false);
  };
  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: "25px" }}>
        <Typography variant="h4">Product Management</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} margin={2}>
        <Button variant="contained" onClick={handleOpenCreateProductDialog}>
          +Create
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", backgroundColor: "skyblue" }}
        border={1}
        borderColor="gray"
        padding={2}
        borderRadius={2}
        gap={20}
      >
        <div className="input-container">
          <input name="Barcode"></input>
          <input name="Name" type="text"></input>
          <input name="Price"></input>
          <input name="Added Date"></input>
        </div>
        <Button variant="contained" color="primary" className="Button1">
          Search
        </Button>
      </Box>
      <Box border={1} borderColor="gray" padding={2} borderRadius={2}>
        <Typography variant="body1">Product List</Typography>
        <ProductTb 
          onEdit={handleOpenEditProductDialog}
        />
      </Box>
      <CreateProductDialog
        open={OpenCreateProductDialog}
        title="Create Product"
        onClose={handleCloseCreateProductDialog}
      />
      <EditProductDialog
       open={OpenEditProductDialog}
       title="Edit Product"
       onClose={handleCloseEditProductDialog}/>
    </Container>
  );
};

export default Product;
