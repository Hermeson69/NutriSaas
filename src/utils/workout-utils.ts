export const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
}

export const getDifficultyColor = (dificulty: string)=>{
    switch (dificulty){
        case "Iniciante":
            return "bg-green-500"
        case "Intermediário":
            return "bg-yellow-500"
        case "Avançado":
            return "bg-red-500"
        default:
            return "bg-gray-500"
    }
}