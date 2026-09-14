import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div>
        <Blogs/>
      </div>
    </div>
  );
}
