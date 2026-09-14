import { GoBookmark } from "react-icons/go";
export default function Blog({ blog, handleAddBookmark, handleMarkAsRead }) {
  const {
    id,
    title,
    coverPhoto,
    authorPhoto,
    authorName,
    postedDate,
    readingTime,
    hashtags,
  } = blog;
  return (
    <div className="mt-5">
      <div className="border">
        <img src={coverPhoto} className="w-full p-2" alt="" />
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-4">
          <img src={authorPhoto} className="w-10" alt="" />
          <div>
            <h3 className="text-2xl font-bold">{authorName}</h3>
            <p>Published: {postedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4"><span>{readingTime} min</span> <button onClick={()=>{handleAddBookmark(blog)}} className="text-xl"><GoBookmark/></button></div>
      </div>
      <h2 className="font-bold text-3xl my-5">{title}</h2>
      {
        hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag} &nbsp;&nbsp;&nbsp;&nbsp;</span>)
      }
      <div className="my-5">
        <button onClick={()=>{handleMarkAsRead(id, blog)}} className="bg-red-500 p-2 text-white rounded-xl">Mark as read</button>
      </div>
    </div>
  );
}
