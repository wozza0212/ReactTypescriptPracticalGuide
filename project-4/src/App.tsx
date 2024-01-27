import { type ReactNode, useState, useEffect } from "react";
import get from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImage from "./assets/data-fetching.png";

type RawDataBlogPost = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  useEffect(() => {
    const fetchPosts = async () => {
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
  };

    
    fetchPosts();
  }, []);

  let content: ReactNode

  if(fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  return (
    <main>
      <img src={fetchingImage} alt="Fetching data" />
      {content}

    </main>
  );
}

export default App;
