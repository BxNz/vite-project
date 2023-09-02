import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
};

function ProductDialog(props: Props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>{props.title} </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="barcode"
          label="Barcode"
          type="text"
          fullWidth
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="Name"
          label="Name"
          type="text"
          fullWidth
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="QTY"
          label="QTY"
          type="text"
          fullWidth
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="Price"
          label="Price"
          type="text"
          fullWidth
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Craete
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onClose}>
          Cancle
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
