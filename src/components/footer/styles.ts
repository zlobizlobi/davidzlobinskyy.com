import styled from 'styled-components';
import { Text as TextComponent } from '../text';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.primary};
  border-top: 2px solid ${({ theme }) => theme.color.secondary};
  position: absolute;
  bottom: 0;
`;

export const Text = styled(TextComponent)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;

  &:first-child {
    margin-bottom: 10px;
  }
`;
