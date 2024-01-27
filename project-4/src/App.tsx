import { useState, useEffect } from "react";
import get from "./utils/http";
import { BlogPost } from "./components/BlogPosts";

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
    };
    
    fetchPosts();
  }, []);

  return <h1>Data Fetching!</h1>;
}

export default App;
