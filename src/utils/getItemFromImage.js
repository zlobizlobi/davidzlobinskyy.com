export const getItemFromImage = src => {
  const splittedArray = src.split('/');

  const imageReference = splittedArray[splittedArray.length - 1];

  switch (imageReference) {
    case 'cvmaker.png':
      return {
        href: 'https://cvmaker.nl',
        workInformation:
          'At CVMaker I was in charge of setting up the design system, rebuilding their website to a statically generated one with Gatsby and creating their core product from scratch with React and Apollo Client.',
      };
    case 'iculture.png':
      return {
        href: 'https://iculture.nl',
        workInformation:
          'Developed three React, searchkit-like widgets for embedding on the iCulture website.',
      };
    case 'foleon.png':
      return {
        href: 'https://app.foleon.com',
        workInformation:
          "I helped Foleon's development team rebuilding their current editor and dashboard from Angular and flow to React with the new Hooks API and TypeScript.",
      };
    case 'lenny.png':
      return {
        href: 'https://lenny.tattoo',
        workInformation:
          'In exchange for a tattoo I made a portfolio website using React and Firebase hosting for Lithuanian/Norwegian acknowledged tattoo artist Linards Kristovskis. ',
      };
    case 'tatjana.png':
      return {
        href: 'https://tatjananeufeld.com',
        workInformation:
          'Portofolio Project for Concert Pianist Tatjana Neufeld build with Gatsby and Prismic',
      };
    case 'young-socials.png':
      return {
        href: 'https://stupefied-booth-657dff.netlify.com',
        workInformation: 'Small Web Project for "Young Socials | Video Agency"',
      };
    case 'enable.png':
      return {
        href: 'https://enablethelabel.com',
        workInformation:
          'E-commerce platform for fashion company Enable the Label',
      };
    case 'simpel.png':
      return {
        href: 'https://bestel.simpel.nl/sim-only',
        workInformation:
          "Being part of the Simpel team I helped improving all the order flows on Simpel's current website using VueJs.",
      };
    case 'ltl.jpg':
      return {
        href: 'https://learn-to-learn.nl',
        workInformation:
          'Website for homework guidance company Learn to Learn, built with NextJs and Tailwind',
      };
    default:
      return {
        href: 'favicon',
        workInformation: '',
      };
  }
};
