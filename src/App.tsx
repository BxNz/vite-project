import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import Login from "./page/Login/Login";
import Sale from "./page/Sale/Sale";
import Product from "./page/Products/Product";
import User from "./page/User/User";
import { useState } from "react";

//componets
import Drawer from "./components/drawer";
import { AuthRouter, PrivateRoute } from "./utils/Router/AuthRouter";


type Props = {};

const App = ({}: Props) => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <BrowserRouter>
      {isAuth && <Drawer />}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/User" element={<User />} />
          </Route>

          <Route path="/" element={<AuthRouter isAuth={isAuth} />}>
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
