const newArticles = [
  {
    title: "Hydrogen vs Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what means.",
  },
];

const topArticles = [
  {
    img: "/assets/images/image-retro-pcs.jpg",
    title: "Reviving retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "/assets/images/image-top-laptops.jpg",
    title: "Top 10 laptops of 2022",
    description: "Our best picks for different needs and budgets.",
  },
  {
    img: "/assets/images/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    description: "How the pandamic has sparked fresh opportunities.",
  },
];

// Write getter functions for the newArticles and topArticles arrays
export const getNewArticles = () => {
  return newArticles;
};

export const getTopArticles = () => {
  return topArticles;
};
