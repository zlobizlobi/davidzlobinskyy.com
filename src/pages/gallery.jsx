import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { graphql } from 'gatsby';
import Text from '../components/Text';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import styled from 'styled-components';
import { media } from '../styles/media';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGalleryItemFromImage } from '../utils/getGalleryItemFromImage';
import CloseIcon from '../components/CloseIcon';
import Boop from '../components/Boop';
import Seo from '../components/Seo';
import GalleryImage from '../components/GalleryImage';

export default function Gallery({ data }) {
  const queryObjectWithoutKeys = Object.values(data).map((value) => value);

  const [curImg, setImg] = useState(undefined);

  const currentImgSrc = queryObjectWithoutKeys[curImg];

  return (
    <Dialog.Root>
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
              childImageSharp: { gatsbyImageData },
            } = queryObjectWithoutKeys[index];

            return (
              <StyledDialogTrigger onClick={() => setImg(index)} key={index}>
                <GalleryImage image={gatsbyImageData} />
              </StyledDialogTrigger>
            );
          })}
        </ImagesContainer>
      </Container>
      <StyledDialogOverlay />
      <StyledDialogContent>
        {currentImgSrc && (
          <StyledFlex flexDir="column">
            <GatsbyImage
              image={currentImgSrc.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: 'contain' }}
            />
            <ModalImageHeading>
              {getGalleryItemFromImage(
                currentImgSrc.childImageSharp.gatsbyImageData.src
              )}
            </ModalImageHeading>
          </StyledFlex>
        )}
        <StyledDialogClose onClick={() => setImg(undefined)}>
          <Boop rotation={30}>
            <CloseIcon width={42} height={42} />
          </Boop>
        </StyledDialogClose>
      </StyledDialogContent>
    </Dialog.Root>
  );
}

const StyledDialogTrigger = styled(Dialog.Trigger)`
  appearance: none;
  border: none;
  background-color: transparent;
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

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ModalImageHeading = styled(Dialog.Title)`
  letter-spacing: 1px;
  font-weight: 400;
  color: white;
  width: fit-content;
  margin: 30px auto 0 auto;
  text-align: center;
`;

const StyledDialogContent = styled(Dialog.Content)`
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.xl(`
     height: 80%;
     padding: 60px 0;
  `)}
`;

const StyledDialogClose = styled(Dialog.Close)`
  display: none;

  ${media.sm(`
    display: inline;
    position: absolute;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    top: 20px;
    right: 20px;


    > svg {
      fill: rgba(255, 255, 255, 0.6);
    }

    :hover {
      > svg {
        fill: white;
      }
    }
  `)}
`;

const StyledDialogOverlay = styled(Dialog.Overlay)`
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
  fragment galleryImage on File {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
`;

export const query = graphql`
  query GalleryImages {
    image1: file(relativePath: { eq: "amsterdam-entrance.jpg" }) {
      ...galleryImage
    }
    image2: file(relativePath: { eq: "brouwersgracht.jpg" }) {
      ...galleryImage
    }
    image3: file(relativePath: { eq: "de-pijp.jpg" }) {
      ...galleryImage
    }
    image4: file(relativePath: { eq: "haarlemmerdijk.jpg" }) {
      ...galleryImage
    }
    image5: file(relativePath: { eq: "haarlemmersluis.jpg" }) {
      ...galleryImage
    }
    image6: file(relativePath: { eq: "karlovasi.jpg" }) {
      ...galleryImage
    }
    image7: file(relativePath: { eq: "lijnbaansgracht.jpg" }) {
      ...galleryImage
    }
    image8: file(relativePath: { eq: "noordermarkt.jpg" }) {
      ...galleryImage
    }
    image9: file(relativePath: { eq: "potami.jpg" }) {
      ...galleryImage
    }
    image10: file(relativePath: { eq: "potokaki.jpg" }) {
      ...galleryImage
    }
    image11: file(relativePath: { eq: "restaurant-potami.jpg" }) {
      ...galleryImage
    }
    image12: file(relativePath: { eq: "samiopoula.jpg" }) {
      ...galleryImage
    }
    image13: file(relativePath: { eq: "unknown.jpg" }) {
      ...galleryImage
    }
    image14: file(relativePath: { eq: "van-baerle-rooftop-party.jpg" }) {
      ...galleryImage
    }
    image15: file(relativePath: { eq: "yannis.jpg" }) {
      ...galleryImage
    }
    image16: file(relativePath: { eq: "blueberries.jpg" }) {
      ...galleryImage
    }
    image17: file(relativePath: { eq: "harp.jpg" }) {
      ...galleryImage
    }
    image18: file(relativePath: { eq: "radio.jpg" }) {
      ...galleryImage
    }
  }
`;
