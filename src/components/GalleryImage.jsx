import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function GalleryImage(props) {
  const [hovered, setHovered] = useState(false);

  const animationStyles = useSpring({
    width: '100%',
    height: '100%',
    transform: hovered ? 'scale(1.3)' : 'scale(1)',
    config: {
      friction: 40,
      tension: 700,
      delay: 400,
    },
  });

  return (
    <animated.div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={animationStyles}
    >
      <StyledImage {...props} />
    </animated.div>
  );
}

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`;
