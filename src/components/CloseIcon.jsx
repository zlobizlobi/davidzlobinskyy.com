import React from 'react';
import styled from 'styled-components';

export default function CloseIcon({ width = 24, height = 24, className }) {
  return (
    <StyledSvg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  stroke: rgba(255, 255, 255, 0.6);

  transition: stroke 250ms ease-in-out;

  :hover {
    stroke: #fff;
  }
`;
