import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import Login from "./page/Login/Login";
import Sale from "./page/Sale/Sale";
import Drawer from "./components/drawer";
import Product from "./page/Products/Product";
import User from "./page/User/User";

type Props = {};

const App = ({}: Props) => {
  return (
    <BrowserRouter>
      <Drawer />
      <div style={{ margin: 70 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
