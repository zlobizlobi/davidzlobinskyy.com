export const getGalleryItemFromImage = src => {
  if (!src) {
    return null;
  }

  const splittedArray = src.split('/');

  const imageReference = splittedArray[splittedArray.length - 1];

  switch (imageReference) {
    case 'harp.jpg':
      return 'Middelburg - Lange Jan';
    case 'blueberries.jpg':
      return 'Amsterdam - 1800 Roeden';
    case 'radio.jpg':
      return 'Middelburg - Thriftshop';
    case 'amsterdam-entrance.jpg':
      return 'Amsterdam - Unknown location';
    case 'brouwersgracht.jpg':
      return 'Amsterdam - Brouwersgracht';
    case 'de-pijp.jpg':
      return 'Amsterdam - De Pijp';
    case 'haarlemmerdijk.jpg':
      return 'Amsterdam - Haarlemmerdijk';
    case 'haarlemmersluis.jpg':
      return 'Amsterdam - Haarlemmersluis ';
    case 'lijnbaansgracht.jpg':
      return 'Amsterdam - Lijnbaansgracht';
    case 'noordermarkt.jpg':
      return 'Amsterdam - Noordermarkt';
    case 'potami.jpg':
      return 'Samos - Potami';
    case 'restaurant-potami.jpg':
      return 'Samos - Potami';
    case 'samiopoula.jpg':
      return 'Samos - Samiopoula';
    case 'unknown.jpg':
      return 'Amsterdam - Unknown location';
    case 'van-baerle-rooftop-party.jpg':
      return 'Amsterdam - van Baerlestraat';
    case 'yannis.jpg':
      return 'Samos - Captain Yannis';
    case 'karlovasi.jpg':
      return 'Samos - Karlovasi';
    case 'potokaki.jpg':
      return 'Samos - Potokaki';
    default:
      return null;
  }
};
