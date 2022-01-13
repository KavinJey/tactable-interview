import { Article } from "../utils/api";

const ArticleCard: React.FC<Article> = (article: Article) => {
  const { title, description, updatedAt, createdAt, comments, authors } =
    article;

  return (
    <div className="flex flex-col">
      <h1> {title} </h1>
      <p> {description} </p>

      <div className="details">
        <p> Comments ({comments.length}) </p>
        <p>
          {" "}
          By{" "}
          {authors.map((author) => {
            return `${author.name}\n`;
          })}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
