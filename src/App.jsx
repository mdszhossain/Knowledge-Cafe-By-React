import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex">
        <Blogs handleAddBookmark={handleAddBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}
