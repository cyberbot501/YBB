import React, { useState, useEffect } from "react";
import { supabase } from "../../createClinte";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function ResultPage() {
  const [blogs, setBlogs] = useState([]); // Store blogs data
  const [loading, setLoading] = useState(true); // Loading state
  const [visibleCount, setVisibleCount] = useState(3); // Number of visible rows
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    setLoading(true);
    setError(null); // Reset error state

    const { data, error } = await supabase.from("blog").select("*");

    if (error) {
      console.error("Error fetching blogs:", error.message);
      setError("Failed to load blogs. Please try again later.");
    } else {
      setBlogs(data || []); // Ensure blogs is an array
    }
    setLoading(false);
  }

  // Truncate text to 100 words
  function truncateText(text, wordLimit = 100) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  }

  // Handle "Show More" button click
  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + 10);
  }

  // Handle "Learn More" navigation
  function handleLearnMore(blogId) {
    navigate(`/blog/${blogId}`); // Redirect to the full blog details page
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!blogs.length) {
    return <div className="text-center text-gray-500">No blogs found.</div>;
  }

  return (
    <>
      <div className="eventbg h-[200px] w-[100%] flex flex-col items-end gap-3 pt-24 md:px-[180px] px-[20px] mb-6">
        <h1 className="text-2xl text-[white] font-climate font-bold">BLOGS</h1>
        <hr className="md:w-[400px] w-[300px]" />
        <p className="font-inter font-normal text-[10px] md:text-[19px] text-white">
          FEMALE NETWORK FOUNDATION FOR EMPOWERMENT AND EQUITY
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <ul>
          {blogs.slice(0, visibleCount).map((blog) => (
            <li
              key={blog.id}
              className="border-b border-gray-200 py-4 flex flex-col md:flex-row items-start gap-4"
            >
              {blog.blog_image ? (
                <img
                  src={blog.blog_image}
                  alt={blog.blog_title}
                  className="w-full md:w-32 h-48 md:h-32 object-cover rounded-md"
                />
              ) : (
                <div className="w-full md:w-32 h-48 md:h-32 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                  No Image
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{blog.blog_title}</h2>
                <p
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                  }}
                  className="text-gray-700 max-w-[350px] md:max-w-[500px]"
                >
                  {truncateText(blog.blog_details)}
                </p>
                <button
                  className="text-blue-500 underline mt-2"
                  onClick={() => handleLearnMore(blog.id)}
                >
                  Learn More
                </button>
              </div>
            </li>
          ))}
        </ul>
        {visibleCount < blogs.length && (
          <div className="text-center mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}