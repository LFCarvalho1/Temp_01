import React, { useState } from "react";
import { Typography, AppBar, Box, Menu, MenuItem, Button, styled, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    //Estilo da NavBar
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
    //Box Social
    const SocialBox = styled(Box)({
        display: "flex",
        gap: 10,
    })
    //Box Menu
    const MenuBox = styled(Box)({
        display: "flex",
        gap: 30,
    })        
    //Itens Menu
    const MenuItems = [
        { Name: "Home", path:"/"} ,        
        { Name: "Processo", path:"/processo"},
        { Name: "Faq", path: "/faq"},
        { Name: "Contact", path: "/contact"},
    ];
    //Ação menu direito
    const [open, SetOpen] = useState(false);
    //Ação barra menu
    const [value, setValue] = useState();

    return (
        <AppBar sx={{background:'#0596FF'}} position={"static"}>
            <StyledToolbar>
                <SocialBox>
                    <Typography>Atos</Typography>
                </SocialBox>

                <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" }}}>
                {MenuItems.map((item, index) => (
                    
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <Typography sx={{ cursor: "pointer", fontSize: "14px", color:"white",}} textAlign="center" value={value} onChange={(e, value)=> setValue(value)}>
                        {item.Name}</Typography>
                    </NavLink>
                    
                ))}
                </MenuBox>               
                
                <Button color="inherit">Login</Button>
                <MenuIcon 
                    sx={{
                        color:'white', 
                        display: { xs: "block", sm: "block", md: "none" }, 
                    }}
                    onClick={() => SetOpen(!open)}
                    
                    />
                
            </StyledToolbar>

            <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>SetOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ width: 150, height: "50vh", background:'#0596FF' }}>
        {MenuItems.map((item, index) => (
         <NavLink to={item.path} key={index} className="link" activeclassName="active">

         
        <MenuItem 
        sx={{ 
            cursor: "pointer", 
            fontSize: "14px",
            color:"white",
        }}
        >
            {item.Name}
            </MenuItem> </NavLink>   
        ))}
        </Box>
      </Menu>

        </AppBar>
    );
};

export default NavBar;