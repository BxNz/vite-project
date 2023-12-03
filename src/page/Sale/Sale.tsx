import Saleproduct from "./saleProduct";
import SaleDetail from "./SaleDetail";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import axios from "axios";
import AlertBox from "../../components/alertBox";
import saleService from "../../services/saleService";
type Props = {};

export default function  Sale({}: Props){
  const [productList, setProductList] = useState([]);
  const [productTosale, setProductTosale] = useState<any[]>([]);
  const [Saledata, setSaledata] = useState({}) as any;
  const [openAlertBox, setOpenAlertBox] = useState(false);
  const [alertBoxStatus, setAlertBoxStatus] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {
    try {
      const getProducts = async () => {
        const Products = await ProductService.getAllProducts();
        if (Products.status) {
          setProductList(Products.data.data);
          
        }else{console.log(Products);
        }
      };

      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //ເພີ່ມສິນຄ້າໄປຂາຍ
  const HandleAddproductSale = (
    _id: string,
    barcode: string,
    qty: number,
    price: number
    // name: string
  ) => {
    console.log(barcode, qty, price);
    let newArr: any[] = [...productTosale];
    let index = newArr.findIndex((Product) => Product.barcode === barcode);

    if (index === -1) {
      let qtyTosale = 1;
      let total = price * qtyTosale;
      newArr.push({ _id, barcode, qtyTosale, price, total, qty });
    } else {
      if (newArr[index].qtyTosale === qty) {
        return;
      } else {
        newArr[index].qtyTosale++;
        newArr[index].total = newArr[index].qtyTosale * price;
      }
    }
    setProductTosale(newArr);
  };
  const handleDeleteProductToSale = (id: string) => {
    let newArr = productTosale.filter((product) => product._id !== id);
    setProductTosale(newArr);
  };

  const handleSelectionPaymethod = (method: string) => {
    setSaledata({ ...Saledata, paymentMethod: method });
  };

  const handleCheckout = async () => {
    try{
    const data = {
      total: productTosale.reduce((acc, curr) => acc + curr.total, 0),
      paymentMethod: Saledata.paymentMethod,
      products: productTosale,
    };
 //   console.log(data);
    const sale = await saleService.createSale(data);
    if (sale.data.success) {
      setAlertBoxStatus(true);
      setOpenAlertBox(true);
      setProductTosale([]);
      setSaledata({});
    } else {
      setAlertBoxStatus(false);
      setOpenAlertBox(true);
      setErrorMessages(sale.data.message);
    }
  } catch (error: any) {
    console.log(error);
    setAlertBoxStatus(false);
    setOpenAlertBox(true);
    setErrorMessages(error.response.data.message);
  };
  axios({
    method: "POST",
    url: "http://localhost:3000/Sale",
    data: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    console.log(res);
  });
}
  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        height: "100vh",
        display: "flex",
      }}
    >
      <div style={{ flex: "2", marginTop: "20" }}>
        <Saleproduct
          productList={productList}
          HandleAddproductSale={HandleAddproductSale}
        />
      </div>

      <div style={{ flex: "1" }}>
        <SaleDetail
          productTosale={productTosale}
          handleSelectionPaymethod={handleSelectionPaymethod}
          Saledata={Saledata}
          handcheckout={handleCheckout}
          handleDeleteProductToSale={handleDeleteProductToSale}
        />
      </div>
      <AlertBox
        open={openAlertBox}
        setOpen={setOpenAlertBox}
        success={alertBoxStatus}
        errorMessages={errorMessages}
      />
    </div>
  );
};
