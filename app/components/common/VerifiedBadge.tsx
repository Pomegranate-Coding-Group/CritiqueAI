import React from 'react';
import { styled, CSS } from '@stitches-config';
import { Flex } from '@components/common';
import { IoCheckmark, IoCheckmarkCircle } from 'react-icons/io5';

const StyledVerifiedBadge = styled('div', Flex, {
  // alignItems: 'center',
  // backgroundColor: '$blue9',
  borderRadius: '$round',
  color: '$blue9',
  flexShrink: 0,
  // justifyContent: 'center',
  width: '$4',
  height: '$4',
  marginLeft: '$1',
  marginRight: '$1'
});

type VerifiedBadgeProps = React.ComponentProps<typeof StyledVerifiedBadge> & { css?: CSS };

export const VerifiedBadge = React.forwardRef<
  React.ElementRef<typeof StyledVerifiedBadge>,
  VerifiedBadgeProps
>((props, forwardedRef) => (
  <StyledVerifiedBadge {...props} ref={forwardedRef}>
    <IoCheckmarkCircle />
  </StyledVerifiedBadge>
));
