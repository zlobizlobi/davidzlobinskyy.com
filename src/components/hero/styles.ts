import styled from 'styled-components';
import { Text } from '../text';
import { media } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Greeting = styled(Text)`
  font-size: 22px;
  align-self: flex-start;
  margin-bottom: 45px;

  ${media.md(`
      font-size: 30px;
      padding-left: 20px;
  `)}
`;

export const Name = styled(Text)`
  font-size: 19px;

  ${media.md(`
      font-size: 22px;
  `)}
`;

export const Developer = styled(Text)`
  font-size: 24px;
  margin: 25px 0 60px 0;
  text-align: center;
  max-width: 230px;

  ${media.md(`
      font-size: 30px;
      max-width: 100%;
  `)}
`;

export const Biography = styled(Text)`
  font-size: 16px;
  max-width: 400px;

  &:last-child {
    margin-top: 20px;
  }

  ${media.md(`
    text-align: center;
  `)}
`;

export const Highlight = styled.a`
  padding-bottom: 1px;
  border-bottom: 2px solid black;
  transition: color 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};

  :hover {
    color: black;
  }
`;
