import React from 'react';
import {
  Nav,
  NavLink,
  NavList,
  HeaderComponent,
  IconLink,
  AnchorLink,
} from './styles';

//DONE CHECK
export const Header: React.FC = () => (
  <HeaderComponent>
    <Nav>
      <IconLink to="/">zlob.</IconLink>
      <NavList>
        <NavLink to="/">
          hello
          <span />
        </NavLink>
        <NavLink to="#projects" title="projects">
          projects
          <span />
        </NavLink>
        <NavLink to="/contact">
          contact me
          <span />
        </NavLink>
      </NavList>
    </Nav>
  </HeaderComponent>
);
