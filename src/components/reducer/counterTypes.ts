export const initState = { count: 0, text: "" };

export type CounterState = typeof initState;

export type REDUCER_ACTION_TYPE = "INCREMENT" | "DECREMENT" | "NEW_INPUT";

// shape for dispatch param object
export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};