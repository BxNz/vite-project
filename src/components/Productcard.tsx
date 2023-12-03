
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../assets/download.png"

type Props = {
  _id: string,
  barcode:string;
  name:string;
  qty : number;
  price : number;

  HandleAddproductSale : (id : string, barcode : string, qty : number, price : number) => void;
}

export default function Productcard( Props : Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      image={Image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          10.000 LAK
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => Props.HandleAddproductSale(Props._id,Props.barcode,Props.qty,Props.price)}>ADD</Button>
     
      </CardActions>
    </Card>
  );
}
