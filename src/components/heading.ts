import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondary};
  align-self: flex-start;
  margin-bottom: 20px;
`;
