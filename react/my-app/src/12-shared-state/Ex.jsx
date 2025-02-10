import React, { useState } from "react";

/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */
function InputField1({ value, onChange }) {
  return (
    <div>
      <label>입력필드1 : </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
function InputField2({ value, onChange }) {
  return (
    <div>
      <label>입력필드2 : </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export function LiftingAdd() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <h1>연습문제 1</h1>
      <InputField1 value={num1} onChange={setNum1} />
      <InputField2 value={num2} onChange={setNum2} />
      <a>두 수 더하기 : </a>
      <b>
        {num1} + {num2} = {Number(num1) + Number(num2)}
      </b>
    </div>
  );
}
/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */
function SelectArray({ items, selectedItems, onSelect }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          onClick={() => onSelect(item)}
          onMouseEnter={() => setHoveredItem(item)} // 마우스 올리면 상태 변경
          onMouseLeave={() => setHoveredItem(null)} // 마우스 나가면 원래 상태로}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "5px",
            transition: "background-color 0.3s",
            backgroundColor: selectedItems.includes(item)
              ? "lightblue" // 선택된 경우 파란색
              : hoveredItem === item
              ? "lightblue" // hover 시 연한 파란색
              : "white", // 기본 회색
            color: selectedItems.includes(item) ? "white" : "black",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LiftingStateUp() {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelect = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div>
      <h2>리스트 선택 및 연동</h2>
      <SelectArray
        items={items}
        selectedItems={selectedItems}
        onSelect={handleSelect}
      />

      <h3>선택된 항목:</h3>
      {selectedItems.length > 0 ? (
        <ul>
          {selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>선택된 항목이 없습니다.</p>
      )}
    </div>
  );
}
