import styled from 'styled-components';
import { Text as TextComponent } from '../text';
import ImgComponent from 'gatsby-image';
import { media } from 'styles';

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

export const Container = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(237, 28, 36, 0.3);
  border-radius: 2px;
  padding: 25px 30px;
  box-sizing: content-box;
  background-color: transparent;
  transition: all 0.2s ease;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  :hover {
    ${Overlay} {
      opacity: 0.9;
    }

    ${Text} {
      opacity: 1;
    }
  }

  ${media.md(`
    width: unset;
  `)}
`;

export const Img = styled(ImgComponent).attrs({
  imgStyle: {
    objectFit: 'contain',
  },
})`
  width: 200px;
  height: 90px;
`;
