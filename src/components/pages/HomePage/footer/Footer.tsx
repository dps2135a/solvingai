import React from 'react';

import { Box, Divider, List, ListItem, Typography } from '@mui/joy';

import SolvoLogo from '@/components/library/SolvingLogo/SolvingLogo';

import type { FooterItem } from '../HomePage';

export interface FooterProps {
  data: FooterItem[]
}

export default function Footer({
  data,
}: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        maxWidth: '1280px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >

        {data.map((section) => (
          <Box
            key={section.title}
            sx={{
              width: '218px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginY: '64px',
            }}
          >
            <Typography
              fontSize="12px"
              fontWeight={600}
              sx={{ color: '#101828' }}
            >{section.title}
            </Typography>
            <List>
              {section.items.map((item) => (
                <ListItem
                  key={item}
                  sx={{
                    padding: 0,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#6941C6',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
      <Divider />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '32px',
        marginBottom: '48px',
      }}
      >
        <SolvoLogo />
        <Typography sx={{
          fontSize: '16px',
          fontWeight: '400',
          color: '#667085',
        }}
        >
          © 2024 Solving.ai All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
