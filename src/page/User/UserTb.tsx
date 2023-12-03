import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  onEdit: () => void;
  Userlist: any[];
};

function UserTb(this: any,props: Props) {
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

  // const rows = [
  //   {
  //     id: 1,
  //     Username: "Toms",
  //     Password: "1234",
  //     Age: 23,
  //     Address: "Veitaine",
  //   },
  //   {
  //     id: 2,
  //     Username: "Benz",
  //     Password: "1234",
  //     Age: 23,
  //     Address: "Veitaine",
  //   },
  // ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "lg" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.Userlist.map((row, index)=> (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.Age}</StyledTableCell>
              <StyledTableCell align="center">{row.Address}</StyledTableCell>
              {/* <StyledTableCell align="center">{row.price}</StyledTableCell> */}
              <StyledTableCell align="center">
                <IconButton aria-label="edit" onClick={props.onEdit}>
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
}

export default UserTb;
