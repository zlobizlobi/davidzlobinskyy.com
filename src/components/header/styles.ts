import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink as AnchorLinkComponent } from 'gatsby-plugin-anchor-links';
import { media } from 'styles';

export const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
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
  color: ${({ theme }) => theme.color.primary};
`;

const navLinkCss = css`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  opacity: 0.3;
  transition: opacity 0.2s ease;
  position: relative;

  &:last-child {
    padding-right: 60px;
  }

  ${media.xl(`
    &:last-child {
      padding: 15px;
    }
  `)}
`;

export const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
    textDecoration: 'underline'
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
