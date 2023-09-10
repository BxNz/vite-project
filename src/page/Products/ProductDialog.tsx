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
  handleonchage: (e: any) => void;
  handleclick: () => void;
  buttontext : string;
  data :any;
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
          name="barcode"
          label="barcode"
          type="text"
          fullWidth
          value={props.data.barcode || ""}
          onChange={props.handleonchage}
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="name"
          type="text"
          fullWidth
          value={props.data.name || ""}
          onChange={props.handleonchage}
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="qty"
          name="qty"
          label="qty"
          type="text"
          fullWidth
          value={props.data.qty || ""}
          onChange={props.handleonchage}
        ></TextField>
        <TextField
          autoFocus
          margin="dense"
          id="price"
          name="price"
          label="price"
          type="text"
          fullWidth
          value={props.data.price || ""}
          onChange={props.handleonchage}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={props.handleclick}>
          {/* buttontext:{props} */}
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onClose}>
          Cancle
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDialog;
