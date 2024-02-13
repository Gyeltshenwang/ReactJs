
import { BookContext } from "../context/BookContext";
import { useContext } from "react";

export const useBookContext = () =>{
    return useContext(BookContext)
}