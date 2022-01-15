import { Article } from "../utils/api";

const ArticleCard: React.FC<Article> = (article: Article) => {
  const { title, description, updatedAt, createdAt, comments, authors } =
    article;

  return (
    <div className="flex flex-col prose">
      <h1 role="heading"> {title} </h1>
      <small className="prose-sm">
        {" "}
        Written {new Date(createdAt).toLocaleDateString("en-us")}
      </small>
      <small className="prose-sm prose-zinc">
        {" "}
        Updated {new Date(createdAt).toLocaleDateString("en-us")}
      </small>
      <p role="contentinfo"> {description} </p>

      <div className="details">
        <p>
          By{" "}
          {authors.length > 1 &&
            authors.map((author, index) => {
              return `${author.name}\n ${
                index !== authors.length - 1 ? "& " : ""
              }`;
            })}
          {authors.length === 1 && `${authors[0].name}\n`}
        </p>
        <p className="prose-sm"> Comments ({comments.length}) </p>
      </div>
    </div>
  );
};

export default ArticleCard;
