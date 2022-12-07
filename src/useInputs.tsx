import React, { useCallback, useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return {
        username: "",
        email: "",
      };
  }
}

function useInputs(initialForm: any) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);
  // reset
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);
  return [form, onChange, reset];
}

export default useInputs;
