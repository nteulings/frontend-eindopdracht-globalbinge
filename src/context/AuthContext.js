import {createContext} from "react";

export const authContext = createContext({});

function AuthContextProvider({ children }){
    const data = {};

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;

// #Context:
// [x] create AuthContext.js
// [x] make AuthContext with createContext
// 2. [x] build AuthContextProvider:
//    - [x] children
//    - [x] AuthContext.Provider component
//    - [x] empty data object
// 3. [x] pass data object value={} property to .Provider
// 4. [x] export context and provider component
// 5. [ ] import provider component in index.js