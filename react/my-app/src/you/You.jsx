import React from "react";

const App = () => {
  const lines = [];

  // 20줄 출력하기
  for (let i = 0; i < 20; i++) {
    let line = [];

    // 20개의 "너"를 출력
    for (let j = 0; j < 20; j++) {
      // 예를 들어, 10번째 줄에서 10번째 글자만 "나"로 바꾸기
      if (i === 10 && j === 10) {
        // 10번째 줄, 10번째 글자
        line.push("나");
      } else {
        line.push("너");
      }
    }
    lines.push(line);
  }
  return (
    <div>
      <div>
        <h1>너 안에서 나 찾기</h1>
      </div>
      <div>
        {lines.map((line, index) => (
          <div key={index}>{line.join(" ")}</div>
        ))}
      </div>
      <div>
        <h3>어머나, '나'를 안 썼잖아?</h3>
        <h3>그만큼 난 너바께 안보여 ^^</h3>
      </div>
    </div>
  );
};

export default App;
