import { createBrowserRouter, Navigate } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import ToDoList from "./pages/ToDolist";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/pokemons" />,
    },
    {
        path: "/pokemons",
        element: <Pokemons />,
    },

    {
        path: "/todo-list",
        element: <ToDoList />,
    },
    
    
]);