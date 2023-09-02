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

type Props = {}

function UserTb({}: Props) {
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
          Username: "Toms",
          Password: "1234",
        //   qty: 10,
        //   price: 5000,
        },
        {
          id: 2,
          Username: "Benz",
          Password: "1234",
        //   qty: 10,
        //   price: 5000,
        },
      ];

  return (
    <TableContainer component={Paper}>
<Table sx={{ maxWidth: "lg" }}>
<TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
          {/* <StyledTableCell align="center">Price</StyledTableCell> */}
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
              <StyledTableCell align="center">{row.Username}</StyledTableCell>
              <StyledTableCell align="center">{row.Password}</StyledTableCell>
              {/* <StyledTableCell align="center">{row.qty}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell> */}
              <StyledTableCell align="center">
                <IconButton aria-label="Edit" >
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
  )
}

export default UserTb

