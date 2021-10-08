import React from 'react';
import './home.css';
import Trophy from '../../images/Trophy.png';
import Note from '../../images/Note.png';
import Rocket from '../../images/Rocket.png';
import MaleAvtaar from '../../images/maleAvtaar.png';
import FemaleAvtaar from '../../images/femaleAvtaar.png';
import Code from '../../images/Code.png';
import { useNavigate } from 'react-router-dom';
import { Nav } from '../../Components/index';
import { useUser } from '../../Contexts';

export function Home() {

    const navigate = useNavigate();
    const { userState: { user } } = useUser();

    return (
        <>
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
                <div className="box-home my-6 mx-4 flex rounded-3xl shadow-md">
                    <div>
                        <img src={Trophy} alt="trophy" className="h-44 w-44" />
                    </div>
                    <div className="py-4 self-center">
                        <p className="my-2 text-2xl"><b>Great Going!</b></p>
                        <p className="text-sm">You are doing really well.</p>
                    </div>
                </div>
                <h2 className="mx-8 mt-8 text-xl font-extrabold">Trending Categories</h2>
                <div className="category mx-4 pl-32 flex justify-evenly">
                    <div className="m-4 mb-4 text-center cursor-pointer" onClick={() => navigate(`/quiz/60e35d682c32d2025d2e52aa`)} >
                        <div className="circle rounded-full self-center">
                            <img src={Rocket} alt="rocket" className="h-32 w-32" />
                        </div>
                        <h3 className="text-lg font-bold m-1">Science</h3>
                    </div>
                    <div className="m-4 mb-4 text-center cursor-pointer" onClick={() => navigate(`/quiz/60e361532c32d2025d2e52dd`)}>
                        <div className="circle rounded-full self-center">
                            <img src={Note} alt="note" className="h-32 w-32" />
                        </div>
                        <h3 className="text-lg font-bold m-1">Cricket</h3>
                    </div>
                    <div className="m-4 mb-4 text-center cursor-pointer" onClick={() => navigate(`/quiz/60e364652c32d2025d2e5310`)}>
                        <div className="circle rounded-full self-center">
                            <img src={Code} alt="code" className="h-32 w-32" />
                        </div>
                        <h3 className="text-lg font-bold m-1">Coding</h3>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    )
}
