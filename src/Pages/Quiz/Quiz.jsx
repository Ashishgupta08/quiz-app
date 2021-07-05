import { Nav } from '../../Components/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth, useCurrentQuiz, useQuiz } from '../../Contexts';
import { useEffect } from 'react';

export function Quiz() {

    const navigate = useNavigate();
    const { id } = useParams();
    const { currentQuizState, currentQuizDispatch } = useCurrentQuiz();
    const { quizState: { quiz } } = useQuiz();
    const { authState } = useAuth();

    useEffect(()=>{
        currentQuizDispatch({ type: "LOAD", payload: quiz.find(item => item._id === id)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[authState])

    return (
        <>
            <Nav />
            <div className="quiz-page padding-nav pb-16 md:pb-0">
                <div className="p-8 pb-6 mx-auto text-center flex flex-col md:pt-16 md:justify-center md:items-center">
                    <p className="font-bold text-4xl">{currentQuizState.currentQuiz.quizName}</p>
                </div>
                <div className="rules mx-4 py-2 px-8 text-center flex flex-col rounded-2xl md:my-12 md:w-1/2 md:mx-auto md:justify-center md:items-center">
                    <p className="font-semibold m-2 text-xl">Rules</p>
                    <ul className="text-justify px-4 list-disc">
                        <li>This quiz contains 10 questions</li>
                        <li>Each correct answer will get you 10 points.</li>
                        <li>Each wrong answer will have 3 negative point.</li>
                        <li>There will be time limit of 30 seconds for each question.</li>
                        <li>There will be no negative point for skiping the question.</li>
                    </ul>
                    <p className="my-4 font-semibold mx-2 text-2xl">All the Best !</p>
                    <button 
                        className="play my-4 py-2 px-6 border cursor-pointer rounded-2xl text-2xl font-semibold inline focus:outline-none"
                        onClick={()=>{navigate('/play/60c30b29ffad6e43a49ec07c')}}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </>
    )
}