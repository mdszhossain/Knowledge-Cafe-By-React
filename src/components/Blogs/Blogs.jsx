import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({handleAddBookmark}) {
  const [blogs, setBlogs] = useState([]);

  // fetching all blogs data from blogs.json file
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} handleAddBookmark={handleAddBookmark} />
      ))}
    </div>
  );
}
