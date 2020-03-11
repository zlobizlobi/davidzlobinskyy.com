import React from 'react';
import {
  Nav,
  NavLink,
  NavList,
  HeaderComponent,
  IconLink,
  AnchorLink,
} from './styles';

export const Header = () => (
  <HeaderComponent>
    <Nav>
      <IconLink to="/">zlob.</IconLink>
      <NavList>
        <NavLink to="/">
          hello
          <span />
        </NavLink>
        <AnchorLink to="#projects">
          projects
          <span />
        </AnchorLink>
        <NavLink to="/contact">
          contact me
          <span />
        </NavLink>
      </NavList>
    </Nav>
  </HeaderComponent>
);
