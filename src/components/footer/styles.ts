import styled from 'styled-components';
import { Text as TextComponent } from '../text';
import { media } from '../../styles';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  border-top: 2px solid ${({ theme }) => theme.color.primary};
  position: fixed;
  bottom: 0;
  height: 65px;

  ${media.md(`
      flex-direction: row;
  `)}
`;

export const Text = styled(TextComponent)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};

  ${media.md(`
    &:first-child {
      margin-right: 10px;
    }
  `)}
`;
