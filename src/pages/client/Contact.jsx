import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path
        d="M15 0C8.371 0 3 5.373 3 12c0 3.537 1.442 5.509 3.783 9.78 1.104 1.762 3.02 4.211 5.217 7.22a1.008 1.008 0 0 0 1.021.286c.395-.15 7.56-6.48 7.56-12.504C20.58 5.373 15 0 15 0zm0 19.68c-1.75-2.722-3.21-4.911-3.33-5.099a.976.976 0 0 1 .638-1.628c.37 0 1.094.262 2.061.791 1.034.521 2.319 1.394 3.58 2.499 1.672 1.685 3.281 3.735 4.242 6.028-1.764-2.785-3.16-5.336-3.48-5.783a.977.977 0 0 1-.128-1.188.994.994 0 0 1 1.188-.127c.246.124 5.949 3.093 5.949 8.078 0 5.045-5.958 9.197-6.12 9.293a.994.994 0 0 1-1.187-.126.976.976 0 0 1-.128-1.187c.32-.446 1.726-2.997 3.49-5.783z"
        fill="#D80A0A"
        fillRule="evenodd"
      />
    </svg>
    {text}
  </div>
);

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 16.060306,
      lng: 108.156889,
    },
    zoom: 15,
  };

  return (
    <div>
      <div className="w-container mx-auto mt-8 h-[500px] flex mb-3">
        <div className="w-1/2 p-4 bg-slate-100 rounded-lg mr-3">
          <div className="mb-4 flex items-center">
            <p className="text-gray-700 flex">
              <div className="p-4 bg-white border-2 border-main-red rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <div className="mt-3 ml-3">
                <span className="text-main-black font-bold">Phone:</span> +84
                123 456 789
              </div>
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <p className="text-gray-700 flex">
              <div className="p-4 bg-white border-2 border-main-red rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                </svg>
              </div>
              <div className="mt-3 ml-3">
                <span className="text-main-black font-bold">Address:</span> 137
                Nguyễn Thị Thập, TP. Đà Nẵng
              </div>
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 flex">
              <div className="p-4 bg-white border-2 border-main-red rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
              </div>
              <div className="mt-3 ml-3">
                <span className="text-main-black font-bold">Email:</span>
                watch@gmail.com
              </div>
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4 bg-slate-100 rounded-lg">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tên:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-main-red"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-main-red"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tin nhắn:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-main-red"
              />
            </div>
            <button className="bg-main-red text-white py-2 px-4 rounded-lg hover:bg-main-red-dark">
              Gửi
            </button>
          </form>
        </div>
      </div>
      <div className="w-container mx-auto mb-8 h-[500px]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={16.060306} lng={108.156889} text="Địa chỉ" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
