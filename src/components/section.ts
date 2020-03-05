import styled from 'styled-components';
import { media } from 'styles';

export const Section = styled.section`
  padding: 0 15px;

  ${media.md(`
    padding: 0;
  `)}
`;
