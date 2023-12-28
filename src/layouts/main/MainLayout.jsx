import { Toolbar, Button, Stack, IconButton, Box } from "@mui/material";
import { IconMenu, IconMenu2 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Toolbar
        sx={{ boxShadow: 5 }}
      >
        <Button sx={{ fontSize: 20 }}>
          Booking
        </Button>
        <Stack direction="row" gap={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <NavButton route="/">
            Home
          </NavButton>
          <NavButton route="/my-profile">
            My profile
          </NavButton>
        </Stack>
        <Box sx={{ ml: 'auto' }}>
          <Stack >
            <Button
              variant="contained"
              sx={{ borderRadius: 5, display: { xs: "none", sm: "block" } }}
            >
              Sign in
            </Button>
          </Stack>

          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <IconMenu2 />
          </IconButton>
        </Box>


      </Toolbar>
      {children}
    </>
  )
}

const NavButton = ({ route, children }) => {
  return (
    <Button
      component={NavLink}
      to={route}
      sx={{ color: "#252525", borderBottom: 2, borderRadius: 0, borderColor: "transparent", "&.active": { borderColor: "#252525", fontWeight: 700 } }}
    >
      {children}
    </Button>
  )
}