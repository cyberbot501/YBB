import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../sanityClient";
import Nav from "../layout/nav/nav";
import Footer from "../layout/footer/footer";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(POST_QUERY, { slug });
        if (!data) {
          setError("Post not found.");
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div>
      <Nav />
      {/* Blog Header */}
      <div className="eventbg h-[200px] w-[100%] flex flex-col items-end gap-3 pt-24 md:px-[180px] px-[20px] mb-6">
        <h1 className="text-2xl text-[white] font-climate font-bold">BLOGS</h1>
        <hr className="md:w-[400px] w-[300px]" />
        <p className="font-inter font-normal text-[10px] md:text-[19px] text-white">
          FEMALE NETWORK FOUNDATION FOR EMPOWERMENT AND EQUITY
        </p>
      </div>

      {/* Blog Content */}
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link to="/blog" className="hover:underline">
          ← Back to posts
        </Link>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <p className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : post ? (
          <>
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
            {post.image && (
              <img
                src={urlFor(post.image)?.width(550).height(310).url()}
                alt={post.title}
                className="aspect-video rounded-xl"
                width="550"
                height="310"
              />
            )}

            {/* Post Content with Read More Feature */}
            <div className="prose">
              <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
              {Array.isArray(post.body) && (
                <div
                  className='text-gray-700 max-w-[350px] lg:max-w-[500px] break-words whitespace-pre-wrap overflow-hidden transition-all duration-300'
                >
                  <PortableText value={post.body} />
                </div>
              )}

             
             
            </div>
          </>
        ) : (
          <p className="text-gray-500">No post found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
