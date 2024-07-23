import  { Box, styled } from '@mui/joy';

export const NavbarContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  height: '80px',
  backgroundColor: '##FFFFFF',
  borderBottom: '1px',
  boxShadow: `
      0px 1px 2px 0px #1018280D,
      0px -2px 0px 0px #1018280D inset,
    `,
}));

export const StyledNavbar = styled(Box)(() => ({
  margin: 'auto',
  width: '1280px',
  height: '32px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 32px',
}));

export const LeftNavItems = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const RightNavItems = styled(Box)(() => ({
  fontWeight: 600,
}));

export const NavItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  paddingLeft: '40px',
  fontWeight: 600,
  gap: '32px',
  '& *': {
    fontSize: theme.fontSize.md,
    color: '##475467',
  },
}));
