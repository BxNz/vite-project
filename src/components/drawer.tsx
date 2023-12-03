import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PrintIcon from "@mui/icons-material/Print";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};
const ListIcon = [
  { path: "/", icon: <HomeIcon /> },
  { path: "/Product", icon: <AddBusinessIcon /> },
  { path: "/user", icon: <ManageAccountsIcon /> },
  { path: "/Sale", icon: <PointOfSaleIcon /> },
  { path: "/Report", icon: <PrintIcon /> },
];
// const drawerWidth = 70;

const drawer = (props: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setIsAuth(false);
  };
  return (
    <Drawer variant="permanent">
      <List>
        {ListIcon.map((icon, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 60,
                justifyContent: "center",
                px: 2.5,
              }}
              onClick={() => handleNavigate(icon.path)}
            >
              {icon.icon}

              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: "center",
              px: 2.5,
            }}
            onAbort={handleLogout}
          >
            <LogoutIcon />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default drawer;
