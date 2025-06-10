"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState)  => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button 
                onClick={handleVideoPlayer}
                className="text-amber-50 float-right bg-primary px-3 mb-1 hover:bg-amber-50">
                    X
                </button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Videonya rusak njir, nonton yang lain aja")}
                />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return(
            <button onClick={handleVideoPlayer} 
            className="fixed bottom-5 right-5 w-32 bg-amber-50 text-secondary text-xl rounded hover:bg-accent transition-all shadow-xl">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer