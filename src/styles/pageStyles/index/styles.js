import styled from 'styled-components';
import { media } from 'styles';
import { Text } from 'components';

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
    padding: 0 0 50px 0;

    ${media.md(`
      padding: 50px 0 200px 0;
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

  ${media.md(`
    border: 1px solid black;
    padding: 7.5px 12.5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 100px;
    transition: all 0.2s ease;
    background-color: transparent;
    color: ${({ theme }) => theme.color.primary};
  `)}
`;
