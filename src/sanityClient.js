import { createClient } from "next-sanity";

// Configure the Sanity client
export const client = createClient({
  projectId: "lkyn4a5a", // Replace with your actual project ID
  dataset: "production", // Your Sanity dataset
  apiVersion: "2024-01-01", // You can use the latest date
  useCdn: false, // Use CDN for faster fetches
});

