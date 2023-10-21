import { Link } from "react-router-dom";
import undraw from "../assets/img/bg-01.jpg";

export default function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-screen-md rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center bg-gray-400 py-16"
          style={{ backgroundImage: `url(${undraw})` }}
        >
          <h1 className="text-4xl text-white font-bold uppercase text-center p-4">
            Register
          </h1>
        </div>
        <form className="w-full py-10 px-20">
          <div className="mb-6">
            <label
              className="text-[#808080] text-sm font-bold self-center"
              htmlFor="fullname"
            >
              Fullname
            </label>
            <input
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter fullname"
            />
          </div>

          <div className="grid grid-cols-2 col-span-2 gap-10">
            <div className="col-span-1 mb-6">
              <label
                className="text-[#808080] text-sm font-bold self-center"
                htmlFor="birthday"
              >
                Birthday
              </label>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
                type="date"
                id="birthday"
                name="birthday"
              />
            </div>

            <div className="col-span-1 mb-6">
              <label
                className="text-[#808080] text-sm font-bold self-center"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter phone"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="text-[#808080] text-sm font-bold self-center"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
            />
          </div>

          <div className="mb-6">
            <label
              className="text-[#808080] text-sm font-bold self-center"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
          </div>

          <div className="grid grid-cols-2 col-span-2 gap-10">
            <div className="col-span-1 mb-6">
              <label
                className="block text-[#808080] text-sm font-bold self-center"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <div className="col-span-1 mb-6">
              <label
                className="block text-[#808080] text-sm font-bold self-center"
                htmlFor="password"
              >
                Re-Password
              </label>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red"
                type="password"
                id="re-password"
                name="re-password"
                placeholder="Enter re-password"
              />
            </div>
          </div>
          <div className="mb-6 pt-7">
            <button className="w-full col-span-7 bg-main-red text-white font-bold py-2 rounded-full hover:bg-main-black">
              Register
            </button>
          </div>
          <div className="col-span-2 text-right">
            <Link to="/login" className="text-[#999999] text-sm">
              Login?
            </Link>
          </div>
        </form>
        <div className="relative bg-gray-600 bg-opacity-70 top-0 left-0 h-full"></div>
      </div>
    </div>
  );
}
