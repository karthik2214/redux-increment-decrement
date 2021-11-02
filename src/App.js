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
          <button
            className="quantity-minus"
            title="Decrement"
            onClick={() => dispatch(decNum())}
            href="#"
          >
            <span>-</span>
          </button>
          <input
            name="quantity"
            className="quantity-input"
            type="text"
            value={myState}
          />
          <button
            className="quantity-plus"
            title="Increment"
            onClick={() => dispatch(incNum())}
            href="#"
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
