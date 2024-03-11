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
      <div className="card">
        <h1 className="card-header">comments</h1>
        {comments.map((comment) => (
          <div key={comment.id} className="card-header">
            <div className="card-header">
              <h1 className="card-title">{comment.name}</h1>
              <p className="card-text">{comment.email}</p>
              <p className="card-text">{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
