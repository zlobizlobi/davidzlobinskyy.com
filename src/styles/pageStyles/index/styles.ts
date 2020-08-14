import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';

export const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin: 50px auto 0 auto;
    max-width: 900px;
    height: 100vh;
  }

  &:last-child {
    padding: 40px 15px 30px 15px;
  }

  ${media.md(`
     &:last-child {
      padding: 0 15px 130px 15px;
    }
  `)}
`;



export const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1300px;
`;

export const Button = styled.button`
  display: none;
  transition: all 0.2s ease;

  color: ${({ theme }) => theme.color.secondary};
  border: 2px solid ${({ theme }) => theme.color.secondary};

  :hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.secondary};
  }

  ${media.md(`
    padding: 7.5px 10px;
    font-size: 14px;
    display: inline;
    cursor: pointer;
    margin-top: 35px;
    transition: all 0.2s ease;
    background-color: transparent;
  `)}
`;

export const Heading = styled(HeadingComponent)`
  &&& {
    margin-bottom: 20px;

    &:nth-child(1) {
      display: block;

      ${media.md(`
        display: none;
      `)}
    }

    &:nth-child(2) {
      display: none;

      ${media.md(`
        display: inline;
        padding-left: 50px;
      `)}
    }
  }
`;

export const SubHeading = styled(HeadingComponent)`
  display: none;
  color: ${({ theme }) => theme.color.opaque};

  ${media.md(`
    display: inline;
    padding-left: 75px; 
    font-size: 20px;
    margin-bottom: 25px
  `)}
`;
