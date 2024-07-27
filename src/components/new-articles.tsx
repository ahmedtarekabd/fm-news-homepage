import { title } from "process";
import NewArticlePreview from "./new-article-preview";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import React from "react";

const NewArticles = () => {
  const newArticles = [
    {
      title: "The Bright Future of Web 3.0?",
      description:
        "We dive into the next evolution of web that claims to put the power of platforms back into the hands of the people. But is it really fulfilling",
    },
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
    <Card className="w-full md:w-[1000px] sm:w-[500px]">
      <CardHeader>
        <CardTitle className="text-accent">New</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {newArticles.map((article, index) => (
          <React.Fragment key={index}>
            <NewArticlePreview
              title={article.title}
              desciption={article.description}
            />
            {index !== newArticles.length - 1 && (
              <Separator className="bg-muted" />
            )}
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default NewArticles;
