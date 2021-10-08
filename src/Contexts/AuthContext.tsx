import React, { createContext, useContext, useReducer } from "react";
import { Prop, AuthContextType, AuthAction, AuthType } from "./Context";

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Prop) {

    const { isUserLoggedIn, token: savedToken } = JSON.parse(localStorage.getItem("login") || '{}') || { isUserLoggedIn: false, token: null };
    const initialState: AuthType = {
        isUserLoggedIn: isUserLoggedIn,
        token: savedToken
    }

    const [authState, authDispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() { 
    return useContext(AuthContext) 
}

function authReducer(state: AuthType, action: AuthAction) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isUserLoggedIn: true, token: action.payload }
        case "LOGOUT":
            return { ...state, isUserLoggedIn: false, token: null }
        default:
            return { ...state }
    }
}