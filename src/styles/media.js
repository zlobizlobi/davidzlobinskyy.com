import { css } from 'styled-components';

export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
  xxl: 1450,
};

export const media = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => {
    return {
      ...acc,
      [label]: breakpointCss => css`
        @media (min-width: ${size}px) {
          ${breakpointCss}
        }
      `,
    };
  },
  {}
);
