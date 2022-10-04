import React from 'react'
import { Nav } from '../../Components/index';
import { useUser, useAuth } from '../../Contexts';
import MaleAvtaar from '../../images/maleAvtaar.png';
import FemaleAvtaar from '../../images/femaleAvtaar.png';
import { useNavigate } from 'react-router';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

export function Profile() {

    const { userState: { user } } = useUser();
    const { authDispatch } = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        localStorage?.removeItem("login");
        authDispatch({ type: "LOGOUT" });
        store.addNotification({
            message: 'Successfully Logged Out.',
            type: "success",
            insert: "top",
            container: "top-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: false
            }
        });
        navigate("/");
    }

    return (
        <>
            <Nav />
            <div className="padding-nav pb-16 md:pb-0">
                <div className="profile p-4 m-4 flex justify-between align-middle rounded-xl shadow-md">
                    <div>
                        <p>Hello,</p>
                        <p className="text-lg"><b>{user.name}</b></p>
                    </div>
                    <div>
                        {
                            user.gender === "Male"
                                ? <img className="h-16 w-16" src={MaleAvtaar} alt="avtaar" />
                                : <img className="h-16 w-16" src={FemaleAvtaar} alt="avtaar" />
                        }
                    </div>
                </div>
                <div className="answer-box p-4 m-4 flex flex-col rounded-xl shadow-md">
                    <p className="rounded-lg border-blue-500 border bg-white text-blue-500 px-4 py-1 mb-2 outline-none">Profile Details</p>
                    <label className="my-1">UserName - {user.username}</label>
                    <label className="my-1">Name - {user.name}</label>
                    <label className="my-1">Email - {user.email}</label>
                    <label className="my-1">Gender - {user.gender}</label>
                </div>
                <div className="answer-box p-4 m-4 flex flex-col rounded-xl shadow-md">
                    <p className="rounded-lg border-blue-500 border bg-white text-blue-500 px-4 py-1 mb-2 outline-none">Your Scores</p>
                    {
                        user?.score && user?.score.map(item => {
                            return (
                                <div key={item._id} className="flex justify-between mx-6 my-1">
                                    <label>{item?.quizId?.quizName}</label>
                                    <label>{item?.score}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-right mr-6 mb-6">
                    <button
                        className="answer-box rounded-lg border text-blue-500 w-1/2 px-4 py-2 mb-2 outline-none"
                        onClick={() => { logout() }}
                    >
                        LogOut
                    </button>
                </div>
            </div>
        </>
    )
}
