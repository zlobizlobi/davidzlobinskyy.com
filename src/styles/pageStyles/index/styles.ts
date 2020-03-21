import styled, { DefaultTheme } from 'styled-components';
import { media } from 'styles';
import { Text, Heading as HeadingComponent } from 'components';

export const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin: 50px auto 100px auto;
    max-width: 900px;
    height: 100vh;
    box-sizing: content-box;
  }

  &:last-child {
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0 15px 50px 15px;

    ${media.md(`
      padding: 100px 0 100px  0;
    `)}
  }
`;

export const Greeting = styled(Text)`
  align-self: flex-start;
  margin: 50px 0 40px 0;
  font-size: 20px;

  ${media.md(`
      font-size: 30px;
      padding-left: 100px;
  `)}
`;

export const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > a {
    &:last-child {
      margin: 0;
    }

    margin-bottom: 20px;

    ${media.sm(`
      margin: 10px;
    `)}
  }
`;

export const Button = styled.button`
  display: none;

  color: ${({ theme }: DefaultTheme) => theme.color.secondary};
  border: 1px solid ${({ theme }: DefaultTheme) => theme.color.secondary};

  :hover {
    color: ${({ theme }: DefaultTheme) => theme.color.primary};
    background-color: ${({ theme }: DefaultTheme) => theme.color.secondary};
  }

  ${media.md(`
    padding: 7.5px 12.5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 100px;
    transition: all 0.2s ease;
    background-color: transparent;
  `)}
`;

export const Heading = styled(HeadingComponent)`
  &&& {
    &:nth-child(1) {
      display: block;
      margin-bottom: 20px;
      font-weight: 200;

      ${media.sm(`
      display: none;
    `)}
    }

    &:nth-child(2) {
      display: none;
      margin-bottom: 10px;

      ${media.sm(`
      display: inline;
      padding-left: 50px;
    `)}
    }
  }
`;

export const SubHeading = styled(HeadingComponent)`
  display: none;
  color: ${({ theme }) => theme.color.secondary};

  ${media.lg(`
    display: block;
    color: #f04248;
    padding-left: 75px; 
    opacity: 0.6;
    font-size: 20px;
    margin-bottom: 45px;
  `)}
`;
