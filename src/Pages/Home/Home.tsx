import React from 'react'
import './home.css'
import Trophy from '../../images/Trophy.png';
import Note from '../../images/Note.png';
import Rocket from '../../images/Rocket.png';
import MaleAvtaar from '../../images/maleAvtaar.png';
import { useNavigate } from 'react-router-dom';
import { Nav } from '../../Components/index';

export function Home() {
    const navigate = useNavigate();
    return (
        <>
        <div className="padding-nav pb-16 md:pb-0">
            <div className="profile p-4 m-4 flex justify-between align-middle rounded-xl shadow-md">
                <div>
                    <p>Hello,</p>
                    <p className="text-lg"><b>Ashish Gupta</b></p>
                </div>
                <div>
                    <img className="h-16 w-16" src={MaleAvtaar} alt="avtaar" />
                </div>
            </div>
            <div className="box-home my-2 mx-4 flex rounded-3xl shadow-md">
                <div>
                    <img src={Trophy} alt="trophy" className="h-44 w-44" />
                </div>
                <div className="py-4 self-center">
                    <p className="my-2 text-2xl"><b>Great Going!</b></p>
                    <p className="text-sm">You are doing really well.</p>
                </div>
            </div>
            <h2 className="mx-8 mt-4 text-xl font-extrabold">Trending Categories</h2>
            <div className="category mx-4 pl-32 flex justify-evenly">
                <div className="m-4 mb-4 text-center" onClick={() => navigate(`/quiz/101`)} >
                    <div className="circle rounded-full"> 
                        <img src={Rocket} alt="" className="h-32 w-32" />
                    </div>
                    <h3 className="text-lg font-bold m-1">Science</h3>
                </div>
                <div className="m-4 text-center" onClick={() => navigate(`/quiz/101`)}>
                    <div className="circle rounded-full"> 
                        <img src={Note} alt="" className="h-32 w-32" />
                    </div>
                    <h3 className="text-lg font-bold m-1">Educational</h3>
                </div>
                <div className="m-4 text-center" onClick={() => navigate(`/quiz/101`)}>
                    <div className="circle rounded-full"> 
                        <img src={Trophy} alt="" className="h-32 w-32" />
                    </div>
                    <h3 className="text-lg font-bold m-1">Acheivements</h3>
                </div>
            </div>
        </div>
        <Nav />
        </>
    )
}
