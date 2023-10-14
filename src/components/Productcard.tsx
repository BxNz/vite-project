
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../assets/IMG_20230610_215031.jpg"

export default function Productcard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      image={Image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Water
        </Typography>
        <Typography variant="body2" color="text.secondary">
          10.000 LAK
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD</Button>
     
      </CardActions>
    </Card>
  );
}
