export default function Bookmark({bookmark}) {
  return (
    <div className="p-4 bg-white rounded-xl my-5">
      <h1 className="font-medium text-xl">{bookmark.title}</h1>
    </div>
  );
}
