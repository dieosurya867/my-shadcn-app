import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  // gunakan loader agar tidak melihat delay nge load data atau kelihatan jeda di halaman
  const posts = useLoaderData();

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
