import React, { useEffect, useState } from "react";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComments(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>comments</h1>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h1>{comment.name}</h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
