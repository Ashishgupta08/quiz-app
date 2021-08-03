import React, { useReducer } from 'react'
import axios from 'axios'
import './login.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../Contexts'
import { LoginType } from './LoginType';
import { loginReducer } from "../../Reducers/loginReducer";
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export function Login() {

    const initialState: LoginType = { loginBottomBorder: "1px solid var(--color-text)", signupBottomBorder: "none", loginCredentials: { username: "", password: "" }, signupCredentials: { name: "", gender: "", email: "", username: "", password: "", confirmPassword: "" } }
    const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const { pathname } = useLocation();

    async function loginHandler(data: { username: string, password: string }) {
        try {
            if (data.username === "" || data.password === "") {
                return store.addNotification({
                    message: 'UserName or password cannot be empty.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else {
                const { data: { result } } = await axios.post("https://quiz-app-backend.ashishgupta08.repl.co/user/login", { username: data.username, password: data.password });
                localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: result }))
                authDispatch({ type: "LOGIN", payload: result });
                navigate('/home')
            }
        } catch (e) {
            if (e.response.status === 401) {
                return store.addNotification({
                    title: "Wrong Password!",
                    message: 'Check your password and try  again.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else if (e.response.status === 404) {
                return store.addNotification({
                    message: 'Check Username and Password and try again.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else {
                return store.addNotification({
                    message: e.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            }
        }
    }

    async function signUpHandler(data: { name: string, gender: string, email: string, username: string, password: string, confirmPassword: string }) {
        try {
            if (data.username === "" || data.password === "" || data.confirmPassword === "" || data.email === "" || data.name === "") {
                return store.addNotification({
                    message: 'All fields are required.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else if (data.password !== data.confirmPassword) {
                return store.addNotification({
                    message: 'Password should be same.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else {
                const { data: { result } } = await axios.post("https://quiz-app-backend.ashishgupta08.repl.co/user/signup", { username: data.username, password: data.password, name: data.name, email: data.email, gender: data.gender });
                localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: result }))
                authDispatch({ type: "LOGIN", payload: result });
                navigate("/home");
            }
        } catch (e) {
            if (e.response.status === 409) {
                return store.addNotification({
                    title: "Something went wrong!",
                    message: 'Failed to create account.',
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            } else {
                return store.addNotification({
                    title: "Something went wrong!",
                    message: e.message,
                    type: "danger",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: false
                    }
                });
            }
        }
    }

    return (
        <div className="bg">
            <div className="p-6 mx-auto text-center flex flex-col relative md:justify-center md:items-center md:w-2/5">
                <div className="py-8 text-center">
                    <h1 className="text-7xl font-semibold">quizo</h1>
                    <p className="normal-case text-xl ml-20">A Unique Quiz App</p>
                </div>
                <div className="mx-auto px-8 py-4 text-center rounded-xl border border-blue-400 shadow box">
                    <div className="bottom-border">
                        <button
                            className="px-8 py-2 w-1/2"
                            style={{ borderBottom: loginState.loginBottomBorder }}
                            onClick={() => {
                                loginDispatch({ type: "LOGIN-BOTTOM-BORDER", payload: "1px solid var(--color-text)" });
                                loginDispatch({ type: "SIGNUP-BOTTOM-BORDER", payload: "none" });
                                navigate('/login');
                            }}>
                            Login
                        </button>
                        <button
                            className="px-8 py-2 w-1/2"
                            style={{ borderBottom: loginState.signupBottomBorder }}
                            onClick={() => {
                                loginDispatch({ type: "SIGNUP-BOTTOM-BORDER", payload: "1px solid var(--color-text)" });
                                loginDispatch({ type: "LOGIN-BOTTOM-BORDER", payload: "none" });
                                navigate('/signup');
                            }}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        {
                            pathname === "/login" &&
                            <div className="my-4">
                                <div>
                                    <input type="text" placeholder="Username" required onChange={(e) => { loginDispatch({ type: "LOGIN-USERNAME", payload: e.target.value }) }} />
                                    <input type="password" placeholder="Password" required onChange={(e) => { loginDispatch({ type: "LOGIN-PASSWORD", payload: e.target.value }) }} />
                                    <button
                                        type="submit"
                                        className="mx-auto my-4 py-2 px-4 w-4/5 border rounded-xl block font-semibold focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 btn-login"
                                        onClick={() => { loginHandler(loginState.loginCredentials) }}
                                    >
                                        Login
                                    </button>
                                </div>
                                <p>Test Credentials - 
                                    <li>Username - <b>admin</b></li>
                                    <li>Password - <b>admin</b></li>
                                </p>
                            </div>
                        }
                        {
                            pathname === "/signup" &&
                            <div className="my-4">
                                <div>
                                    <input type="text" placeholder="Name" required onChange={(e) => { loginDispatch({ type: "SIGNUP-NAME", payload: e.target.value }) }} />
                                    <div className="flex flex-row justify-between">
                                        <label>Gender</label>
                                        <label className="">
                                            <input type="radio" name="gender" value="Male" className="m-0" onChange={(e) => { loginDispatch({ type: "SIGNUP-GENDER", payload: e.target.value }) }} />
                                            Male
                                        </label>
                                        <label className="m-0">
                                            <input type="radio" name="gender" value="Feamle" className="m-0" onChange={(e) => { loginDispatch({ type: "SIGNUP-GENDER", payload: e.target.value }) }} />
                                            Female
                                        </label>
                                    </div>
                                    <input type="email" placeholder="Email" required onChange={(e) => { loginDispatch({ type: "SIGNUP-EMAIL", payload: e.target.value }) }} />
                                    {/* <input type="number" placeholder="Contact Number" /> */}
                                    <input type="text" placeholder="Username" required onChange={(e) => { loginDispatch({ type: "SIGNUP-USERNAME", payload: e.target.value }) }} />
                                    <input type="password" placeholder="Password" required onChange={(e) => { loginDispatch({ type: "SIGNUP-PASSWORD", payload: e.target.value }) }} />
                                    <input type="password" placeholder="Confirm Password" required onChange={(e) => { loginDispatch({ type: "SIGNUP-CONFIRMPASSWORD", payload: e.target.value }) }} />
                                    <button
                                        type="button"
                                        className="mx-auto my-4 py-2 px-4 w-4/5 border rounded-xl block font-semibold focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 btn-login"
                                        onClick={() => { signUpHandler(loginState.signupCredentials) }}>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}