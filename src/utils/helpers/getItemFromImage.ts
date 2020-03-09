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
          'Developed three widgets for the users of the iCulture WordPress website. The widgets provide the user with a user interface for comparing Apple products from big Dutch webshops.',
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
        workInformation: 'https://iculture.nl',
      };
    case 'tatjana.png':
      return {
        href: 'https://tatjananeufeld.com',
        workInformation:
          'Gatsby Portofolio Project for Concert Pianist Tatjana Neufeld',
      };
    case 'young-socials.png':
      return {
        href: 'https://young-socials.nl',
        workInformation: 'Small Web Project for "Young Socials | Video Agency"',
      };
    case 'enable.jpg':
      return {
        href: 'https://enablethelabel.com',
        workInformation:
          'E-commerce platform for fashion company Enable the Label',
      };
    case 'simpel.png':
      return {
        href: 'https://bestel.simpel.nl/sim-only',
        workInformation: 'https://iculture.nl',
      };
    default:
      return {
        href: 'favicon',
        workInformation: '',
      };
  }
};
