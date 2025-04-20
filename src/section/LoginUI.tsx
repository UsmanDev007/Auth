import React from "react";
import { TextField, Typography, Box,  Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "../components/Button";
import { UseAuth } from "../hooks/UseAuth";

const LoginUI:React.FC = () => {
  const {loginMuation}=UseAuth();
  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handlelogin=async()=>{
      if(username==""||password==""){
          alert("Fill Up the TextFeild First")
      }
      else{
      try{
        await loginMuation.mutateAsync({username,password});
        alert('login success')
      }
      catch(error){
        alert('login failed')
      }
    }
  }
  return (
    <Box
      sx={{
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fffcfc",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, textAlign: "center",backgroundColor:"#ffffff" }}>
          <Typography variant="h4" fontWeight={600} mb={2} sx={{color:"#2a2a2a"}}>
            Login
          </Typography>
          <TextField label="Username"  fullWidth margin="normal" variant="outlined" onChange={(e)=>setusername(e.target.value)} />
          <TextField label="Password" fullWidth margin="normal" variant="outlined" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Link to="/reset" style={{ display: "block", marginTop: "10px", marginBottom: "10px",textDecoration:'none',color:"#2a2a2a",textAlign:'left',marginLeft:'5px', }}>
            Forgot password?
          </Link>
          <CustomButton name="Login" onClick={handlelogin}>
            Login
          </CustomButton>
          <Typography variant="body2" mt={2}>
            Don't have an account? <Link to="/sign-up" style={{textDecoration:"none",color:"#2a2a2a"}}>Sign up</Link>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginUI;
