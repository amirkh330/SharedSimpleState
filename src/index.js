import React, { createContext, useState, useContext } from "react";

const SharedSimpleStateContext = createContext();

export const useSharedSimpleState = (initialState) => {
  const [state, setState] = useState(initialState);

  const sharedState = useContext(SharedSimpleStateContext);

  if (sharedState) {
    sharedState.setState(state);
  }

  return [state, setState];
};

export const SharedSimpleStateProvider = ({ children }) => {
  const [state, setState] = useState(null);
  return (
    React.createElement(SharedSimpleStateContext.Provider, { value: { state, setState } }, children)
  );
};