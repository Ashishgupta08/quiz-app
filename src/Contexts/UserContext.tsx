import { useContext, createContext, useReducer, useEffect } from "react";
import { Prop, UserState, UserContextType } from './Context';
import { userReducer } from '../Reducers/userReducer';
import { useAuth } from "./index";
import axios from 'axios';

const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: Prop){

    const initialUserState: UserState = { user: {} }
    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const { authState } = useAuth();

    useEffect(()=>{
        (async function(){  
            try {
                const { data: { result } } = await axios.get("https://quiz-app-backend.ashishgupta08.repl.co/user/getUserData", { headers: { Authorization: authState.token } })
                userDispatch({ type: "LOAD", payload: result })
            } catch (e) {
                console.log(e.message);
            }
        })()
    },[authState])

    return(
        <UserContext.Provider value={{ userState, userDispatch }}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}