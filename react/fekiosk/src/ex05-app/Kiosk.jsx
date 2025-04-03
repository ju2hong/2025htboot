import { useState } from "react";

const menuItems = [
  { id: 1, name: "빅맥", price: 4500, image: "public/img/big.png" },
  { id: 2, name: "맥크리스피", price: 5500, image: "public/img/chicken.png" },
  { id: 3, name: "베이컨버거", price: 4500, image: "public/img/bac.png" },
];

export default function Kiosk() {
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
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">📌 키오스크 메뉴</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="p-4 border rounded-lg bg-blue-100 hover:bg-blue-200 flex flex-col items-center"
            onClick={() => addToCart(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-fill mb-2 rounded-lg"
            />
            {item.name} - {item.price}원
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">🛒 장바구니</h2>
      {cart.map((item) => (
        <div className="m-3">
          <button
            key={item.id}
            className="p-3 border rounded-lg bg-blue-100 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-fill mb-2 rounded-lg"
            />
            {item.name} - {item.price}원 x {item.count}
          </button>
        </div>
      ))}

      <h3 className="text-lg font-bold mt-4">
        💰 총 결제 금액: {totalPrice}원
      </h3>
    </div>
  );
}
