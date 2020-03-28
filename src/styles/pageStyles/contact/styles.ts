import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';
import Img from 'gatsby-image';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin: 100px 15px;
  border: none;
  width: 450px;

  ${media.md(`
    margin: 100px 0;
    padding: 30px;
    border: 2px solid black;
    box-shadow: 13px 15px 23px -22px rgba(0, 0, 0, 0.75);
  `)};
`;

export const HeadingContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 30px 0;

  > svg {
    margin-top: 20px;
    font-size: 40px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const FormHeading = styled(HeadingComponent)`
  && {
    align-self: center;
    color: ${({ theme }) => theme.color.secondary};
    font-size: 30px;
  }
`;

export const Image = styled(Img).attrs({
  imgStyle: {
    objectFit: 'contain',
  },
})`
  width: 150px;
  height: 150px;

  ${media.md(`
     width: 200px;
     height: 200px;
  `)}
`;
