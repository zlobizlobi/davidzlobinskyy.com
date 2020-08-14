import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import autoPhoto from '../images/autoMe.png';
interface Image {
  width: string;
  height: string;
  src: string;
}

interface SeoProps {
  description: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
  image: Image;
}

type UrlProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      siteUrl: string;
    };
  };
};

export const SEO: React.FC<SeoProps> = ({
  description,
  meta = [],
  title,
  image,
}) => {
  const { site } = useStaticQuery<UrlProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const metaImage = `${site.siteMetadata.siteUrl}${image || autoPhoto}`;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`${title} | ${site.siteMetadata.title}`}
      meta={[
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
          content: `${title} | ${site.siteMetadata.title}`,
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
          content: autoPhoto.width,
        },
        {
          property: 'og:image:height',
          content: autoPhoto.height,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ].concat(meta.length ? meta : [])}
    />
  );
};
