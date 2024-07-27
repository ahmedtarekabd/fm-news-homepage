import Image from "next/image";

const TopArticlePreview = ({
  index,
  imgUrl,
  title,
  desciption,
}: {
  index: number;
  imgUrl: string;
  title: string;
  desciption: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="w-32 object-contain">
        <Image
          src={imgUrl}
          alt={"Article image: " + title}
          className=""
          width={1000}
          height={0}
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="text-3xl font-bold text-destructive">
          {(index < 10 ? "0" : "") + index}
        </p>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm text-foreground">{desciption}</p>
      </div>
    </div>
  );
};

export default TopArticlePreview;
