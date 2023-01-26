import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);
    return [darkMode, setDarkMode]
}