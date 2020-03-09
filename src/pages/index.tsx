import React, { useRef, useState, useEffect } from 'react';
import * as easings from 'd3-ease';
import { Layout, Hero, Text, WorkItem } from 'components';
import styled from 'styled-components';
import { media } from 'styles';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import SliderComponent from 'react-slick';
import { getItemFromImage } from 'utils';
import 'slick-carousel/slick/slick.css';
import { SEO } from '../components';
import { useSpring, animated } from 'react-spring';

var carouselSettings = {
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  cssEase: 'ease-in-out',
  centerMode: true,
  centerPadding: '2.5px',
  arrows: false,
  pauseOnHover: true,
  slidesToScroll: 1,
  slidesToShow: 4.2,
  swipeToSlide: true,
  accessibility: true,
};

const Slider = styled(SliderComponent)`
  display: none;

  ${media.lg(`
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    padding: 35px 0;
  `)}

  .slick-track > div {
  }
`;

const Section = styled.section`
  padding: 25px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  ${media.md(`
      padding: 55px 0 0 0;
  `)}
`;

const Greeting = styled(Text)`
  font-size: 22px;
  align-self: flex-start;
  margin-bottom: 45px;

  ${media.md(`
      font-size: 30px;
      padding-left: 20px;
  `)}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  ${media.lg(`
    display: none;
  `)}
`;

// const SubHeading = styled(Text)`
//   display: none;

//   ${media.md(`
//     display: inline;
//     color: #f47176;
//     align-self: flex-start;
//     margin-left: 25px;
//     opacity: 0.8;
//   `)}
// `;

interface IImage {
  id: string;
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}

const IndexPage: React.FC = () => {
  let scrollRef = useRef<number>(null!);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const animationHero = useSpring({
    config: {
      duration: 750,
      mass: 500,
      friction: 100,
      tension: 300,
      easing: easings.easeCubicInOut,
    },
    transform: fade ? 'translateY(-500px)' : 'translateY(0px)',
  });

  // const trail = useTrail(items.length, {
  //   from: { opacity: 0, transform: 'translate3d(0,90px,0)' },
  //   opacity: 1,
  //   transform: 'translate3d(0,0px,0)',
  //   config: { mass: 1, tension: 200, friction: 30 },
  // });

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const handleScroll = (e: any) => {
    const window = e.currentTarget;

    if (scrollRef > window.scrollY) {
      setFade(false);
      scrollRef = window.scrollY;
      return;
    }

    if (scrollRef < window.scrollY) {
      setFade(true);
      return;
    }

    scrollRef = window.scrollY;
  };

  const sliderAnchorTags = document.querySelectorAll('.slick-anchor'); // Get all anchor tags within the Slider

  sliderAnchorTags.forEach(slide => {
    slide.setAttribute('tabindex', '1'); // Change the tabindex of the slides to a positive value so they're accessible.
  });

  const {
    allFile: { nodes: images },
  } = data;

  return (
    <Layout>
      <SEO
        title="Hello"
        description="My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications &
        building them using React and Gatsby."
        lang="en"
        meta={[]}
      />
      <animated.div style={animationHero}>
        <Section>
          <Greeting>
            Hi friend <span role="img" aria-label="hand"></span>👋,
          </Greeting>
          <Hero />
        </Section>
      </animated.div>
      <Section id="projects">
        <FlexContainer>
          {images.map((image: IImage) => {
            const { href, workInformation } = getItemFromImage(
              image.childImageSharp.fluid.src
            );

            return (
              <WorkItem
                className="slick-anchor"
                href={href}
                key={image.id}
                target="_blank"
                rel="noopener noreferrer"
                alt={workInformation}
                imgSrc={image.childImageSharp.fluid}
                workInformation={workInformation}
              />
            );
          })}
        </FlexContainer>
        <Slider {...carouselSettings}>
          {images.map((image: IImage) => {
            const { href, workInformation } = getItemFromImage(
              image.childImageSharp.fluid.src
            );

            return (
              <WorkItem
                className="slick-anchor"
                href={href}
                key={image.id}
                target="_blank"
                rel="noopener noreferrer"
                alt={workInformation}
                imgSrc={image.childImageSharp.fluid}
                workInformation={workInformation}
              />
            );
          })}
        </Slider>
      </Section>
    </Layout>
  );
};

export default IndexPage;
