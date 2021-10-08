import React from 'react';
import "./onboarding.css";
import rocket from "../../images/Rocket.png";
import { ImArrowRight2 } from "react-icons/im";
import { NavLink } from "react-router-dom";

export function Onboarding() {
    return (
        <div className="bg">
            <div className="p-6 mx-auto text-center flex relative md:justify-center md:items-center md:w-1/3">
                <div className="my-16 lowercase py-12 overflow-hidden">
                    <h1 className="text-8xl font-semibold">quizo</h1>
                    <p className="normal-case text-right text-xl">A Unique Quiz App</p>
                </div>
                <img src={rocket} alt="rocket" className="h-48 w-40 absolute right-0.5 top-10" />
            </div>
            <div className="mx-auto text-center">
                <NavLink to='/home'>
                    <button className="py-4 px-10 w-56 border rounded-2xl text-2xl font-semibold inline focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 btn">
                        Let's Play
                        <ImArrowRight2 className="inline ml-2" />
                    </button>
                </NavLink>
            </div>
        </div>
    )
}