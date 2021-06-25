import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink as AnchorLinkComponent } from 'gatsby-plugin-anchor-links';
import { media } from '../styles/media';

export default function Header() {
  return (
    <HeaderComponent>
      <Nav>
        <IconLink to="/">zlob.</IconLink>
        <NavList>
          <NavLink to="/">
            hi
            <span />
          </NavLink>
          <NavLink to="/work">
            work
            <span />
          </NavLink>
          <NavLink to="/gallery">
            gallery
            <span />
          </NavLink>
          <NavLink to="/contact">
            contact
            <span />
          </NavLink>
        </NavList>
      </Nav>
    </HeaderComponent>
  );
}

export const HeaderComponent = styled.header`
  z-index: 2;
  width: 100%;
  background-color: #f6f6f6;
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
  color: #243141;
`;

const navLinkCss = css`
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  position: relative;
  color: #405773;

  ${media.xl(`
    &:last-child {
      padding: 15px;
    }
  `)}
`;

export const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
    textDecoration: 'underline',
  },
})`
  ${navLinkCss}
`;

export const AnchorLink = styled(AnchorLinkComponent)`
  ${navLinkCss};

  :focus {
    color: #243141;
  }
`;
