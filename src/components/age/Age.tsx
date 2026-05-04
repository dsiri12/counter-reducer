import { useReducer } from "react";

const initAgeState = { age: 42 }
export type AgeState = typeof initAgeState;

export type AGE_REDUCER_ACTION_TYPE = "INCREMENT_AGE"

// shape for dispatch param object
export type AgeReducerAction = {
  type: AGE_REDUCER_ACTION_TYPE;
};

const ageReducer = (state: AgeState, action: AgeReducerAction): AgeState => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1 };

    default:
      throw new Error(`oop! wrong action type: ${action.type}`);
  }
};

export const Age = () => {

  const [state, dispatch] = useReducer(ageReducer, initAgeState);
  
  const handleOnClick = () => {
    dispatch({ type: "INCREMENT_AGE" })
  };

  return (
    <>
      <button onClick={handleOnClick}>Increment age</button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
};
