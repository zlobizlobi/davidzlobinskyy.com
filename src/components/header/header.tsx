import React from 'react';
import { Nav, NavLink, NavList, HeaderComponent } from './styles';

export const Header = ({ siteTitle }: any) => (
  <HeaderComponent>
    <Nav>
      <NavLink to="/">zlob.</NavLink>
      <NavList>
        <NavLink to="/">hello</NavLink>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/contact">contact me</NavLink>
      </NavList>
    </Nav>
  </HeaderComponent>
);
