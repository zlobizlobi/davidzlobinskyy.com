import styled from 'styled-components';
import { Text as TextComponent } from '../text';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.color.secondary};
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  padding: 10px;
`;

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  position: absolute;
  opacity: 0;
  z-index: 2;
  text-decoration: none;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 2px;
  width: 260px;
  height: 80px;
  padding: 25px 15px;
  box-sizing: content-box;
  background-color: transparent;
  transition: all 0.2s ease;

  :hover {
    ${Overlay} {
      opacity: 0.9;
    }

    ${Text} {
      opacity: 1;
    }
  }
`;
