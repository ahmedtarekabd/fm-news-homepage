import { getTopArticles } from "@/actions/articles/articles";
import TopArticlePreview from "./top-article-preview";
import React from "react";

const TopArticles = () => {
  const topArticles = getTopArticles();
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
