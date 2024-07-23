import React from 'react';

import type { SvgIconProps } from '@mui/joy';
import { SvgIcon } from '@mui/joy';

import solvingIcon from '@/public/icons/solvingIcon.svg';

export default function SolvingAILogo(props: SvgIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 42 38"
      component={solvingIcon}
      {...props}
    />
  );
}
