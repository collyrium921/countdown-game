import { useState } from "react";

export default function TimerChallenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false)
    function handleStart(){
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000);
        setTimerStarted(true)
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={handleStart}>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Time is Running
            </p>
        </section>
    )
}