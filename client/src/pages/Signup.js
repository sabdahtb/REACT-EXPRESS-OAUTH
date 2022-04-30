import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="my-12 md:my-24 text-center font-quicksand font-bold text-3xl text-gray-800">
        Create Account Here ☘︎
      </h1>
      <div className="logFlex">
        <div className="signCard">
          <div className="signSide">
            <h1 className="font-bold text-lg mb-5">☘︎</h1>
            <form action="">
              <input
                type="text"
                name="username"
                id="username"
                className="ipt"
                placeholder="Username..."
              />
              <input
                type="password"
                name="password"
                id="password"
                className="ipt"
                placeholder="Password..."
              />
              <button type="submit" className="btn hijau">
                Submit Account
              </button>
            </form>
          </div>
        </div>
      </div>

      <h1 className="mt-10 text-center font-quicksand font-bold text-md text-gray-800">
        Already have an account ?{" "}
        <Link to={"/login"}>
          <span className="text-blue-600 cursor-pointer hover:text-blue-800">
            {" "}
            Click to Log in
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default Signup;
