import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmarks}) {
  return (
    <div className="w-1/3">
      <div className="p-4 border-2 border-purple-600 bg-[#EFEDFD] rounded-xl m-5 text-2xl text-purple-600 font-bold">
        Spent time on read:{}
      </div>
      <div className="bg-[#F3F3F3] m-5 rounded-xl p-4 h-full">
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}/>)
        }
      </div>
    </div>
  );
}
