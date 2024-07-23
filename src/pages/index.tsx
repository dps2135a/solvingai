import React from 'react';

import { Box } from '@mui/joy';

import Navbar from '@/components/library/navbar';
import HomePage from '@/components/pages/HomePage';
import Footer from '@/components/pages/HomePage/footer';

import { mockFooterData } from '@/mocks/mockFooter';

import type { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HomePage />
        <Footer data={mockFooterData} />
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const buildTime = new Date().toISOString();

  return {
    props: {
      buildTime,
    },
    revalidate: 10,
  };
};
