import { createContext, useContext, useState } from "react"

const SharedStateContext = createContext();

export const SharedStateProvider = ({ state, children}) => {
    const [data, setData] = useState(state);

    return React.createElement(SharedSimpleStateContext.Provider, { value: { data, setData } }, children)
}

export const useSharedStateHook = () => {
    const data = useContext(SharedStateContext);

    return [data.data, data.setData];
}