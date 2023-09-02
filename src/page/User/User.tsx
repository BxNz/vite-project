import { Box, Button, Container } from "@mui/material"
import UserTb from "./UserTb"
type Props = {}

function User({}: Props) {
  return (
    <Container>
        <Box sx={{padding:"25px", margin:"10px"}} >
            <Button variant="contained"> Create</Button>
    <UserTb/>
    </Box>
    </Container>
  )
}

export default User