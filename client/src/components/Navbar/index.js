import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { NavbarContainer, UserContainer } from './styles';

const Navbar = () => {
    return (
        <NavbarContainer>
            <UserContainer>
                <IconButton>
                    <AccountCircle color='primary' />
                </IconButton>
            </UserContainer>
        </NavbarContainer>
    );
}
 
export default Navbar;
