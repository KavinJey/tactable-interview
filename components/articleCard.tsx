import { Article } from "../utils/api"

const ArticleCard: React.FC<Article> = (article: Article) => {

 const { title, description, updatedAt, createdAt, comments, authors  } = article;

 return (
     <div>
        <h1> {title} </h1>
        <p> {description} </p>
     </div>
 )   
}

export default ArticleCard