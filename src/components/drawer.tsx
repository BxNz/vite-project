import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PrintIcon from "@mui/icons-material/Print";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useNavigate } from "react-router-dom";

type Props = {};
const ListIcon = [
  { path: "/", icon: <HomeIcon /> },
  { path: "/Product", icon: <AddBusinessIcon /> },
  { path: "/user", icon: <ManageAccountsIcon /> },
  { path: "/Sale", icon: <PointOfSaleIcon /> },
  { path: "/Report", icon: <PrintIcon /> },
  { path: "/Logout", icon: <LogoutIcon /> },
];
// const drawerWidth = 70;

const drawer = ({}: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Drawer variant="permanent">
      <List>
        {ListIcon.map((icon, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handleNavigate(icon.path)}
              sx={{
                minHeight: 60,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              {icon.icon}

              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default drawer;
