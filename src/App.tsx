import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import Login from "./page/Login/Login";
import Sale from "./page/Sale/Sale";
import Product from "./page/Products/product";
import User from "./page/User/User";
import { useEffect, useState } from "react";
import Report from "../report/report";
import DailyReport from "../report/dailyReport";
import YesterdayReport from "../report/yesterdayReport";
import WeeklyReport from "../report/weeklyReport";
import MonthlyReport from "../report/monthlyReport";


//componets
import Drawer from "./components/drawer";
import { AuthRouter, PrivateRoute } from "./utils/Router/AuthRouter";


type Props = {};

const App = ({}: Props) => {
  const [isAuth, setIsAuth] = useState(true);
const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
   
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }   
  }, []);
  
  if (loading) {
    return <div>Loading.......</div>;
  }
  return (
    <BrowserRouter>
      {isAuth && <Drawer setIsAuth = {setIsAuth}/>}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/report" element={<Report />} />

            <Route path="/report/daily-sale" element={<DailyReport />} />
            <Route path="/report/yesterday-sale" element={<YesterdayReport />} />
            <Route path="/report/weekly-sale" element={<WeeklyReport />} />
            <Route path="/report/monthly-sale" element={<MonthlyReport />} />
          </Route>

          <Route path="/" element={<AuthRouter isAuth={isAuth} />}>
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
