function Tackout() {
  const takeoutBtn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="flex flex-col items-center">
      <img src="img/logo.png" width={300}></img>
      <h1 className="font-bold text-xl text-white mb-7">
        식사하실 장소를 선택해 주세요
      </h1>
      <div style={takeoutBtn}>
        <button className="w-[45%] h-[300px] bg-white rounded-lg m-2">
          <img src="img/drinkhere.png" className="w-[100%] h-[80%]" />
          <p className="font-bold  text-red-600">매장에서 먹고 가기</p>
        </button>
        <button className="w-[45%] h-[300px] bg-white rounded-lg m-2">
          <img src="public/img/takeout.png" className="w-[100%] h-[80%]" />
          <p className="font-bold  text-red-600">포장 하기</p>
        </button>
        <h1></h1>
      </div>
    </div>
  );
}
export default Tackout;
