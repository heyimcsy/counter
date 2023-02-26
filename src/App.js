import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const minusButtonClickHandler = () => {
    setCount (count -1);
  }
  const tenMinusButtonHandler = () => {
    setCount (count -10);
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={()=>{
          setCount (count +1);
        }}>+1</button>
        <button onClick={minusButtonClickHandler}>-1</button>
        <br/>
        <button onClick={()=>{
          setCount (count +10);
        }}>+10</button>
        <button onClick={tenMinusButtonHandler}>-10</button>
      </div>
    </div>
  );
}

export default App;

{/* <button onClick={minusButtonClickHandler()}>-1</button>
이렇게 하면 함수 할당이 아닌 호출을 해버려서 원하는 값이 안나온다 만약 괄호를 넣어야 하는 상황이 생기면 무조건
()=>minusButtonClickHandler() 이렇게 호살표 함수로 감싸줘여 한다 */}