import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";
import Nav from '../layout/nav/nav';
import Footer from '../layout/footer/footer';

const POSTS_QUERY = `*[ 
  _type == "post" 
  && defined(slug.current) 
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Nav />
      <div className="eventbg h-[200px] w-[100%] flex flex-col items-end gap-3 pt-24 md:px-[180px] px-[20px] mb-6">
        <h1 className="text-2xl text-[white] font-climate font-bold">BLOGS</h1>
        <hr className="md:w-[400px] w-[300px]" />
        <p className="font-inter font-normal text-[10px] md:text-[19px] text-white">
          FEMALE NETWORK FOUNDATION FOR EMPOWERMENT AND EQUITY
        </p>
      </div>

      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <li className="hover:underline" key={post._id}>
                <Link to={`/post/${post.slug.current}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Footer />
    </div>
  );
}
