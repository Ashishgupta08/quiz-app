import React, { useState } from 'react'
import './login.css';
import { NavLink } from "react-router-dom";

export function Login() {
    const [loginBottomBorder, setLoginBottomBorder] = useState("1px solid var(--color-text)");
    const [signupBottomBorder, setSignupBottomBorder] = useState("none");

    return (
        <div className="bg">
            <div className="p-6 mx-auto text-center flex flex-col relative md:justify-center md:items-center md:w-1/3">
                <div className="py-8 text-center">
                    <h1 className="text-7xl font-semibold">quizo</h1>
                    <p className="normal-case text-xl ml-20">A Unique Quiz App</p>
                </div>
                <div className="mx-auto px-8 py-4 text-center rounded-xl border border-blue-400 shadow box">
                    <div className="bottom-border">
                        <button
                            className="px-8 py-2 w-1/2"
                            style={{ borderBottom: loginBottomBorder }}
                            onClick={() => {
                                setLoginBottomBorder("1px solid var(--color-text)");
                                setSignupBottomBorder("none");
                            }}>
                            Login
                        </button>
                        <button
                            className="px-8 py-2 w-1/2"
                            style={{ borderBottom: signupBottomBorder }}
                            onClick={() => {
                                setSignupBottomBorder("1px solid var(--color-text)");
                                setLoginBottomBorder("none");
                            }}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        {
                            loginBottomBorder !== "none" &&
                            <div className="my-4">
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <NavLink to='/home'>
                                    <button className="mx-auto my-4 py-2 px-4 w-4/5 border rounded-xl block font-semibold focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 btn-login">
                                        Login
                                    </button>
                                </NavLink>
                            </div>
                        }
                        {
                            signupBottomBorder !== "none" &&
                            <div className="my-4">
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <NavLink to='/home'>
                                    <button className="mx-auto my-4 py-2 px-4 w-4/5 border rounded-xl block font-semibold focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 btn-login">
                                        Sign Up
                                    </button>
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}