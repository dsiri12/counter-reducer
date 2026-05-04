import { useReducer, type ChangeEvent } from "react";
import { counterReducer } from "./reducer/counterReducer";
import { initState } from "./reducer/counterTypes";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initState);

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
