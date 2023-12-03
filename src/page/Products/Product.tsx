import { Box, Button, Typography, Container } from "@mui/material";
import ProductTb from "./ProductTB.tsx";
import CreateProductDialog from "./ProductDialog.tsx";
import EditProductDialog from "./ProductDialog.tsx";
import "../../styles/Product/Product.css";
import ProductService from "../../services/ProductService.tsx";
import { useEffect, useState } from "react";

type Props = {};

const product = ({}: Props) => {
  useEffect(() => {
    try {
      const getProducts = async () => {
        const Productder = await ProductService.getAllProducts();
        if (Productder.data.success) {
          setproductList(Productder.data.data);
        }
      };

      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [productList, setproductList] = useState<any[]>([]);

  const [Productdata, setProductdata] = useState<any>({});

  const handlechange = (e: any) => {
    setProductdata({ ...Productdata, [e.target.name]: e.target.value });
  };

  const createProduct = async () => {
    try {
      const Product = await ProductService.createProducts(Productdata);
      // console.log(Product);
      if (Product.status === 200) {
        let newProductlist = [...productList];
        newProductlist.push(Product.data.data);
        setproductList(newProductlist);
        setOpenCreateProductDialog(false);
      } else {
        console.log(Product);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleditProduct = async () => {
    try {
      const Product = await ProductService.updateProducts(
        EditProductid,
        Productdata
      );
      if(Product.status === 200){
        let newProductlist=[...productList];
        let index = newProductlist.findIndex(
          (Product) => Product._id === EditProductid
        );
        newProductlist[index] = Product.data.data;
        setproductList(newProductlist);
        setProductdata({});
        setEditProductid("")
        setOpenEditProductDialog(false);
      }else{
        console.log(Product);
      }
     
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id: string)=>{
    try {
      const Product =await ProductService.deleteProducts(id)
    
    if(Product.status === 200){
      let newProductlist=[...productList];
      let index = newProductlist.findIndex(
        (Product) => Product._id === EditProductid
      );
      newProductlist.splice(index,1);
      setproductList(newProductlist);
      
      
    }else{
      console.log(Product);
    }

    } catch (error) {
      console.log(error)

    }
  }

  const [EditProductid, setEditProductid] = useState<string>("");
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

  const handleOpenEditProductDialog = (id: string, data:any) => {
    setEditProductid(id);
    setProductdata(data);
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
          datalist={productList}
          onDelete={deleteProduct}
        />
      </Box>
      <CreateProductDialog
        open={OpenCreateProductDialog}
        title="Create Product"
        buttontext="Create"
        onClose={handleCloseCreateProductDialog}
        handleonchage={handlechange}
        handleclick={createProduct}
        data={Productdata}
      />
      <EditProductDialog
        open={OpenEditProductDialog}
        title="Edit Product"
        buttontext="Edit"
        onClose={handleCloseEditProductDialog}
        handleonchage={handlechange}
        handleclick={handleditProduct}
        data={Productdata}
      />
    </Container>
  );
};

export default product;
