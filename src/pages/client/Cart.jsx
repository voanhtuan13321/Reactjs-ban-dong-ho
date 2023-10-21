import React from "react";

export default function Cart() {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Giỏ hàng của bạn</h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="flex justify-between border-b border-gray-300 p-3 bg-main-red">
            <div className="w-2/5">
              <p className="font-semibold">Product</p>
            </div>
            <div className="w-1/5">
              <p className="font-semibold">Image</p>
            </div>
            <div className="w-1/5">
              <p className="font-semibold">Quantity</p>
            </div>
            <div className="w-1/5">
              <p className="font-semibold">Price</p>
            </div>
            <div className="w-1/5">
              <p className="font-semibold">Total</p>
            </div>
            <div className="w-1/5">
              <p className="font-semibold">Action</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-3">
            <div className="w-2/5">
              <p>Tên sản phẩm 1</p>
            </div>
            <div className="w-1/5">
              <img
                src="https://bizweb.dktcdn.net/100/021/944/products/dong-ho-ticwatch-e3-techwearvn-1-b27d4164-b949-4833-9d97-681a1fc77860.jpg?v=1634191229660"
                alt="Hình ảnh sản phẩm 1"
                className="w-16 h-16"
              />
            </div>
            <div className="w-1/5">
              <input
                type="number"
                className="w-20 py-2 px-3 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/5">
              <p>$50</p>
            </div>
            <div className="w-1/5">
              <p>$50</p>
            </div>
            <div className="w-1/5">
              <p>$50</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-3">
            <div className="w-2/5">
              <p>Tên sản phẩm 2</p>
            </div>
            <div className="w-1/5">
              <img
                src="https://bizweb.dktcdn.net/100/021/944/products/fitbit-sense-2-techwearvn-2.jpg?v=1695741879530"
                alt="Hình ảnh sản phẩm 2"
                className="w-16 h-16"
              />
            </div>
            <div className="w-1/5">
              <input
                type="number"
                className="w-20 py-2 px-3 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/5">
              <p>$70</p>
            </div>
            <div className="w-1/5">
              <p>$70</p>
            </div>
            <div className="w-1/5">
              <button>Delete</button>
            </div>
          </div>

          <div className="flex justify-between p-3">
            <div className="w-2/5"></div>
            <div className="w-1/5"></div>
            <div className="w-2/5"></div>
            <div className="w-1/5">
              <div className="font-semibold">Tổng cộng: $120</div>
            </div>
          </div>

          <div className="flex justify-between p-3">
            <div className="w-2/5"></div>
            <div className="w-1/5"></div>
            <div className="w-2/5"></div>
            <div className="w-1/5">
              <button className="bg-main-black text-white py-3 px-4 hover:bg-main-red w-full rounded-xl">
                Thanh toán
              </button>
              <button className="text-main-red mt-3 font-semibold bg-white hover:underline py-2 px-4 border border-black rounded-xl w-full">
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
