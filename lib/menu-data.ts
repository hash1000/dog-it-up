export interface MenuItem {
  slug: string;
  name: string;
  image: string;
  ingredients: string[];
}

export const signatureDogs: MenuItem[] = [
  {
    slug: "classic-american",
    name: "Classic American",
    image: "/assets/american-classic.jpg",
    ingredients: [
      `1 Nathan's® 6" All-Beef Hot Dog`,
      `1 Fresh 6" Bakery Hot Dog Bun`,
      "1/2 oz. Ketchup",
      "1/2 oz. Mustard",
      "1/2 oz. Relish",
    ],
  },
  {
    slug: "nashville-hot",
    name: "Nashville Hot",
    image: "/assets/nashville-hot.jpg",
    ingredients: [
      `1 Premium 6" All-Beef Hot Dog`,
      `1 Fresh 6" Bakery Hot Dog Bun`,
      "1 oz. Nashville Hot Sauce",
      "1 oz. Warm Cheddar Cheese Sauce",
      "4 Pickle Chips",
    ],
  },
  {
    slug: "kansas-city-smokehouse",
    name: "Kansas City Smokehouse",
    image: "/assets/kansas-city-smokehouse.jpg",
    ingredients: [
      `1 Nathan's® 6" All-Beef Hot Dog`,
      `1 Fresh 6" Bakery Hot Dog Bun`,
      "1 oz. BBQ Sauce",
      "1 oz. Warm Cheddar Cheese Sauce",
      "1 oz. Chopped Bacon",
      "2 Crispy Onion Rings or 1 oz Crispy Fried Onions",
    ],
  },
  {
    slug: "midwest-mac-daddy",
    name: "Midwest Mac Daddy",
    image: "/assets/midwest-mac-daddy.jpg",
    ingredients: [
      `1 Nathan's® 6" All-Beef Hot Dog`,
      `1 Fresh 6" Bakery Hot Dog Bun`,
      "4 oz. Prepared Creamy Mac & Cheese",
      "1 oz. Warm Cheddar Cheese Sauce",
      "1 oz. Chopped Bacon",
    ],
  },
  {
    slug: "texas-chilli-cheese",
    name: "Texas Chilli Cheese",
    image: "/assets/texas-chili-cheese-dog.jpg",
    ingredients: [
      `1 Nathan's® 6" All-Beef Hot Dog`,
      `1 Fresh 6" Bakery Hot Dog Bun`,
      "2 oz. No-Bean Chili",
      "1 oz. Warm Cheddar Cheese Sauce",
      "1 oz. Diced White Onion",
      "4 Jalapeño Slices (Optional)",
    ],
  },
];

// TODO: real ingredients from client
const placeholderIngredients = [
  "Ingredient 1",
  "Ingredient 2",
  "Ingredient 3",
  "Ingredient 4",
  "Ingredient 5",
];

export const sides: MenuItem[] = [
  {
    slug: "crinkle-fries",
    name: "Crinkle Fries",
    image: "/assets/kansas-city-smoke-hoouse-box.jpg",
    ingredients: placeholderIngredients,
  },
  {
    slug: "frings",
    name: "Frings",
    image: "/assets/texas-chili-cheese-dog-box.jpg",
    ingredients: placeholderIngredients,
  },
  {
    slug: "onion-rings",
    name: "Onion Rings",
    image: "/assets/nashville-hot-box.jpg",
    ingredients: placeholderIngredients,
  },
  {
    slug: "mac-n-cheese",
    name: "Mac n Cheese",
    image: "/assets/mid-west-mac-daddy.jpg",
    ingredients: placeholderIngredients,
  },
  {
    slug: "loaded-chili-cheese-fries",
    name: "Loaded Chili Cheese Fries",
    image: "/assets/texas-chili-cheese-dog-box.jpg",
    ingredients: [
      "Reg 5 oz. Crinkle Cut Fries / Large 10 oz",
      "3 oz. No-Bean Chili",
      "2 oz. Warm Cheddar Cheese Sauce",
      "1 oz. Chopped Bacon",
      "1 oz. Diced Red Onion",
    ],
  },
];

export const drinks: MenuItem[] = [
  {
    slug: "fountain-drink",
    name: "Fountain Drink",
    image: "/assets/american-classic-drink.jpg",
    ingredients: placeholderIngredients,
  },
  {
    slug: "lemonade",
    name: "Lemonade",
    image: "/assets/texas-chili-cheese-dog-drink.jpg",
    ingredients: placeholderIngredients,
  },
];
