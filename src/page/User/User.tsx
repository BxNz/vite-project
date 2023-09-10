import { Box, Button, Container } from "@mui/material"
import UserTb from "./UserTb"
import { useEffect, useState } from "react";
import UserService from "../../services/UserService";
type Props = {}

function User({}: Props) {



  useEffect(() => {
    try {
      const getUser = async () => {
        const Userder = await UserService.getUser();
        if(Userder.status === 200){
        setUserList(Userder.data)
        // console.log(Productder);
        }
      };

      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [UserList, setUserList] = useState<any>([]);
  return (
    <Container>
        <Box sx={{padding:"25px", margin:"10px"}} >
            <Button variant="contained"> Create</Button>
    <UserTb Userlist = {UserList}/>
    </Box>
    </Container>
  )
}

export default User