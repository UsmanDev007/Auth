import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { UseAuth } from "../hooks/UseAuth";
import CustomButton from "../components/Button";

const ProfileUI = () => {
  const { CurrentUserMutation, LogoutMutation } = UseAuth();
  const handleLogout = () => {
    LogoutMutation.mutate();
  };

  const user = CurrentUserMutation?.data?.data;

  if (CurrentUserMutation.isLoading) return <div>Loading...</div>;
  if (CurrentUserMutation.isError) return <div>Error loading user</div>;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <CustomButton name="LogOut" onClick={handleLogout}>
          Logout
        </CustomButton>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ width: 400, p: 3, borderRadius: 3, boxShadow: 3 }}>
          <Stack alignItems="center" spacing={2}>
            <Avatar
              src={`https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033963.jpg?t=st=1745139157~exp=1745142757~hmac=4045e6b56f2b6d1b2a379e78bb6b5cfff8bd4a0237ecb0e1f08600a2a691c109&w=826`}
              alt={user?.username}
              sx={{ width: 200, height: 200 }}
            >
              {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h4">{user?.username.toUpperCase()}</Typography>
            <Typography color="text.secondary" variant="h4">{user?.email}</Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <CardContent>
            <Typography variant="h6">
              <strong>Role:</strong> {user?.role}
            </Typography>
            <Typography variant="h6">
              <strong>Email Verified:</strong>{" "}
              {user?.isEmailVerified ? "Yes" : "No"}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              <strong>Joined:</strong>{" "}
              {new Date(user?.createdAt).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ProfileUI;
