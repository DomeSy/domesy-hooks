import { useState, useTransition, useLayoutEffect } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [x, setX] = useState(0);

  useLayoutEffect(() => {
    var container = document.getElementsByClassName("container");
    var list = document.getElementsByClassName("list");
    if (list.length) {
      container[0].removeChild(list[0]);
    }
  });

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
    // startTransition(() => setValue(e.target.value));
  };

  const handleMouseMove = (e: any) => {
    setX(e.pageX);
  };

  return (
    <div className="container">
      <div className="parent" onMouseMove={handleMouseMove}>
        <div className="box" style={{ left: `${x}px` }}></div>
      </div>
      <input onChange={handleValueChange} />
      {Array(100)
        .fill("a")
        .map((item) => (
          <div>{value}</div>
        ))}
      <div className="list">
        {Array(80000)
          .fill("a")
          .map((item) => (
            <div>{value}</div>
          ))}
      </div>
    </div>
  );
}

export default App;
