import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  // fetching all blogs data from blogs.json file
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} />
      ))}
    </div>
  );
}
