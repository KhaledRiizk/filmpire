import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">Add favorites to see them here!</Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
