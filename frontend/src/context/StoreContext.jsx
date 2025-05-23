import { createContext } from "react";
import { blogData } from "../assets/assests";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
    const contextValue = {blogData};

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;