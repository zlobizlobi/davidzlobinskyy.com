import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const IconLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
`;

export const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
  },
})`
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  opacity: 0.4;
  transition: opacity 0.2s ease;
  position: relative;

  span {
    width: 0%;
    height: 1px;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.2s ease;
  }

  :hover {
    opacity: 1;

    > span {
      width: 100%;
    }
  }
`;
