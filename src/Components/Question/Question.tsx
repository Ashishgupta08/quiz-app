import React from 'react'
import './question.css'
import { MdTimer } from 'react-icons/md';;

export function Question() {
    return (
        <div className="text-center">
            <div className="flex flex-row justify-between mt-8 mb-2 mx-6 font-semibold text-xl">
                <p>Question - 5/20</p>
                <p className=""> <MdTimer className="inline align-middle h-6 w-6" /> 00:30 </p>
            </div>
            <div className="box-home py-4 px-4 my-4 mx-2 rounded-3xl">
                <p className="m-4">
                    What is the name of the Marvel Comic Legend who has made an
                    appearance in all the films of the MCU ?
                </p>
                <button className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2">Stan Lee</button>
                <button className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2">Tony Stark</button>
                <button className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2">Steve Rogers</button>
                <button className="option-btn py-2 px-6 m-4 w-72 text-left border rounded-xl text-lg font-semibold focus:outline-none focus:ring-2">Nick Fury</button>
            </div>
            <div className="text-right mx-4">
                <button className="primary-btn border rounded-xl px-4 py-2 w-32 text-lg font-bold focus:outline-none">Skip</button>
            </div>
        </div>
    )
}
