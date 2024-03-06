import { useEffect, useState } from "react";

export const fecthData = async (endpoint) => {
  const urlBase = "https://jsonplaceholder.typicode.com/";
  const url = `${urlBase}${endpoint}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Ha ocurrido un error");
  }
};

export const CommentsComponent = () => {
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const dataComments = await fetchData("comments");
    setComments(dataComments);
    return comments;
  };

  useEffect(() => {
    loadComments();
  }, []);
};
