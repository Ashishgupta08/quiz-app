import { UserAction, UserState } from '../Contexts/Context';
export function userReducer(state: UserState, action: UserAction){
    switch (action.type) {
        case "LOAD":
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}