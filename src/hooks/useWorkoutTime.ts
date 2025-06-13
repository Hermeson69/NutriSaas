import { useState, useEffect } from "react";

export const useWorkoutTime = () => {
    const [restTimer, setRestingTimer] = useState<number>(0);
    const [isResting, setisResting] = useState<boolean>(false);
    const [workoutStartTime] = useState<Date>(new Date());

    useEffect (()=>{
        let interval: NodeJS.Timeout // evento node para bar um time out uma pausa
        if(isResting && restTimer > 0){ 
            interval = setInterval(()=>{
                setRestingTimer((prev)=>prev -1)
            }, 1000)
        }else if (restTimer === 0 && isResting){
            setisResting(false)
        }
        return () => clearInterval (interval)
    }, [isResting, restTimer]);
    // começar o tempo de descanço quando o user der ok na bolinha do treino
    const startRest =(seconds: number) =>{
        setRestingTimer(seconds)
        setisResting(true)
    }

    const stopRest = () => {
        setisResting(false)
        setRestingTimer(0)
    }

    const getEllapsedTime = (): string => {
        const now = new Date();
        const elapsed = Math.floor((now.getTime()- workoutStartTime.getTime())/1000/60)
        return `${elapsed} min`
    }

    return {
        restTimer,
        isResting,
        startRest,
        stopRest,
        getEllapsedTime,
    }
}