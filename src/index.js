import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();
const SharedStateProvider = ({ state, children }) => {
  const [data, setData] = useState(state);

  return React.createElement(
    SharedSimpleStateContext.Provider,
    { value: { data, setData } },
    children
  );
};
const useSharedStateHook = () => {
  const data = useContext(SharedStateContext);

  return [data.data, data.setData];
};

export default { useSharedStateHook, SharedStateProvider };
