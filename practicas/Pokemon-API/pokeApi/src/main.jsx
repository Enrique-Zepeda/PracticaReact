import React from "react";
import ReactDOM from "react-dom/client";
import { PokeAPI } from "./PokeAPI";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeAPI />
  </React.StrictMode>
);
