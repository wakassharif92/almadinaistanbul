export type MenuCategory =
  | "Popular"
  | "Shawarma"
  | "Turkish Fatayer"
  | "Falafel Sandwich"
  | "Mandi"
  | "Turkish Pizza"
  | "Sides"
  | "Mutabbaq"
  | "Fries";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // base price shown
  from?: boolean; // "from Rs."
  description?: string;
  tags?: string[]; // e.g. ["Popular", "Single Serving"]
  serving?:
    | "Single Serving"
    | "Family"
    | "Serving 1 to 2 persons"
    | "Four person";
};

export const categories: MenuCategory[] = [
  "Popular",
  "Shawarma",
  "Turkish Fatayer",
  "Falafel Sandwich",
  "Mandi",
  "Turkish Pizza",
  "Sides",
  "Mutabbaq",
  "Fries",
];

export const menuItems: MenuItem[] = [
  // Popular
  {
    id: "shawarma-platter",
    name: "Shawarma Platter",
    category: "Popular",
    price: 1450,
    from: true,
    description: "Hearty platter for shawarma lovers.",
    tags: ["Most Ordered"],
    serving: "Single Serving",
  },
  {
    id: "falafel-hummus",
    name: "Sandwich Falafel with Hummus",
    category: "Popular",
    price: 740,
    from: true,
    description: "Falafel sandwich served with hummus.",
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "falafel-mixed",
    name: "Sandwich Falafel Mixed",
    category: "Popular",
    price: 770,
    from: true,
    description: "Mixed falafel sandwich.",
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "fatayer-chicken-cheese",
    name: "Fatayer Chicken Cheese",
    category: "Popular",
    price: 1030,
    description: "Cheese, Chicken",
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "mutton-cheese-mutabbaq",
    name: "Mutton Cheese Mutabbaq",
    category: "Popular",
    price: 900,
    description: "Crispy mutabbaq with mutton and cheese.",
    serving: "Single Serving",
  },
  {
    id: "mutton-mutabbaq",
    name: "Mutton Mutabbaq",
    category: "Popular",
    price: 780,
    description: "Classic mutton mutabbaq.",
    tags: ["Popular"],
    serving: "Single Serving",
  },

  // Shawarma
  {
    id: "sarookh-shawarma",
    name: "Sarookh Shawarma",
    category: "Shawarma",
    price: 770,
    from: true,
    serving: "Single Serving",
  },
  {
    id: "fateer-shawarma",
    name: "Fateer Shawarma",
    category: "Shawarma",
    price: 610,
    from: true,
    serving: "Single Serving",
  },
  {
    id: "shawarma-platter-2",
    name: "Shawarma Platter",
    category: "Shawarma",
    price: 1450,
    from: true,
    tags: ["Popular"],
    serving: "Single Serving",
  },

  // Turkish Fatayer
  {
    id: "fatayer-chicken-cheese-2",
    name: "Fatayer Chicken Cheese",
    category: "Turkish Fatayer",
    price: 1030,
    description: "Cheese, Chicken",
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "fatayer-mutton-cheese",
    name: "Fatayer Mutton Cheese",
    category: "Turkish Fatayer",
    price: 1160,
    description: "Mutton, Cheese",
    serving: "Single Serving",
  },
  {
    id: "special-fatayer",
    name: "Special Fatayer",
    category: "Turkish Fatayer",
    price: 1410,
    description: "Made with special ingredients",
    serving: "Single Serving",
  },
  {
    id: "fatayer-lubna-honey",
    name: "Fatayer Lubna Honey",
    category: "Turkish Fatayer",
    price: 1410,
    description: "Made with honey",
    serving: "Single Serving",
  },
  {
    id: "fatayer-mozzarella",
    name: "Fatayer Mozzarella Cheese",
    category: "Turkish Fatayer",
    price: 1410,
    description: "Mozzarella cheese",
    serving: "Single Serving",
  },
  {
    id: "aish-ul-bulbul",
    name: "Aish ul Bulbul",
    category: "Turkish Fatayer",
    price: 1550,
    description: "Serving 1 to 2 persons",
    serving: "Serving 1 to 2 persons",
  },
  {
    id: "fatayer-istanbul-special",
    name: "Fatayer Istanbul Special",
    category: "Turkish Fatayer",
    price: 1810,
    serving: "Single Serving",
  },
  {
    id: "family-fatayer",
    name: "Family Fatayer",
    category: "Turkish Fatayer",
    price: 3890,
    description: "Four person",
    serving: "Four person",
  },

  // Falafel Sandwich
  {
    id: "falafel-hummus-2",
    name: "Sandwich Falafel with Hummus",
    category: "Falafel Sandwich",
    price: 740,
    from: true,
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "falafel-simple",
    name: "Sandwich Falafel Simple",
    category: "Falafel Sandwich",
    price: 600,
    from: true,
    serving: "Single Serving",
  },
  {
    id: "falafel-mixed-2",
    name: "Sandwich Falafel Mixed",
    category: "Falafel Sandwich",
    price: 770,
    from: true,
    tags: ["Popular"],
    serving: "Single Serving",
  },

  // Mandi
  {
    id: "chicken-mandi-4",
    name: "Chicken Mandi For Four Person",
    category: "Mandi",
    price: 2080,
    description: "With sauce and raita.",
  },

  // Turkish Pizza
  {
    id: "veg-pizza",
    name: "Vegetable Pizza",
    category: "Turkish Pizza",
    price: 910,
    description: "Cheese, veggies",
    serving: "Single Serving",
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    category: "Turkish Pizza",
    price: 1040,
    from: true,
    description: "Cheese, chicken",
    serving: "Single Serving",
  },
  {
    id: "mixed-pizza",
    name: "Vegetable Chicken & Meat Mixed Pizza",
    category: "Turkish Pizza",
    price: 1370,
    description: "Cheese, chicken",
    serving: "Single Serving",
  },
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    category: "Turkish Pizza",
    price: 980,
    from: true,
    description: "Cheese",
    serving: "Single Serving",
  },

  // Sides
  {
    id: "hummus",
    name: "Hummus",
    category: "Sides",
    price: 670,
    serving: "Single Serving",
  },

  // Mutabbaq
  {
    id: "mutton-mutabbaq-2",
    name: "Mutton Mutabbaq",
    category: "Mutabbaq",
    price: 780,
    tags: ["Popular"],
    serving: "Single Serving",
  },
  {
    id: "mutton-cheese-mutabbaq-2",
    name: "Mutton Cheese Mutabbaq",
    category: "Mutabbaq",
    price: 900,
    tags: ["Popular"],
    serving: "Single Serving",
  },

  // Fries
  {
    id: "french-fries",
    name: "French Fries",
    category: "Fries",
    price: 580,
    serving: "Single Serving",
  },
];
