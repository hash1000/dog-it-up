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
    image: "/menu/classic-american.png",
    description:
      "100% All Beef Hot Dog, topped with Ketchup, Mustard and Relish.",
  },
  {
    slug: "nashville-hot",
    name: "Nashville Hot",
    image: "/menu/nashville-hot.png",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot Sauce, Warm Cheddar Sauce and Pickles",
  },
  {
    slug: "kansas-city-smokehouse",
    name: "Kansas City Smokehouse",
    image: "/menu/kansas-city-smokehouse.png",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot and Warm Cheddar Sauce, bacon, and Pickles",
  },
  {
    slug: "midwest-mac-daddy",
    name: "Midwest Mac Daddy",
    image: "/menu/midwest-mac-daddy.png",
    description:
      "100% All Beef Hot Dog, topped with creamy mac & cheese, Warm Cheddar Sauce and Cheddar Sauce and Bacon.",
  },
  {
    slug: "texas-chili-cheese",
    name: "Texas Chili Cheese",
    image: "/menu/texas-chili-cheese.png",
    description:
      "100% All Beef Hot Dog, topped with No Bean Chili, Warm Cheddar Sauce and Cheddar Sauce and diced onions.",
  },
];

export const sides: MenuItem[] = [
  {
    slug: "crinkle-fries",
    name: "Crinkle Fries",
    image: "/menu/crinkle-fries.png",
    description: "Regular or Large",
  },
  {
    slug: "onion-rings",
    name: "Onion Rings",
    image: "/menu/onion-rings.png",
    description: "Regular or Large",
  },
  {
    slug: "frings",
    name: "Frings",
    image: "/menu/frings.png",
    description: "Regular or Large",
  },
  {
    slug: "mac-n-cheese",
    name: "Mac n Cheese",
    image: "/menu/mac-n-cheese.png",
    description: "Regular or Large",
  },
  {
    slug: "loaded-chili-cheese-fries",
    name: "Loaded Chili Cheese Fries",
    image: "/menu/loaded-chili-cheese-fries.png",
    description:
      "Crispy Fries topped with No Bean Chili, Warm Cheddar Sauce, Bacon and diced Onion",
  },
];

export const drinks: MenuItem[] = [
  {
    slug: "lemonade",
    name: "Lemonade",
    image: "/menu/lemonade.png",
    description: "Regular or Large",
  },
  {
    slug: "fountain-drinks",
    name: "Fountain Drinks",
    image: "/menu/fountain-drinks.png",
    description: "Regular or Large",
  },
];
