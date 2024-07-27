import { title } from "process";
import NewArticlePreview from "./new-article-preview";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import React from "react";

const NewArticles = () => {
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
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-accent text-4xl">New</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 h-min">
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
