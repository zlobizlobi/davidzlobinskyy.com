import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 2px;
  width: 260px;
  height: 80px;
  margin-bottom: 20px;
  padding: 25px 15px;
  box-sizing: content-box;
  background-color: transparent;
  transition: background-color 0.2s ease;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
