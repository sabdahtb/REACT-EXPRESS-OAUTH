import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navi">
      <Link to={"/"}>
        <div className="text-3xl font-semibold mb-3 md:mb-0 cursor-pointer">
          Latihan Login
        </div>
      </Link>
      <div className="font-semibold">
        <div className="flex items-center mb-1">
          <img src="/avatar.jpg" alt="" className="w-6 h-6 rounded-full mr-1" />
          <h2>Mystogannn</h2>
        </div>
        <div>
          <h2>Log out</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
