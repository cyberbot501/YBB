import React, { useState, useEffect } from "react";
import { supabase } from "../createClinte";

export default function BlogPanel() {
  const [blogs, setBlogs] = useState([]);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [newBlog, setNewBlog] = useState({
    blog_title: "",
    blog_details: "",
    blog_image: null,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const { data, error } = await supabase.from("blog").select("*");
    if (error) {
      console.error("Error fetching blogs:", error.message);
    } else {
      setBlogs(data || []);
    }
  }

  function handleChange(event) {
    const { name, value, files } = event.target;
    setNewBlog((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function uploadImage(file) {
    const fileName = `${Date.now()}_${file.name}`;
    console.log("Uploading file:", fileName);

    const { data, error } = await supabase.storage
      .from("blog_bucket")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return null;
    }

    const { publicUrl } = supabase.storage
      .from("blog_bucket")
      .getPublicUrl(fileName);

    console.log("Image uploaded successfully:", publicUrl);
    return publicUrl || null;
  }

  async function createBlog(event) {
    event.preventDefault();

    // Upload the image if one is provided
    const imageUrl = newBlog.blog_image
      ? await uploadImage(newBlog.blog_image)
      : null;

    const { error } = await supabase.from("blog").insert({
      blog_title: newBlog.blog_title,
      blog_details: newBlog.blog_details,
      blog_image: imageUrl,
    });

    if (error) {
      console.error("Error creating blog:", error.message);
    } else {
      fetchBlogs();
      setNewBlog({
        blog_title: "",
        blog_details: "",
        blog_image: null,
      });
    }
  }

  async function deleteBlog(blogId) {
    const { error } = await supabase.from("blog").delete().eq("id", blogId);

    if (error) {
      console.error("Error deleting blog:", error.message);
    } else {
      fetchBlogs();
    }
  }

  async function saveBlog(event) {
    event.preventDefault();

    const imageUrl =
      blogToEdit.blog_image instanceof File
        ? await uploadImage(blogToEdit.blog_image)
        : blogToEdit.blog_image;

    const { error } = await supabase
      .from("blog")
      .update({
        blog_title: blogToEdit.blog_title,
        blog_details: blogToEdit.blog_details,
        blog_image: imageUrl,
      })
      .eq("id", blogToEdit.id);

    if (error) {
      console.error("Error saving blog:", error.message);
    } else {
      fetchBlogs();
      setBlogToEdit(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blog Panel</h1>

      {/* Add Blog Form */}
      <form
        onSubmit={createBlog}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md mb-8"
      >
        <input
          type="text"
          placeholder="Blog Title"
          name="blog_title"
          className="border p-2 rounded"
          value={newBlog.blog_title}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Blog Details"
          name="blog_details"
          className="border p-2 rounded col-span-2"
          value={newBlog.blog_details}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          name="blog_image"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded col-span-2 hover:bg-blue-700"
        >
          Add Blog
        </button>
      </form>

      {/* Edit Blog Form */}
      {blogToEdit && (
        <form
          onSubmit={saveBlog}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-yellow-100 p-4 rounded-md mb-8"
        >
          <h2 className="text-xl font-bold col-span-2">Edit Blog</h2>
          <input
            type="text"
            value={blogToEdit.blog_title}
            name="blog_title"
            className="border p-2 rounded"
            onChange={(e) =>
              setBlogToEdit({ ...blogToEdit, blog_title: e.target.value })
            }
            required
          />
          <textarea
            value={blogToEdit.blog_details}
            name="blog_details"
            className="border p-2 rounded col-span-2"
            onChange={(e) =>
              setBlogToEdit({ ...blogToEdit, blog_details: e.target.value })
            }
            required
          />
          <input
            type="file"
            accept="image/*"
            name="blog_image"
            className="border p-2 rounded"
            onChange={(e) =>
              setBlogToEdit({ ...blogToEdit, blog_image: e.target.files[0] })
            }
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded col-span-2 hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      )}

      {/* Blogs Table */}
      <table className="table-auto w-full bg-white shadow-md rounded-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Blog Title</th>
            <th className="px-4 py-2">Details</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-t">
              <td className="px-4 py-2">{blog.blog_title}</td>
              <td className="px-4 py-2">{blog.blog_details}</td>
              <td className="px-4 py-2">
                {blog.blog_image && (
                  <img
                    src={blog.blog_image}
                    alt={blog.blog_title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => setBlogToEdit(blog)}
                  className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}