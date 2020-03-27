import styled from 'styled-components';
import { media } from 'styles';
import { Heading as HeadingComponent } from 'components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin: 100px 15px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  width: 450px;
  background-color: ${({ theme }) => theme.color.secondary};

  ${media.md(`
    margin: 100px 0;
  `)};
`;

export const FormHeading = styled(HeadingComponent)`
  && {
    align-self: center;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.color.primary};
    font-size: 30px;
  }
`;
