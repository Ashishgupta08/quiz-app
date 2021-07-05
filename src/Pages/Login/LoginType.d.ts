export type LoginType = {
    loginBottomBorder: string; 
    signupBottomBorder: string; 
    loginCredentials: {
        username: string;
        password: string;
    };
    signupCredentials: {
        name: string;
        gender: string;
        email: string;
        username: string;
        password: string;
        confirmPassword: string;
    }
}

export type LoginAction = 
    { type: "LOGIN-USERNAME", payload: string } | 
    { type: "LOGIN-PASSWORD", payload: string } |
    { type: "SIGNUP-NAME", payload: string } |
    { type: "SIGNUP-GENDER", payload: string } |
    { type: "SIGNUP-EMAIL", payload: string } |
    { type: "SIGNUP-USERNAME", payload: string } |
    { type: "SIGNUP-PASSWORD", payload: string } |
    { type: "SIGNUP-CONFIRMPASSWORD", payload: string } |
    { type: "LOGIN-BOTTOM-BORDER", payload: string } |
    { type: "SIGNUP-BOTTOM-BORDER", payload: string }