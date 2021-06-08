import React, { useState } from "react";
import "./styles.css";

function SelectExample() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit) => {
    return <option value={fruit}>{fruit}</option>;
  });

  const handleFruit = (event) => {
    // drop down 목록에서 선택된 과일로 현재의 state 가 업데이트 되도록
    // 함수를 완성하세요.
    setChoice(event.target.value);
  };

  return (
    <div className="App">
      <select value={choice} onChange={handleFruit}>
        {/* drop down 목록을 열어 과일을 선택할 수 있도록 select tag 를 완성하세요 */}
        {options}
      </select>
      <h3>You choose "{choice}"</h3>
    </div>
  );
}

export default SelectExample;
