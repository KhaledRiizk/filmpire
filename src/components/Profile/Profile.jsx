import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "../RatedCards/RatedCards";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const [page, setPage] = useState(1);

  const { data: favorite, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: page,
  });

  const { data: watchlist, refetch: refetchListed } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: page,
  });

  useEffect(() => {
    refetchFavorites();
    refetchListed();
  }, []);
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
      {!favorite?.results?.length && !watchlist?.results?.length ? (
        <Typography variant="h5">Add favorites to see them here!</Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favorite} />
          <RatedCards title="Watchlist" data={watchlist} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
