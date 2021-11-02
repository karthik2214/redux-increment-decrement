import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux </h4>

        <div className="quantity">
          <a
            className="quantity-minus"
            title="Decrement"
            onClick={() => dispatch(decNum())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            className="quantity-input"
            type="text"
            value={myState}
          />
          <a
            className="quantity-plus"
            title="Increment"
            onClick={() => dispatch(incNum())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
