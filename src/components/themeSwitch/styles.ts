import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  position: fixed;
  top: 10%;
  right: 10px;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};

    > svg {
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.color.primary};
  }
`;
