import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="navi">
      <Link to={"/"}>
        <div className="text-3xl font-semibold mb-3 md:mb-0 cursor-pointer">
          Latihan Login
        </div>
      </Link>
      {user && (
        <div className="font-semibold">
          <div className="flex items-center mb-1">
            <img
              src={user.photos[0].value}
              alt=""
              className="w-6 h-6 rounded-full mr-1"
            />
            <h2>{user.displayName}</h2>
          </div>
          <div className="cursor-pointer">
            <h2 onClick={logout}>Log out</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
