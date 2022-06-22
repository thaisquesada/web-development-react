import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MyLink } from "../../Styles";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Navbar = () => {
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

    const darkMode = () => {
      const auxTheme = selectedTheme === "light" ? "dark" : "light";
      localStorage.setItem("selectedTheme", auxTheme);
      setSelectedTheme(auxTheme);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#91a6fe" }}>
               <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <MyLink to="/subject/register">Login</MyLink>
            </Button>
            <Button color="inherit" onClick={darkMode}>
              Dark mode
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar;