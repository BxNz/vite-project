import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../assets/IMG_20230610_215031.jpg";

export default function OrderItem() {
  return (
    <Card sx={{ display: "flex", margin:"5"}}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Water
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           Oty :  10
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
           Price:  10.000 LAK
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={Img}
        alt="Live from space album cover"
      />
    </Card>
  );
}
