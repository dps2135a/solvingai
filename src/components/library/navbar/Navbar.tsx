import React from 'react';

import {  Typography } from '@mui/joy';

import SolvingLogo from '../SolvingLogo';

import { LeftNavItems, NavbarContainer, NavItems, RightNavItems, StyledNavbar } from './styles';

export default function Navbar() {
  return (
    <NavbarContainer component="header">
      <StyledNavbar>
        <LeftNavItems>
          <SolvingLogo />
          <NavItems>
            <Typography>
              Features
            </Typography>
            <Typography>
              FAQ
            </Typography>
          </NavItems>
        </LeftNavItems>
        <RightNavItems>
          <Typography sx={{ color: '#6941C6' }}>
            Sign up
          </Typography>
        </RightNavItems>
      </StyledNavbar>
    </NavbarContainer>
  );
}
