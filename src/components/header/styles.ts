import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 50%;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  margin-right: 10px;
  text-decoration: none;
  font-weight: 500;

  &:last-child {
    margin: 0;
  }
`;
