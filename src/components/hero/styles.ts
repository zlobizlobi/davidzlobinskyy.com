import styled from 'styled-components';
import { Text } from '../text';
import { media } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled(Text)`
  font-size: 19px;

  ${media.md(`
      font-size: 22px;
  `)}
`;

export const Developer = styled(Text)`
  font-size: 24px;
  margin: 25px 0 30px 0;
  text-align: center;
  max-width: 230px;

  ${media.md(`
      font-size: 30px;
      max-width: none;
  `)}
`;

export const Biography = styled(Text)`
  font-size: 16px;
  max-width: 400px;
  margin-top: 30px;

  ${media.md(`
    text-align: center;
  `)};
`;

export const Highlight = styled.a`
  padding-bottom: 1px;
  border-bottom: 2px solid black;
  transition: color 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};

  :hover {
    color: black;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 45px;

  > a {
    margin-right: 15px;
  }

  > a:last-child {
    margin: 0;
  }
`;
