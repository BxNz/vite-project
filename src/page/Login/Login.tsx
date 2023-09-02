import { Box, TextField, Typography, Button } from "@mui/material";
import styles from "../../styles/Login/LoginStyles";
type Props = {};

const Login = ({}: Props) => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
