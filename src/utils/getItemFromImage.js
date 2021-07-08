export const getItemFromImage = (src) => {
  const splittedArray = src.split('/');

  const imageReference = splittedArray[splittedArray.length - 1];

  switch (imageReference) {
    case 'cvmaker.png':
      return {
        href: 'https://cvmaker.nl',
        workInformation:
          'At CVMaker I was in charge of setting up the design system, rebuilding their website to a statically generated one with Gatsby and creating their core product from scratch with React and Apollo Client.',
        alt: 'CVMaker',
      };
    case 'iculture.png':
      return {
        href: 'https://iculture.nl',
        workInformation:
          'Developed three React, searchkit-like widgets for embedding on the iCulture website.',
        alt: 'ICulture',
      };
    case 'foleon.png':
      return {
        href: 'https://app.foleon.com',
        workInformation:
          "I helped Foleon's development team rebuilding their current editor and dashboard from Angular and flow to React with the new Hooks API and TypeScript.",
        alt: 'Foleon',
      };
    case 'lenny.png':
      return {
        href: 'https://lenny.tattoo',
        workInformation:
          'In exchange for a tattoo I made a portfolio website using React and Firebase hosting for Lithuanian/Norwegian acknowledged tattoo artist Linards Kristovskis. ',
        alt: 'Lenny',
      };
    case 'tatjana.png':
      return {
        href: 'https://tatjananeufeld.com',
        workInformation:
          'Portofolio Project for Concert Pianist Tatjana Neufeld build with Gatsby and Prismic',
        alt: 'Tatjana Neufeld',
      };
    case 'young-socials.png':
      return {
        href: 'https://stupefied-booth-657dff.netlify.com',
        workInformation: 'Small Web Project for "Young Socials | Video Agency"',
        alt: 'Young Socials',
      };
    case 'simpel.png':
      return {
        href: 'https://bestel.simpel.nl/sim-only',
        workInformation:
          "Being part of the Simpel team I helped improving all the order flows on Simpel's current website using VueJs.",
        alt: 'Simpel',
      };
    case 'ltl.jpg':
      return {
        href: 'https://learn-to-learn.nl',
        workInformation:
          'Website for homework guidance company Learn to Learn, built with NextJs and Tailwind',
        alt: 'Learn to Learn',
      };
    default:
      return {
        href: 'favicon',
        workInformation: '',
      };
  }
};
