import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    <Link to="/" style={{textDecoration: "none", color:"white"}}>Buttons</Link>
                    
                </Typography>
                <Box alignItems="right" sx={{flexGrow: 1, textAlign: "right"}}>
                    <Link to="/login" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>Login</Link>
                    <Link to="/register" style={{textDecoration: "none", color: "white"}}>Register</Link>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar