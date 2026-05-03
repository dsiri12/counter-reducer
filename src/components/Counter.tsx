import { useReducer, type ChangeEvent } from "react";

const initState = { count: 0, text: "" };

type CounterState = typeof initState;

type REDUCER_ACTION_TYPE = "INCREMENT" | "DECREMENT" | "NEW_INPUT";

// shape for dispatch param object
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: CounterState, action: ReducerAction): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "NEW_INPUT":
      return { ...state, text: action.payload };

    default:
      throw new Error(`oop! wrong action type: ${action.type}`);
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "NEW_INPUT",
      payload: event.target.value,
    });
  };

  return (
    <>
      <h1>Current Count: {state.count}</h1>

      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <input type="text" onChange={handleTextInput} />

      <h3>{`Input text: ${state.text}`}</h3>
    </>
  );
};
