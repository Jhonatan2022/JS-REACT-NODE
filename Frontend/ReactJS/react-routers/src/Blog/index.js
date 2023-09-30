import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogData";

function BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>

      <Outlet />
      <ul>
        {blogdata.map((post) => (
          <BlogLink post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export { BlogPage };
