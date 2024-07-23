import React from 'react';

import { Box, Button, Typography } from '@mui/joy';

import Hero from './hero';

export default function HomePage() {
  return (
    <>

      <Hero />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px',
          marginY: '96px',
        }}
      >
        <Box sx={{
          display: 'flex',
          gap: '12px',
          flexDirection: 'column',
        }}
        >
          <Typography
            level="body-md"
            sx={{
              color: '#6941C6',
              fontWeight: 600,
            }}
          >
            Features
          </Typography>
          <Typography level="h4" fontSize="36px">
            Unlock yourself with Solving AI
          </Typography>
        </Box>
        <Typography level="body-md" fontSize="20px" fontWeight={400} sx={{ color: '#475467' }}>
          Dive into our suite of AI-powered applications and discover how they can <br />
          transform your daily operations.
        </Typography>
      </Box>

      <Box sx={{
        backgroundColor: '#F9FAFB',
        width: '1280px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '64px',
        marginY: '96px',
        borderRadius: '16px',
      }}
      >
        <Box sx={{
          display: 'flex',
          flex: '1 1 50%',
          flexDirection: 'column',
        }}
        >
          <Typography fontWeight={600} fontSize="30px">
            The App is free to use!
          </Typography>
          <Typography>
            You have $5 USD available to spend on AI.
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flex: '1 1 50%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '12px',
        }}
        >
          <Button sx={{
            backgroundColor: 'white',
            border: '1px solid #D0D5DD',
            color: 'black',
            padding: '12px 18px',
          }}
          >
            Learn more
          </Button>
          <Button sx={{
            backgroundColor: '#7F56D9',
            padding: '12px 18px',
          }}
          >
            Get started
          </Button>
        </Box>
      </Box>
    </>
  );
}
