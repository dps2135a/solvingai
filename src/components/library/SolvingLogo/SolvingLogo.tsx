import React from 'react';

import { Box, Typography } from '@mui/joy';

import SolvingAILogo from '@/components/icons/SolvingAILogo';

export default function SolvoLogo() {
  // const [re, setRe] = useState('');

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <SolvingAILogo sx={{ width: '34px' }} />
      <Box sx={{ display: 'flex' }}>
        <Typography level="body-lg">
          Solving
        </Typography>
        <Typography sx={{ fontSize: '10px', paddingLeft: '4.4px' }}>
          AI
        </Typography>
      </Box>
    </Box>
  );
}
