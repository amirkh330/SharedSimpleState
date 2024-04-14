const SharedStateContext = createContext();

const SharedStateProvider = ({ state, children }) => {
  const [data, setData] = useState(state);

  return React.createElement(
    SharedStateContext.Provider,
    { value: { data, setData } },
    children
  );
};
