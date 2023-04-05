"use client";
import { Button, Grid, Stack } from "@mui/material";
import { userStore, UserStore } from "./global/userStore";
import Link from "next/link";
import { paths } from "./global/variables";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Home() {
  const user = userStore((state: UserStore) => state.user);

  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1 className="text-blue-500">Users authentications template </h1>
      <Stack direction="row" columnGap={1}>
        {user ? (
          <Button variant="contained">
            <LogoutIcon /> Logout
          </Button>
        ) : (
          <Link href={paths.authentication.login}>
            <Button variant="contained">
              <LoginIcon />
              Login
            </Button>
          </Link>
        )}
      </Stack>
    </Grid>
  );
}
