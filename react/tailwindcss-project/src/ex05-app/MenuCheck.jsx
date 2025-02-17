import { useState } from "react";
import { useNavigate } from "react-router-dom"; //하이퍼링크-바로가기

function MenuCheck() {
  const navigate = useNavigate();

  const menu = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: 10,
    width: 300,
    maxHeight: 700,
  };
  const body = {
    width: " 100vw",
    height: "100vh" /* 9:16 비율 (9 / 16 * 100vw) */,
    backgroundColor: "#e9e9e9",
  };
  const container = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "440px",
    height: "100%",
    maxHeight: "920px",
    backgroundColor: "#175042",
  };
  const menuItems = [
    { id: 1, name: "빅맥", price: 4500, image: "img/big.png" },
    { id: 2, name: "맥크리스피", price: 5500, image: "img/chicken.png" },
    { id: 3, name: "베이컨버거", price: 4500, image: "img/bac.png" },
  ];
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [visibility, setVisibility] = useState({
    item1: true,
    item2: true,
  });
  const removeItem = (item) => {
    setVisibility((prev) => ({
      ...prev,
      [item]: false, // 선택된 항목만 false로 변경
    }));
  };

  function counterup() {
    setCount((prev) => prev + 1);
  }
  function counterdown() {
    if (count !== 0) {
      setCount((prev) => prev - 1);
    }
  }
  function counterup1() {
    setCount1((prev) => prev + 1);
  }
  function counterdown1() {
    if (count !== 0) {
      setCount1((prev) => prev - 1);
    }
  }

  return (
    <div style={body}>
      <div style={container}>
        <div className="flex flex-col items-center ">
          <img src="img/logo.png" className="mt-[100px]" />
          <h1 className="font-normal text-xl text-white mt-[50px] mb-7">
            주문을 확인 하세요.
          </h1>
          <div style={menu}>
            <div className="flex justify-center border-b border-dashed border-emerald-950 p-2">
              총 금액 :
            </div>
            {visibility.item1 && (
              <div className="flex justify-start m-2 border-b border-dashed border-emerald-950">
                <img
                  src={menuItems[0].image}
                  alt={menuItems[0].name}
                  className="w-20 h-20 object-fill mb-2 rounded-lg"
                />
                <div className="flex flex-col justify-start ml-3 ">
                  <h2 className=" m-1">{menuItems[1].name}</h2>
                  <h2 className=" m-1">\{menuItems[1].price}</h2>
                  <div className="flex flex-row">
                    <button
                      className="bg-red-700 rounded w-5 text-white m-2"
                      onClick={counterdown}
                    >
                      -
                    </button>
                    <h1 className="m-2">{count}</h1>
                    <button
                      className="bg-blue-500 rounded w-5 text-white m-2"
                      onClick={counterup}
                    >
                      +
                    </button>
                    <div className="flex flex-col justify-center ml-3 ">
                      <button
                        className=" bg-green-800 p-1 text-sm text-white rounded"
                        onClick={() => removeItem("item1")}
                      >
                        삭제하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {visibility.item2 && (
              <div className="flex justify-start border-b border-solid border-emerald-950 m-2 p-2">
                <img
                  src={menuItems[1].image}
                  alt={menuItems[1].name}
                  className="w-20 h-20 object-fill mb-2 rounded-lg"
                />
                <div className="flex flex-col justify-start ml-3 ">
                  <h2 className=" m-1">{menuItems[1].name}</h2>
                  <h2 className=" m-1">\{menuItems[1].price}</h2>
                  <div className="flex flex-row">
                    <button
                      className="bg-red-700 rounded w-5 text-white m-2"
                      onClick={counterdown1}
                    >
                      -
                    </button>
                    <h1 className="m-2 border-black">{count1}</h1>
                    <button
                      className="bg-blue-500 rounded w-5 text-white m-2"
                      onClick={counterup1}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center ml-3 ">
                  <button
                    className=" bg-green-800 p-1 text-sm text-white rounded"
                    onClick={() => removeItem("item2")}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            )}
            <div className="flex justify-center items-end">
              <button
                className="bg-red-700 text-white rounded p-1 m-2"
                onClick={() => navigate("/rekiosk")}
              >
                이전으로
              </button>
              <button className="bg-green-800 text-white rounded m-2 p-1">
                결제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuCheck;
