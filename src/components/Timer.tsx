import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null,
    restart: () => void
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {

    const [whiteTimer, setWhiteTimer] = useState(300);
    const [blackTimer, setBlackTimer] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementWhiteTimer() {
        setWhiteTimer(prev => prev - 1);
        if(whiteTimer === 0){
            alert("Белые проиграли!");
            handleRestart();
        }
    }

    function decrementBlackTimer() {
        setBlackTimer(prev => prev - 1);
        if(blackTimer === 0){
            alert("Черные проиграли!");
            handleRestart();
        }
    }

    function handleRestart(){
        setWhiteTimer(300);
        setBlackTimer(300);
        restart();
    }

    return (
        <div className="timer">
            <div>
                <button onClick={handleRestart}>Перезапустить игру</button>
            </div>
            <h2>Белые: {whiteTimer} с</h2>
            <h2>Черные: {blackTimer} с</h2>
        </div>
    );
};

export default Timer;