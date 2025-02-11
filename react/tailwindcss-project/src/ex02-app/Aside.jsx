function Aside() {
  return (
    <div
      id="aside"
      className="w-[20%] m-[10px] p-[20px] border-2 border-green-700 "
    >
      <h4 className="font-bold">Golden Retriever</h4>
      <img
        src="public/img/dog.png"
        alt="리트리버"
        className="w-[200px] h-[200px] object-fill"
      />
      <ul className="list-none">
        <li>● 기본특성</li>
        <li>● 단점</li>
        <li>● 키울 시 주의점</li>
        <li>● 파생 혼종견</li>
      </ul>
    </div>
  );
}
export default Aside;
