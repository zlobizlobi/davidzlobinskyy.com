import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Image {
  width: string;
  height: string;
  src: string;
}

interface IProps {
  description: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
  keywords?: string[];
  image: Image;
}

export const SEO: React.FC<IProps> = ({
  description,
  meta = [],
  keywords = [],
  title,
  image,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || '';

  const metaImage = `${site.siteMetadata.siteUrl}${image}`;

  console.log(image);
  console.log(site);
  console.log(metaImage);
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `mobile-web-app-capable`,
          content: 'yes',
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        {
          meta: `theme-color`,
          content: `#fff`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:alt`,
          content: title,
        },
        {
          property: 'og:image:width',
          content: image.width,
        },
        {
          property: 'og:image:height',
          content: image.height,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ]
        .concat(meta.length ? meta : [])
        .concat(
          keywords.length
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )}
    />
  );
};
