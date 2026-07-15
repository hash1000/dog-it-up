export interface MenuItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price?: string;
  badge?: string;
}

export interface MenuSectionData {
  key: string;
  title: string;
  items: MenuItem[];
}

export const signatureDogs: MenuItem[] = [
  {
    slug: "classic-american",
    name: "Classic American",
    tagline: "The one that started it all.",
    image: "/menu/american-classic.webp",
    description:
      "100% All Beef Hot Dog, topped with Ketchup, Mustard and Relish.",
    badge: "Bestseller",
  },
  {
    slug: "nashville-hot",
    name: "Nashville Hot",
    tagline: "Sweet heat, no mercy.",
    image: "/menu/nashville-hot.webp",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot Sauce, Warm Cheddar Sauce and Pickles",
    badge: "Spicy",
  },
  {
    slug: "kansas-city-smokehouse",
    name: "Kansas City Smokehouse",
    tagline: "Smoke, cheddar, bacon. Case closed.",
    image: "/menu/kansas-city-smokehouse.webp",
    description:
      "100% All Beef Hot Dog, topped with Nashville Hot and Warm Cheddar Sauce, bacon, and Pickles",
  },
  {
    slug: "midwest-mac-daddy",
    name: "Midwest Mac Daddy",
    tagline: "Mac & cheese called shotgun.",
    image: "/menu/midwest-mac-daddy.webp",
    description:
      "100% All Beef Hot Dog, topped with creamy mac & cheese, Warm Cheddar Sauce and Cheddar Sauce and Bacon.",
  },
  {
    slug: "texas-chili-cheese",
    name: "Texas Chili Cheese",
    tagline: "Everything's bigger. Especially this.",
    image: "/menu/texas-chili-cheese.webp",
    description:
      "100% All Beef Hot Dog, topped with No Bean Chili, Warm Cheddar Sauce and Cheddar Sauce and diced onions.",
  },
];

export const sides: MenuItem[] = [
  {
    slug: "crinkle-fries",
    name: "Crinkle Fries",
    tagline: "Extra ridges, extra crunch.",
    image: "/menu/crinkle-cut-fries.webp",
    description: "Regular or Large",
  },
  {
    slug: "onion-rings",
    name: "Onion Rings",
    tagline: "Golden halos with a crunch.",
    image: "/menu/onion-rings.webp",
    description: "Regular or Large",
  },
  {
    slug: "frings",
    name: "Frings",
    tagline: "Fries and rings ended the rivalry.",
    image: "/menu/frings.webp",
    description: "Regular or Large",
  },
  {
    slug: "mac-n-cheese",
    name: "Mac n Cheese",
    tagline: "Comfort food's greatest hit.",
    image: "/menu/mac-n-cheese.webp",
    description: "Regular or Large",
  },
  {
    slug: "loaded-chili-cheese-fries",
    name: "Loaded Chili Cheese Fries",
    tagline: "A full meal wearing a fries costume.",
    image: "/menu/loaded-chili-cheese-fries.webp",
    description:
      "Crispy Fries topped with No Bean Chili, Warm Cheddar Sauce, Bacon and diced Onion",
    badge: "Fan Favorite",
  },
];

export const drinks: MenuItem[] = [
  {
    slug: "lemonade",
    name: "Lemonade",
    tagline: "Sunshine, squeezed and iced.",
    image: "/menu/lemonade.webp",
    description: "Regular or Large",
  },
  {
    slug: "fountain-drinks",
    name: "Fountain Drinks",
    tagline: "Ice cold, endlessly fizzy.",
    image: "/menu/fountain-drinks.webp",
    description: "Regular or Large",
  },
];

export const menuSections: MenuSectionData[] = [
  { key: "signature-dogs", title: "Signature Dogs", items: signatureDogs },
  { key: "sides", title: "Sides", items: sides },
  { key: "drinks", title: "Drinks", items: drinks },
];
