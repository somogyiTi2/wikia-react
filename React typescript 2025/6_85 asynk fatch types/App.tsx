import React, { ReactNode, useEffect, useState } from "react";
import BlogPosts, { BlogPost } from "./components/BlogPosts"
import { get } from "./util/http";
import fetchingImg from "./assets/data-fetching.png"
import ErrorMessage from "./components/ErrorMessage"

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFeatching, setFeatching] = useState<boolean>();
  const [error, setError] = useState<string | undefined>()


  useEffect(() => {
    async function fetchedPosts() {
      setFeatching(true);
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        })
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
        // setError((error as Error).message)
        // setError('Faied to fetch data.')
      }

    }
    setFeatching(false);
    fetchedPosts()
  }, [])

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error}/>
  }
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }
  if (isFeatching) {
    content = <p id="loading-fallback">Featching post...</p>
  }

  return <main>
    <img src={fetchingImg} alt="kep" />
    {content}
  </main>;
}

export default App;