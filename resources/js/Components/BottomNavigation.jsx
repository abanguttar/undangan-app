import {
    faHome,
    faHeart,
    faCalendarDay,
    faLocationArrow,
    faHandHoldingHeart,
    faImages,
    faBookQuran,
    faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function BottomNavigation({ active, handleActive }) {
    const array = [
        faHome,
        faHeart,
        faCalendarDay,
        faLocationArrow,
        faHandHoldingHeart,
        faImages,
        faBookQuran,
    ];

    const navArray = [
        "countDate",
        "couple",
        "calendar",
        "maps",
        "story",
        "gallery",
        "comment",
    ];

    return (
        <>
            <div
                className="btm-nav mx-auto bg-white max-w-cu h-12 "
                style={{ zIndex: "100" }}
            >
                <ButtonMusic />
                {array.map((x, i) => (
                    <button
                        onClick={() => handleActive(i, navArray[i])}
                        key={i}
                        className={`transition-colors duration-200 hover:text-amber-900 ${
                            active === i
                                ? "border-t-2 border-amber-900 text-amber-900 "
                                : ""
                        }`}
                    >
                        <FontAwesomeIcon icon={x} />
                    </button>
                ))}
            </div>
        </>
    );
}
function ButtonMusic() {
    const [isPlay, setIsPlay] = useState(true);
    const [isFinish, setIsFinish] = useState(false);
    const [music, setMusic] = useState(2);
    const musicSource = [
        "/assets/music-1.mp3",
        "/assets/music-2.mp3",
        "/assets/music-3.mp3",
    ];

    function handlePlay() {
        setIsPlay((prev) => !prev);
    }

    useEffect(() => {
        const music = document.getElementById("music");
        isPlay === true ? music.play() : music.pause();

        music.onended = function () {
            setIsFinish(true);
        };
    }, [isPlay]);

    useEffect(() => {
        if (isFinish === true) {
            if (music >= 2) {
                setMusic(0);
            } else {
                setMusic((prev) => prev + 1);
            }
        }
    }, [isFinish]);

    return (
        <>
            <audio
                className="hidden"
                autoPlay
                id="music"
                src={musicSource[music]}
            ></audio>
            <div
                className="container w-10 h-10 border-4 border-dark hover:border-amber-900 hover:text-amber-900 rounded-full flex justify-center items-center"
                id={isPlay === true ? "music-icon" : "music-icon-2"}
                style={{
                    position: "absolute",
                    bottom: "80px",
                    right: "20px",
                    zIndex: "999",
                }}
            >
                <button onClick={handlePlay}>
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </>
    );
}
