import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

// Counter component that displays the current count and provides buttons to increment and decrement the count
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //the component renders the current count and two buttons to increment and decrement the count. When the buttons are clicked, they dispatch the corresponding actions to update the state in the Redux store.
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
    </div>
  );
}

export default Counter;