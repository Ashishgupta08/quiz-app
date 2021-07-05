import React from 'react'
import { Nav } from '../../Components/index';
import { useQuiz } from '../../Contexts/QuizContext';

export function LeaderBoard() {

    const { quizState: { leaderBoard } } = useQuiz();

    return (
        <>
            <Nav />
            <div className="padding-nav pb-20 md:pb-0">
                <div className="profile p-4 m-4 flex items-center rounded-xl shadow-md">
                    <p className="text-lg"><b>Leader Board</b></p>
                </div>
                <div className="flex flex-col justify-around">
                    {
                        leaderBoard.map(item => {
                            return (
                                <div key={item._id} className="answer-box p-4 m-4 flex flex-col items-center rounded-xl shadow-md">
                                    <label className="rounded-lg border-blue-500 border bg-white text-blue-500 px-4 py-1 outline-none">{item.quizId.quizName}</label>
                                    <div>
                                        <table className="border-collapse border my-4 mx-auto">
                                            <thead>
                                                <tr className="border">
                                                    <th className="border">Name</th>
                                                    <th className="border">Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    item.leaderBoard.map(user => {
                                                        return (
                                                            <tr className="border" key={user._id}>
                                                                <td className="border px-6">{user.userId.name}</td>
                                                                <td className="border px-6">{user.score}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
