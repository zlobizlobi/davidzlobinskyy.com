import styled from 'styled-components';
import { Text as TextComponent } from '../text';
import ImgComponent from 'gatsby-image';

// CHECK DONE

export const Overlay = styled.span`
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
  padding: 10px;
`;

export const Text = styled(TextComponent)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
`;

export const Container = styled.span`
  display: flex;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.color.secondary};
  padding: 25px 30px;
  transition: opacity 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  :hover {
    ${Overlay} {
      opacity: 0.8;
    }
  }
`;

export const Img = styled(ImgComponent).attrs({
  imgStyle: {
    objectFit: 'contain',
  },
})`
  width: 200px;
  height: 90px;
`;
