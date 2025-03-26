import React, { useState } from "react";
import { TextField, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { UseAuth } from "../hooks/UseAuth";

const SignUpUI: React.FC = () => {
  const navigate=useNavigate();
  const { SignUpMuation } = UseAuth();
  const [username, SetUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSignUp = async () => {
    if (username == "" || email == "" || password == "" || role == "") {
      alert("Fill the Form First");
    } else {
      try {
        await SignUpMuation.mutateAsync({ email, password, role, username });
        alert("Register Success Now login please...");
        navigate('/login')
      } catch (error) {
        alert(error);
      }
    }
  };

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
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 2,
            textAlign: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            mb={2}
            sx={{ color: "#2a2a2a" }}
          >
            SignUp to your account
          </Typography>
          <TextField
            label="UserName"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => SetUsername(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Role(Must be in uppercase)"
            fullWidth
            margin="normal"
            variant="outlined"
            type="text"
            onChange={(e) => setRole(e.target.value)}
          />
          <Box sx={{ marginTop: "10px" }}>
            <CustomButton
              name="Login"
              onClick={() => {
                handleSignUp()
              }}
            >
              SignUp
            </CustomButton>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default SignUpUI;
