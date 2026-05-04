import type { CounterState, ReducerAction } from "./counterTypes";

export const counterReducer = (state: CounterState, action: ReducerAction): CounterState => {
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