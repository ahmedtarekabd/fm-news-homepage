const NewArticlePreview = ({
  title,
  desciption,
}: {
  title: string;
  desciption: string;
}) => {
  return (
    <div className="space-y-2">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{desciption}</p>
    </div>
  );
};

export default NewArticlePreview;
