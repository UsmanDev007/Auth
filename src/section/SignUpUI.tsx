import React from 'react'
import { TextField, Typography, Box,  Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CustomButton from "../components/Button";

const SignUpUI:React.FC = () => {
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
            SignUp to your account
          </Typography>
          <TextField label="Email" fullWidth margin="normal" variant="outlined" />
          <TextField label="Password" fullWidth margin="normal" variant="outlined" type="password" />
          <TextField label="Confirm Password" fullWidth margin="normal" variant="outlined" type="password" />
          <Box sx={{marginTop:"10px"}}>
          <CustomButton name="Login" onClick={()=>{}}>
            SignUp
          </CustomButton>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  )
}

export default SignUpUI
