import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FluidObject } from 'gatsby-image';
import { animated } from 'react-spring';
import { Trail } from 'react-spring/renderprops';
import { Layout, Hero, Text, WorkCase } from 'components';
import { media } from 'styles';
import { getItemFromImage } from 'utils';
import { SEO } from '../components';
import { Waypoint } from 'react-waypoint';

const Section = styled.section`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin: 50px auto 100px auto;
    max-width: 900px;
    height: 100vh;
    box-sizing: content-box;
  }

  &:last-child {
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 0 50px 0;

    ${media.md(`
      padding: 50px 0 200px 0;
    `)}
  }
`;

const Greeting = styled(Text)`
  align-self: flex-start;
  margin: 30px 0;
  font-size: 20px;
  ${media.md(`
      font-size: 30px;
      padding-left: 100px;
  `)}
`;

const WorkCasesContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > a {
    &:last-child {
      margin: 0;
    }

    margin-bottom: 20px;

    ${media.sm(`
      margin: 10px;
    `)}
  }
`;

export const Button = styled.button`
  display: none;

  ${media.md(`
    border: 1px solid red;
    padding: 7.5px 12.5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 100px;
    transition: all 0.2s ease;


    :hover {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  `)}
`;

interface IImage {
  id: string;
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}

const IndexPage: React.FC = () => {
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

  const {
    allFile: { nodes: images },
  } = data;

  const projectSectionRef = useRef<HTMLElement>(null!);

  const [isFaded, setFaded] = useState<boolean>(false);

  const workCases = images.map((image: IImage) => {
    const { href, workInformation } = getItemFromImage(
      image.childImageSharp.fluid.src
    );

    return (
      <WorkCase
        href={href}
        key={image.id}
        target="_blank"
        rel="noopener noreferrer"
        alt={workInformation}
        imgSrc={image.childImageSharp.fluid}
        workInformation={workInformation}
      />
    );
  });

  return (
    <Layout>
      <SEO
        title="Hello"
        description="My name is David Zlobinskyy. I do Frontend Webdevelopment. Having 2 years of experience, I like designing web-applications &
        building them using React and Gatsby."
        lang="en"
        meta={[]}
      />
      <Section id="home">
        <Greeting>
          Hi friend{' '}
          <span role="img" aria-label="hand">
            👋
          </span>
          ,
        </Greeting>
        <Hero />
        <Button
          onClick={() => {
            window.scrollTo({
              behavior: 'smooth',
              top: projectSectionRef.current.offsetTop,
            });
            setFaded(true);
          }}
        >
          See my work
        </Button>
      </Section>
      <Waypoint
        onEnter={() => {
          setFaded(true);
          console.log('hit enter');
        }}
        onLeave={() => {
          setFaded(false);
          console.log('hit leave');
        }}
      >
        <Section id="projects" ref={projectSectionRef}>
          <WorkCasesContainer>
            <Trail
              config={{
                mass: 1,
                friction: 30,
                tension: 400,
                delay: !isFaded ? 0 : 500,
              }}
              items={workCases}
              keys={item => item.key}
              from={{
                opacity: 0,
                transform: isFaded ? 'translateY(0%)' : 'translateY(50%)',
              }}
              to={{
                opacity: isFaded ? 1 : 0,
                transform: isFaded ? 'translateY(0%)' : 'translateY(50%)',
              }}
            >
              {item => props => (
                <animated.div style={{ ...props, margin: '10px' }}>
                  {item}
                </animated.div>
              )}
            </Trail>
          </WorkCasesContainer>
        </Section>
      </Waypoint>
    </Layout>
  );
};

export default IndexPage;
