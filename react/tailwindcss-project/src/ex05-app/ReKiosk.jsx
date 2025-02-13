import { useState } from "react";

const menuItems = [
  { id: 1, name: "빅맥", price: 4500, image: "public/img/big.png" },
  { id: 2, name: "맥크리스피", price: 5500, image: "public/img/chicken.png" },
  { id: 3, name: "베이컨버거", price: 4500, image: "public/img/bac.png" },
];

export default function ReKiosk() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // 이미 장바구니에 있는지 확인
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // 개수(count) 증가
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      } else {
        // 새 상품 추가 (count = 1)
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <>
      <div
        id="nav"
        className="flex justify-between items-center bg-slate-100 h-[50px] px-2"
      >
        <img
          src="img/logo.png"
          className="max-w-full h-[50px] object-contain"
        />

        <a href="#" className="flex items-center space-x-2">
          <img
            src="img/home.png"
            className="w-[20px] h-[50px] object-contain"
          />
          <p className="font-medium text-xs text-green-950">HOME</p>
        </a>
      </div>
      <div className="bg-green-950 w-[100%] h-[20px]"></div>

      <div className="p-4">
        <h1 className="text-2xl font-bold">에프엔제이 버거 메뉴</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="p-4 border border-solid border-gray-400 rounded-lg hover:bg-blue-200 flex flex-col items-center"
              onClick={() => addToCart(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-fill mb-2 rounded-lg"
              />
              {item.name} <br />\{item.price}원
            </button>
          ))}
        </div>
      </div>

      <h2 className="bg-green-950 text-base font-medium p-1 text-white mt-6">
        주문 내역
      </h2>
      <div className="flex flex-wrap gap-3">
        {cart.map((item) => (
          <div className="m-3 ">
            <div
              key={item.id}
              className="p-3 border border-solid border-black rounded-lg  flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-fill mb-2 rounded-lg"
                />
                <p className="absolute bottom-1 rounded-full bg-red-700 p-1 text-l text-white">
                  {item.count}
                </p>
              </div>
              {item.name} - {item.price}원{" "}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold mt-4">
        💰 총 결제 금액: {totalPrice}원
      </h3>
    </>
  );
}
