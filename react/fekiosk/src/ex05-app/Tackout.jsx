import { useNavigate } from "react-router-dom"; //하이퍼링크-바로가기

function Tackout() {
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
  const navigate = useNavigate();

  return (
    <div style={body}>
      <div style={container}>
        <div className="flex flex-col justify-center items-center">
          <img src="img/logo.png" className="mt-[100px]" />
          <h1 className="font-normal text-xl text-white mt-[50px] mb-7 ">
            식사하실 장소를 선택해 주세요.
          </h1>
          <div className="flex justify-center items-center">
            <button
              className="w-[45%] h-[300px] bg-white rounded-lg m-2"
              onClick={() => navigate("/rekiosk")}
            >
              <img src="img/eathere.png" className="w-[100%] h-[80%]" />
              <p className="font-bold  text-red-600">매장에서 먹고 가기</p>
            </button>
            <button
              className="w-[45%] h-[300px] bg-white rounded-lg m-2"
              onClick={() => navigate("/rekiosk")}
            >
              <img src="img/takeout.png" className="w-[100%] h-[80%]" />
              <p className="font-bold  text-red-600">포장 하기</p>
            </button>
          </div>
          <div
            className="flex flex-col items-center mt-[50px]"
            onClick={() => navigate("/")}
          >
            <img src="img/kiosk.png" />
            <h2 className="text-white font-thin ">화면터치 kiosk 메인으로</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tackout;
