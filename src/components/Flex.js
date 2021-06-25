import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${({ flexDir }) => flexDir};
`;
