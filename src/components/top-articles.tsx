import TopArticlePreview from "./top-article-preview";
import React from "react";

const TopArticles = () => {
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
  return (
    <div className="flex flex-col md:flex-row gap-4 h-min my-4">
      {topArticles.map((article, index) => (
        <React.Fragment key={index}>
          <TopArticlePreview
            index={index + 1}
            imgUrl={article.img}
            title={article.title}
            desciption={article.description}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TopArticles;
