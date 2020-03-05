import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Button } from './styles';

interface IProps {
  theme: any;
  onClick: () => void;
}

export const ThemeSwitch: React.FC<IProps> = ({ theme, onClick }) => (
  <Button onClick={onClick}>{theme ? <FiSun /> : <FiMoon />}</Button>
);
