import React from 'react';

import Image from 'next/image';

import { Box, Button, Typography } from '@mui/joy';

import bgPattern from '@/public/images/bgPattern.png';
import contentImgs from '@/public/images/contentImg.png';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: 'calc(100vh - 80px)',
        width: '100%',
        maxWidth: '1440px',
        backgroundImage: ` radial-gradient(52.19% 100% at 50% 0%, #F2F4F7 0%, rgba(0, 0, 0, 0) 95.31%),
 url(${bgPattern.src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{
        height: '100%',
        width: '1280px',
        padding: '0 32px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 40%',
          minWidth: '300px',
          gap: '48px',
          alignItems: 'start',
          justifyContent: 'center',
        }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '24px',
              flexDirection: 'column',
            }}
          >
            <Typography level="h2" fontSize="60px" fontWeight={500}>
              What can AI <br /> do for you?
            </Typography>
            <Typography
              sx={{
                color: '#475467',
                fontSize: '20px',
                fontWeight: '400',
              }}
            >
              At Solving.AI, we harness the transformative <br />
              power of generative artificial intelligence to <br />
              pioneer a new frontier of software applications.
            </Typography>
          </Box>
          <Button sx={{ backgroundColor: '#7F56D9', padding: '16px 22px' }}>
            Learn more about Solving AI
          </Button>
        </Box>
        <Box
          sx={{
            flex: '1 1 60%',
            minWidth: '300px',
            position: 'relative',
          }}
        >
          <Image
            src={contentImgs.src}
            alt="Hero Img"
            height={645}
            width={655}
          />
        </Box>
      </Box>
    </Box>

  );
}
