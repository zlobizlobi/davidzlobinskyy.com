import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 3;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;
  cursor: pointer;

  > svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.color.primary};
  }
`;
