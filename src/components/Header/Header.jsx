import profile from "../../assets/images/profile.png";

export default function Header() {
  return (
    <div className="navbar flex items-center justify-between mt-5 border-b-2 pb-4">
      <h1 className="logo font-bold text-3xl">Knowledge Cafe</h1>
      <img src={profile} className="w-15" alt="navbar-profile-picture" />
    </div>
  );
}
