// import React, { useState, useEffect } from "react";
// import { supabase } from "../../createClinte"; // Adjust the import path if necessary

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(3); // Number of visible rows
//   const [error, setError] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null); // To store the selected blog

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   async function fetchBlogs() {
//     setLoading(true);
//     setError(null);

//     const { data, error } = await supabase.from("blog").select("*");

//     if (error) {
//       console.error("Error fetching blogs:", error.message);
//       setError("Failed to load blogs. Please try again later.");
//     } else {
//       setBlogs(data || []); // Ensure blogs is an array
//     }
//     setLoading(false);
//   }

//   // Truncate text to 100 words
//   function truncateText(text, wordLimit = 100) {
//     const words = text.split(" ");
//     if (words.length > wordLimit) {
//       return words.slice(0, wordLimit).join(" ") + " ...";
//     }
//     return text;
//   }

//   // Handle "Show More" button click
//   function handleShowMore() {
//     setVisibleCount((prevCount) => prevCount + 10);
//   }

//   // Handle "Learn More" modal popup
//   function handleLearnMore(blog) {
//     setSelectedBlog(blog); // Set the selected blog
//   }

//   // Close modal
//   function closeModal() {
//     setSelectedBlog(null);
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   if (!blogs.length) {
//     return <div className="text-center text-gray-500">No blogs found.</div>;
//   }

//   return (
//     <div><div className="eventbg h-[200px] w-[100%] flex flex-col items-end gap-3 pt-24 md:px-[180px] px-[20px] mb-6">
//     <h1 className="text-2xl text-[white] font-climate font-bold">BLOGS</h1>
//     <hr className="md:w-[400px] w-[300px]" />
//     <p className="font-inter font-normal text-[10px] md:text-[19px] text-white">
//       FEMALE NETWORK FOUNDATION FOR EMPOWERMENT AND EQUITY
//     </p>
//   </div>

//     <div className={`relative max-w-4xl mx-auto p-4 ${selectedBlog ? "" : ""}`}>
//       {/* <h1 className="text-3xl font-bold mb-6">Blogs</h1> */}
//       <ul>
//         {blogs.slice(0, visibleCount).map((blog) => (
//           <li
//             key={blog.id}
//             className="border-b border-gray-200 py-4 flex flex-col md:flex-row items-start gap-4"
//           >
//             {blog.blog_image ? (
//               <img
//                 src={blog.blog_image}
//                 alt={blog.blog_title}
//                 className="w-full md:w-32 h-48 md:h-32 object-cover rounded-md"
//               />
//             ) : (
//               <div className="w-full md:w-32 h-48 md:h-32 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
//                 No Image
//               </div>
//             )}
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold mb-2">{blog.blog_title}</h2>
//               <p
//                 style={{
//                   wordWrap: "break-word",
//                   whiteSpace: "normal",
//                   overflowWrap: "break-word",
//                 }}
//                 className="text-gray-700 max-w-[350px] md:max-w-[500px]"
//               >
//                 {truncateText(blog.blog_details)}
//               </p>
//               <button
//                 className="text-blue-500 underline mt-2"
//                 onClick={() => handleLearnMore(blog)}
//               >
//                 Learn More
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {visibleCount < blogs.length && (
//         <div className="text-center mt-6">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             onClick={handleShowMore}
//           >
//             Show More
//           </button>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedBlog && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-[20px]"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//           >
//             <h2 className="text-2xl font-bold mb-4">{selectedBlog.blog_title}</h2>
//             {selectedBlog.blog_image && (
//               <img
//                 src={selectedBlog.blog_image}
//                 alt={selectedBlog.blog_title}
//                 className="w-full h-auto rounded-md mb-4"
//               />
//             )}
//             <p  style={{
//                   wordWrap: "break-word",
//                   whiteSpace: "normal",
//                   overflowWrap: "break-word",
//                 }}
//                 className="text-gray-700 max-w-[350px] md:max-w-[500px]">{selectedBlog.blog_details}</p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }
