import { useEffect, useState } from "react";

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error(error, "Ha ocurrido un error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <h3 className="card-header">Post</h3>
        {posts.map((post) => (
          <div key={post.id} className="card-header">
            <div className="card-header">
              <h4 className="card-title">Title:{post.title}</h4>
              <p className="card-text">Body:{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
