import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink as AnchorLinkComponent } from 'gatsby-plugin-anchor-links';

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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

const navLinkCss = css`
  color: ${({ theme }) => theme.color.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  opacity: 0.3;
  transition: opacity 0.2s ease;
  position: relative;
`;

export const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
  },
})`
  ${navLinkCss}
`;

export const AnchorLink = styled(AnchorLinkComponent)`
  ${navLinkCss};

  :focus {
    opacity: 1;
  }
`;
