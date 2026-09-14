import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, blog) => {
    const { readingTime } = blog;
    const newReadingTime = readingTime + readTime;
    setReadTime(newReadingTime);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id,
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
}
