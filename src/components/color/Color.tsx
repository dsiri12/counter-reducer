import { useReducer } from "react";

const initColorState = { count: 0, userInput: "", isColor: false };
type ColorState = typeof initColorState;

// shape for dispatch param object
export type ReducerAction = {
  type: "increment" | "decrement" | "newUserInput" | "tgColor";
  payload?: string;
};

const colorReducer = (state: ColorState, action: ReducerAction): ColorState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "newUserInput":
      return { ...state, userInput: action.payload };

    case "tgColor":
      return { ...state, isColor: !state.isColor };

    default:
      throw new Error(`oop! wrong action type: ${action.type}`);
  }
};

export const Color = () => {
  const [state, dispatch] = useReducer(colorReducer, initColorState);

  return (
    <main className="App" style={{ color: state.isColor ? "#FF0000" : "#000" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "newUserInput", payload: e.target.value })
        }
      />

      <br />
      <br />
      <p>{state.count}</p>

      <section>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "tgColor" })}>Color</button>
      </section>

      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
};
