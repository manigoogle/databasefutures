import type { Idea } from "@/types/idea"
import ideasData from "./ideas.json"

// Log the number of ideas being imported
console.log("Number of ideas in JSON:", Array.isArray(ideasData) ? ideasData.length : "Not an array")

// Ensure ideasData is treated as an array of Idea objects
export const ideas: Idea[] = Array.isArray(ideasData) ? ideasData : [ideasData].filter(Boolean) // If it's not an array, try to convert it to one if possible
