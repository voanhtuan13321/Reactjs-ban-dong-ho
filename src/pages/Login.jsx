import { Link } from "react-router-dom";
import undraw from "../assets/img/bg-01.jpg";

export default function Login() {
  
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-screen-md rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center bg-gray-400 py-16"
          style={{ backgroundImage: `url(${undraw})` }}
        >
          <h1 className="text-4xl text-white font-bold uppercase text-center p-4">
            Sign In
          </h1>
        </div>
        <form className="w-full py-10 px-20">
          <div className="mb-6 grid grid-cols-8 gap-20">
            <label
              className="text-[#808080] text-sm font-bold self-center col-span-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full col-span-7 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-6 grid grid-cols-8 gap-20">
            <label
              className="block text-[#808080] text-sm font-bold self-center col-span-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full col-span-7 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-6 grid grid-cols-8 pt-7">
            <div className="col-span-1"></div>
            <button className="w-full col-span-7 bg-main-red text-white font-bold py-2 rounded-full hover:bg-main-black">
              Login
            </button>
          </div>
          <div className="col-span-2 text-right">
            <Link to="/register" className="text-[#999999] text-sm">
              Register?
            </Link>
          </div>
        </form>
        <div className="relative bg-gray-600 bg-opacity-70 top-0 left-0 h-full"></div>
      </div>
    </div>
  );
}
