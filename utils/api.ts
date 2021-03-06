//  Typically be an process.env var or something but for the sake of brevity
import axios, { AxiosResponse } from "axios";

const API_URL = "https://6144e843411c860017d256f0.mockapi.io/api/v1/posts";
const exampleArticle = {
  title: "title 1",
  description:
    "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
  createdAt: "2021-05-20T01:13:07.861Z",
  updatedAt: "2021-09-17T04:11:19.105Z",
  id: "1",
  authors: [
    {
      createdAt: "2021-09-01T08:03:46.399Z",
      name: "Alison Ondricka",
      avatar: "https://cdn.fakercloud.com/avatars/ricburton_128.jpg",
      updatedAt: "2021-09-17T02:46:51.090Z",
      id: "1",
      postId: "1",
    },
    {
      createdAt: "2021-05-09T08:41:56.829Z",
      name: "Leigh Schuppe",
      avatar: "https://cdn.fakercloud.com/avatars/kuldarkalvik_128.jpg",
      updatedAt: "2021-09-16T21:18:15.506Z",
      id: "6",
      postId: "1",
    },
  ],
  comments: [
    {
      createdAt: "2021-03-04T23:50:32.618Z",
      title: "Qui quo non omnis tenetur.",
      description:
        "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
      updatedAt: "2021-09-17T02:24:07.859Z",
      id: "1",
      postId: "1",
    },
  ],
};

export type Article = typeof exampleArticle;

export type ArticleResponse = {
  articles: Article[];
  numberOfArticles: number;
  numberOfPages: number;
  currentArticlesForView: Article[];
}
async function fetchArticles(): Promise<ArticleResponse> {
  const articleHttpResponse: AxiosResponse<Article[]> = await axios.get(
    API_URL
  );
  const articles = articleHttpResponse.data;
  articles.sort((articleA, articleB) => {
                    const dateA = new Date(articleA.createdAt)
                    const dateB = new Date(articleB.createdAt)
                    return  dateB.getTime() - dateA.getTime();
                })

  const pagesNumber = (Math.round(articles.length / 5 ) > 1) ? Math.round(articles.length / 5 ) : 1

  const articleResponse = {
    articles: articles,
    numberOfArticles: articles.length,
    numberOfPages: pagesNumber,
    currentArticlesForView: articles.slice(0, 5)
  }

  return articleResponse;
}

export { fetchArticles };
