import { type ReactNode, useState, useEffect } from "react";
import get from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImage from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);

      try {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogPost[];

    const blogPosts: BlogPost[] = data.map((rawPost) => {
      return {
        id: rawPost.id,
        title: rawPost.title,
        text: rawPost.body,

      }
    })
    setFetchedPosts(blogPosts);
  } catch (error) {
    // setError('Failed to fetch posts. Please try again later.');
    // setError((error as Error).message);
    if (error instanceof Error) {
      setError(error.message);
    }

   }


    setIsFetching(false);

  };

    
    fetchPosts();
  }, []);

  let content: ReactNode

  if(error) {
    content = <ErrorMessage text={error} />
  }

  if(fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if(isFetching) {
    content = <p>Fetching Posts</p>
  }

  return (
    <main>
      <img src={fetchingImage} alt="Fetching data" />
      {content}

    </main>
  );
}

export default App;
