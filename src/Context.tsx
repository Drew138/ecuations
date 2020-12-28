import React, {createContext} from 'react'


export const AppContext = createContext({});

interface Props {
    children: JSX.Element[];
}

// https://fettblog.eu/typescript-react/context/
export const AppProvider:React.FC<Props> = ({children}) => {


    return ( 
        <AppContext.Provider value={{}}>
            {children}
         </AppContext.Provider>
    )
}