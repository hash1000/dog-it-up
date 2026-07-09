export interface MenuItem {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export const signatureDogs: MenuItem[] = [
  {
    slug: "classic-american",
    name: "Classic American",
    image: "/menu/american-classic.webp",
    description:
      "100% All Beef Hot Dog, topped with Ketchup, Mustard and Relish.",
  },
  {
    slug: "nashville-hot",
    name: "Nashville Hot",
    image: "/menu/nashville-hot.webp",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot Sauce, Warm Cheddar Sauce and Pickles",
  },
  {
    slug: "kansas-city-smokehouse",
    name: "Kansas City Smokehouse",
    image: "/menu/kansas-city-smokehouse.webp",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot and Warm Cheddar Sauce, bacon, and Pickles",
  },
  {
    slug: "midwest-mac-daddy",
    name: "Midwest Mac Daddy",
    image: "/menu/midwest-mac-daddy.webp",
    description:
      "100% All Beef Hot Dog, topped with creamy mac & cheese, Warm Cheddar Sauce and Cheddar Sauce and Bacon.",
  },
  {
    slug: "texas-chili-cheese",
    name: "Texas Chili Cheese",
    image: "/menu/texas-chili-cheese.webp",
    description:
      "100% All Beef Hot Dog, topped with No Bean Chili, Warm Cheddar Sauce and Cheddar Sauce and diced onions.",
  },
];

export const sides: MenuItem[] = [
  {
    slug: "crinkle-fries",
    name: "Crinkle Fries",
    image: "/menu/crinkle-cut-fries.webp",
    description: "Regular or Large",
  },
  {
    slug: "onion-rings",
    name: "Onion Rings",
    image: "/menu/onion-rings.webp",
    description: "Regular or Large",
  },
  {
    slug: "frings",
    name: "Frings",
    image: "/menu/frings.webp",
    description: "Regular or Large",
  },
  {
    slug: "mac-n-cheese",
    name: "Mac n Cheese",
    image: "/menu/mac-n-cheese.webp",
    description: "Regular or Large",
  },
  {
    slug: "loaded-chili-cheese-fries",
    name: "Loaded Chili Cheese Fries",
    image: "/menu/loaded-chili-cheese-fries.webp",
    description:
      "Crispy Fries topped with No Bean Chili, Warm Cheddar Sauce, Bacon and diced Onion",
  },
];

export const drinks: MenuItem[] = [
  {
    slug: "lemonade",
    name: "Lemonade",
    image: "/menu/lemonade.webp",
    description: "Regular or Large",
  },
  {
    slug: "fountain-drinks",
    name: "Fountain Drinks",
    image: "/menu/fountain-drinks.webp",
    description: "Regular or Large",
  },
];
