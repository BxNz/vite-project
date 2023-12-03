import { Box, TextField, Typography, Button } from "@mui/material";
import styles from "../../styles/Login/LoginStyles";
import authService from "../../services/authService.tsx";
import { useState } from "react";


type Props = {
  setIsAuth:(isAuth:boolean) => void;
};

let Login = (props: Props) => {

  const [loginData, setLoginData] = useState<any>({});

  const handLogin = async () => {
    try {
      const login = await authService.login(loginData);

      if (login.data.success) {
        localStorage.setItem("token", login.data.data.token);
        props.setIsAuth(true);
        window.location.href = "/";
      } else {
        console.log(login);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handChange}
        />

        <TextField
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          onChange={handChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button}
          onClick={handLogin}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
