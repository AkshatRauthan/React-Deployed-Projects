import { StrictMode } from "react";
import SnakeGame from "./SnakeGame";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SnakeGame />
    </StrictMode>
);
