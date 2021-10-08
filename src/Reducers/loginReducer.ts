import { LoginType, LoginAction } from "../Pages/Login/LoginType";

export function loginReducer(state: LoginType, action: LoginAction) {
    switch (action.type) {
        case "LOGIN-USERNAME":
            return { ...state, loginCredentials: { ...state.loginCredentials, username: action.payload } }
        case "LOGIN-PASSWORD":
            return { ...state, loginCredentials: { ...state.loginCredentials, password: action.payload } }
        case "SIGNUP-NAME":
            return { ...state, signupCredentials: { ...state.signupCredentials, name: action.payload } }
        case "SIGNUP-GENDER":
            return { ...state, signupCredentials: { ...state.signupCredentials, gender: action.payload } }
        case "SIGNUP-EMAIL":
            return { ...state, signupCredentials: { ...state.signupCredentials, email: action.payload } }
        case "SIGNUP-USERNAME":
            return { ...state, signupCredentials: { ...state.signupCredentials, username: action.payload } }
        case "SIGNUP-PASSWORD":
            return { ...state, signupCredentials: { ...state.signupCredentials, password: action.payload } }
        case "SIGNUP-CONFIRMPASSWORD": 
            return { ...state, signupCredentials: { ...state.signupCredentials, confirmPassword: action.payload } }
        case "LOGIN-BOTTOM-BORDER":
            return { ...state, loginBottomBorder: action.payload }
        case "SIGNUP-BOTTOM-BORDER":
            return { ...state, signupBottomBorder: action.payload }
        default:
            return { ...state }
    }
}