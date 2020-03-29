import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';
import Img from 'gatsby-image';
import { TiMail } from 'react-icons/ti';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  margin: 50px 15px;
  border: none;
  width: 450px;

  ${media.md(`
    margin: 100px 0;
    padding: 30px;
    border: 3px solid black;
    box-shadow: 13px 15px 23px -22px rgba(0, 0, 0, 0.75);
  `)};
`;

export const CTAContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 30px 0;
`;

export const FormHeading = styled(HeadingComponent)`
  && {
    color: ${({ theme }) => theme.color.secondary};
    font-size: 30px;
    font-weight: 300;
  }
`; // DONE CHECKING

export const Icon = styled(TiMail)`
  margin-top: 20px;
  font-size: 70px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Image = styled(Img).attrs({
  imgStyle: {
    objectFit: 'contain',
  },
})`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  ${media.md(`
     width: 170px;
     height: 170px;
  `)}
`;
