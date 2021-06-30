import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Text from '../components/Text';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import styled from 'styled-components';
import { media } from '../styles/media';
import Image from 'gatsby-image';
import { getGalleryItemFromImage } from '../utils/getGalleryItemFromImage';
import CloseIcon from '../components/CloseIcon';
import Boop from '../components/Boop';
import Seo from '../components/Seo';
import useScrollLock from '../hooks/useScrollLock';
import GalleryImage from '../components/GalleryImage';

export default function Gallery({ data }) {
  const queryObjectWithoutKeys = Object.values(data).map(value => value);

  const [curImg, setImg] = useState(undefined);

  const currentImgSrc = queryObjectWithoutKeys[curImg];

  const modalHasImage = curImg >= 0;

  useScrollLock(modalHasImage);

  return (
    <>
      <Seo
        title="Gallery"
        description="David Zlobinskyy's gallery made with analogue camera's"
      />
      <Container as="section">
        <StyledHeading>Gallery</StyledHeading>
        <SubHeading>Some of the photo's I took.</SubHeading>
        <ImagesContainer>
          {queryObjectWithoutKeys.map((_, index) => {
            const {
              childImageSharp: { fluid },
            } = queryObjectWithoutKeys[index];

            return (
              <ImageContainer
                tabIndex={0}
                key={index}
                onClick={() => setImg(index)}
              >
                <GalleryImage fluid={fluid} />
              </ImageContainer>
            );
          })}
        </ImagesContainer>
      </Container>
      {currentImgSrc && (
        <ModalOverlay>
          <ModalImage
            imgStyle={{ objectFit: 'contain' }}
            fluid={currentImgSrc.childImageSharp.fluid}
          />
          <ModalImageHeading>
            {getGalleryItemFromImage(currentImgSrc.childImageSharp.fluid.src)}
          </ModalImageHeading>
          <CloseIconContainer onClick={() => setImg(undefined)}>
            <Boop rotation={30}>
              <CloseIcon width={42} height={42} />
            </Boop>
          </CloseIconContainer>
        </ModalOverlay>
      )}
    </>
  );
}

const ModalImageHeading = styled.h3`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  letter-spacing: 1px;
  font-weight: 400;
  position: absolute;
  bottom: 60px;
  color: white;
`;

const CloseIconContainer = styled.button`
  position: absolute;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  top: 30px;
  right: 30px;
  z-index: 1000;

  > svg {
    fill: rgba(255, 255, 255, 0.6);
  }

  :hover {
    > svg {
      fill: white;
    }
  }
`;

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalImage = styled(Image)`
  width: calc(100% - 80px);
  height: fit-content;

  ${media.sm(`
    height: calc(100vh - 80px);
  `)}
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 5px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  ${media.sm(`
      width: 200px;
  `)}
`;

const ImagesContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  ${media.xs(`
      max-width: 870px;
  `)}
`;

const Container = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
`;

const StyledHeading = styled(Heading)`
  font-size: 32px;
  font-weight: 900;
  color: #243141;
  margin-bottom: 10px;
`;

const SubHeading = styled(Text)`
  color: #243141;
  margin-bottom: 60px;

  ${media.md(`
    display: inline;
    font-size: 20px;
  `)}
`;

export const image = graphql`
  fragment image on File {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const query = graphql`
  query GalleryImages {
    image1: file(relativePath: { eq: "amsterdam-entrance.jpg" }) {
      ...image
    }
    image2: file(relativePath: { eq: "brouwersgracht.jpg" }) {
      ...image
    }
    image3: file(relativePath: { eq: "de-pijp.jpg" }) {
      ...image
    }
    image4: file(relativePath: { eq: "haarlemmerdijk.jpg" }) {
      ...image
    }
    image5: file(relativePath: { eq: "haarlemmersluis.jpg" }) {
      ...image
    }
    image6: file(relativePath: { eq: "karlovasi.jpg" }) {
      ...image
    }
    image7: file(relativePath: { eq: "lijnbaansgracht.jpg" }) {
      ...image
    }
    image8: file(relativePath: { eq: "noordermarkt.jpg" }) {
      ...image
    }
    image9: file(relativePath: { eq: "potami.jpg" }) {
      ...image
    }
    image10: file(relativePath: { eq: "potokaki.jpg" }) {
      ...image
    }
    image11: file(relativePath: { eq: "restaurant-potami.jpg" }) {
      ...image
    }
    image12: file(relativePath: { eq: "samiopoula.jpg" }) {
      ...image
    }
    image13: file(relativePath: { eq: "unknown.jpg" }) {
      ...image
    }
    image14: file(relativePath: { eq: "van-baerle-rooftop-party.jpg" }) {
      ...image
    }
    image15: file(relativePath: { eq: "yannis.jpg" }) {
      ...image
    }
  }
`;
