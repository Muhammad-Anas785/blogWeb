import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import SideDrawer from "./SideDrawer";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    textTransform: "uppercase",
    fontFamily: "sans-serif",
    justifyContent: "center",
    fontSize: 20,
  },
  divide: {
    backgroundColor: "gray",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" color="inherit" className={classes.title}>
          Power Words
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider className={classes.divide} />

      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </ThemeProvider>
  );
};

export default Header;
