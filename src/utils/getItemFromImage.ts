interface IItem {
  href: string;
  workInformation: string;
}

export const getItemFromImage = (src: string): IItem => {
  const splittedArray: string[] = src.split('/');

  const imageReference: string = splittedArray[splittedArray.length - 1];

  switch (imageReference) {
    case 'iculture.png':
      return {
        href: 'https://iculture.nl',
        workInformation:
          'Developed three widgets for the iCulture website. The widgets are different interfaces for comparing Apple products from big Dutch webshops.',
      };
    case 'foleon.png':
      return {
        href: 'https://app.foleon.com',
        workInformation:
          "I helped Foleon's development team rebuilding their current editor from Angular and flow to React with the new Hooks API and TypeScript.",
      };
    case 'lenny.png':
      return {
        href: 'https://lenny.tattoo',
        workInformation:
          'In exchange for a breathtaking tattoo I made a portfolio website for Lithuanian/Norwegian acknowledged tattoo artist Linards Kristovskis.',
      };
    case 'tatjana.png':
      return {
        href: 'https://tatjananeufeld.com',
        workInformation:
          'Gatsby Portofolio Project for Concert Pianist Tatjana Neufeld',
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
          "Being part of the Simpel team within Enrise I helped improving all the order flows on Simpel's current website.",
      };
    default:
      return {
        href: 'favicon',
        workInformation: '',
      };
  }
};
