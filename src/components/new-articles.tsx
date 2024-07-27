import { getNewArticles } from "@/actions/articles/articles";
import NewArticlePreview from "./new-article-preview";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import React from "react";

const NewArticles = () => {
  const newArticles = getNewArticles();
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-accent text-4xl">New</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        {newArticles.map((article, index) => (
          <React.Fragment key={index}>
            <NewArticlePreview
              title={article.title}
              desciption={article.description}
            />
            {index !== newArticles.length - 1 && (
              <Separator className="bg-foreground " />
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default NewArticles;
