import styled from 'styled-components';

export interface IFlexProps {
  flexDir?: string;
}

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flexDir }: IFlexProps) => flexDir};
`;
