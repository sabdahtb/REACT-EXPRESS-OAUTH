import { Link } from "react-router-dom";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div>
      <h1 className="my-12 md:my-24 text-center font-quicksand font-bold text-3xl text-gray-800">
        Login First ☘︎
      </h1>
      <div className="logFlex">
        <div className="logCard">
          <div className="logSide">
            <h1 className="font-bold text-lg mb-5">Login Via Social Media</h1>
            <div className="btn bg-red-500 hover:bg-red-600" onClick={google}>
              Login With Google
            </div>
            <div
              className="btn  bg-blue-500 hover:bg-blue-600"
              onClick={facebook}
            >
              Login With Facebook
            </div>
            <div
              className="btn  bg-gray-700 hover:bg-gray-800"
              onClick={github}
            >
              Login With Github
            </div>
          </div>

          <div className="logSide">
            <h1 className="font-bold text-lg mb-5">Or</h1>
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
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>

      <h1 className="mt-10 text-center font-quicksand font-bold text-md text-gray-800">
        Don't have account ?{" "}
        <Link to="/signup">
          <span className="text-blue-600 cursor-pointer hover:text-blue-800">
            {" "}
            Sign Up Here
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default Login;
