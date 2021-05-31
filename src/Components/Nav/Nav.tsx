import React from 'react'
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineTrophy } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export function Nav() {

    return (
        <div className="nav-wrapper w-full fixed bottom-0 md:w-1/3">
            <ul className="nav my-4 mx-6 list-none flex justify-between rounded-full border md:rounded-none md:border-none">
                <h1 className="hidden md:block md:p-4 md:text-3xl md:font-bold md:text-center">QUIZO</h1>
                <NavLink to='/home' activeClassName="active">
                    <li className="p-4 border rounded-full md:border-none md:rounded-none">
                        <HiOutlineHome className="h-8 w-8 md:inline-flex md:mr-4" />
                        <p className="hidden md:contents md:align-middle md:text-xl md:font-medium">Home</p>
                    </li>
                </NavLink>
                <NavLink to='/leaderBoard' activeClassName="active">
                    <li className="p-4 border rounded-full md:border-none md:rounded-none">
                        <AiOutlineTrophy className="h-8 w-8 md:inline-flex md:mr-4" />
                        <p className="hidden md:contents md:align-middle md:text-xl md:font-medium">Leader Board</p>
                    </li>
                </NavLink>
                <NavLink to='/profile' activeClassName="active">
                    <li className="p-4 border rounded-full md:border-none md:rounded-none">
                        <FaRegUser className="h-8 w-8 md:inline-flex md:mr-4" />
                        <p className="hidden md:contents md:align-middle md:text-xl md:font-medium">Profile</p>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}
