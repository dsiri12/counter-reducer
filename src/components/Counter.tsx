import { useReducer } from "react";

const initState = { count: 0 };

type CounterState = typeof initState;

type REDUCER_ACTION_TYPE = "INCREMENT" | "DECREMENT";
// const enum REDUCER_ACTION_TYPE {
//   INCREMENT,
//   DECREMENT,
// }

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const reducer = (state: CounterState, action: ReducerAction): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error(`oop! wrong action type: ${action.type}`);
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <>
      <h1>Current Count: {state.count}</h1>

      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
