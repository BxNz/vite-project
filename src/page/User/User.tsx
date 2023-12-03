import {Button, Container, Typography } from "@mui/material"
import UserTb from "./UserTb"
import { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import CreateUserDialog from "./userDialog";
import EditUserDialog from "./userDialog";
type Props = {}

function User({}: Props) {

  const [userList, setUserList] = useState<any[]>([]);
  const [openCreateUserDiag, setOpenCreateUserDiag] = useState(false);
  const [openEdituserDiag, setopenEdituserDiag] = useState(false);

  useEffect(() => {
    try {
      const getUser = async () => {
        const Userder = await UserService.getUser();
        if(Userder.data.data){
        setUserList(Userder.data.data);
        // console.log(Productder);
        }
      };

      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleOpenCreateUserDiag = () => {
    setOpenCreateUserDiag(true);
  };

  const handleCloseCreateUserDiag = () => {
    setOpenCreateUserDiag(false);
  };

  const handleOpenEditUserDiag = () => {
    setopenEdituserDiag(true);
  };

  const handleCloseEdituserDiag = () => {
    setopenEdituserDiag(false);
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">User Management</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenCreateUserDiag}
      >
        Create
      </Button>
      <UserTb onEdit={handleOpenEditUserDiag} Userlist={userList} />
      <CreateUserDialog
        open={openCreateUserDiag}
        title="Create User"
        onClose={handleCloseCreateUserDiag}
      />
      <EditUserDialog
        open={openEdituserDiag}
        title="Edit User"
        onClose={handleCloseEdituserDiag}
      />
    </Container>
  )
}

export default User;