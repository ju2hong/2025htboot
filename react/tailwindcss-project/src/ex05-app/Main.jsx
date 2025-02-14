function Main() {
  const card = {
    maxWidth: "180px",
    height: "200px",
    borderRadius: "20px",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
  };
  return (
    <div>
      <div id="nav" className="bg-yellow-100 p-1">
        <img
          src="img/kioskLogo.png"
          alt="로고"
          className="max-w-full h-[50px] object-contain"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center mt-[100px]">
        <button style={card} className="bg-orange-400 m-2 w-1/2">
          <img src="img/burger.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">페스트 푸드</h1>
          </div>
        </button>
        <button style={card} className="bg-stone-400 m-2 w-1/2">
          <img src="img/coffee.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">카페</h1>
          </div>
        </button>
        <button style={card} className="bg-green-400 m-2 w-1/2">
          <img src="img/sick.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">병원</h1>
          </div>
        </button>
        <button style={card} className="bg-purple-400 m-2 w-1/2">
          <img src="img/atm.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">ATM</h1>
          </div>
        </button>
        <button style={card} className="bg-sky-400 m-2 w-1/2">
          <img src="img/ktx.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">KTX</h1>
          </div>
        </button>
        <button style={card} className="bg-teal-400 m-2 w-1/2">
          <img src="img/bus.png" className="absolute w-[200px]" />
          <div className="flex justify-center items-center mt-[100px] w-[100%] h-[15%] bg-white">
            <h1 className="font-bold">버스</h1>
          </div>
        </button>
      </div>
      <div className="relative h-[100px] flex">
        <img src="img/fjlogo.png" className="w-[45%] absolute bottom-0" />
        <img
          src="img/digitallogo.png"
          className="w-[50%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
export default Main;
