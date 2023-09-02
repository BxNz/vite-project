import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material";
import { Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  onEdit: () => void;
};

const ProductTB = (props: Props) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const rows = [
    {
      id: 1,
      barcode: "12355",
      name: "Pen",
      qty: 10,
      price: 5000,
    },
    {
      id: 2,
      barcode: "12354",
      name: "Pencil",
      qty: 10,
      price: 5000,
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "lg" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Barcode</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Qty</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell
                component="th"
                scope="row"
                
              >
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.barcode}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.qty}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="Edit" onClick={props.onEdit}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTB;
