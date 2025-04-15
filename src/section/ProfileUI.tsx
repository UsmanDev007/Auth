import { Avatar, Box, Card, CardContent, Typography, Stack, Divider } from '@mui/material';
import { UseAuth } from '../hooks/UseAuth'

const ProfileUI = () => {
  const { CurrentUserMutation } = UseAuth();

  const user = CurrentUserMutation?.data?.data;

  if (CurrentUserMutation.isLoading) return <div>Loading...</div>;
  if (CurrentUserMutation.isError) return <div>Error loading user</div>;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Card sx={{ width: 400, p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Stack alignItems="center" spacing={2}>
          <Avatar
            src={user?.avatar?.url}
            alt={user?.username}
            sx={{ width: 100, height: 100 }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h6">{user?.username}</Typography>
          <Typography color="text.secondary">{user?.email}</Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <CardContent>
          <Typography variant="body2"><strong>Role:</strong> {user?.role}</Typography>
          <Typography variant="body2"><strong>Email Verified:</strong> {user?.isEmailVerified ? 'Yes' : 'No'}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Joined:</strong> {new Date(user?.createdAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileUI;
