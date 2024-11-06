import Ayat from "@/Components/Ayat";
import Calendar from "@/Components/Calendar";
import CountDate from "@/Components/CountDate";
import Couple from "@/Components/Couple";
import Maps from "@/Components/Maps";
import Story from "@/Components/Story";
import { useEffect, useState } from "react";
import Gallery from "@/Components/Gallery";
import Comment from "@/Components/Comment";
import Gift from "@/Components/Gift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Undangan(props) {
    const [isShow, setIsShow] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [track, setTrack] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    const csrf_token = props.csrf_token;
    const comments = props.comments;
    const musicSource = [
        "/assets/music-1.mp3",
        "/assets/music-2.mp3",
        "/assets/music-3.mp3",
    ];

    function handlePlay() {
        setIsPlay((prev) => !prev);
    }

    const handleShow = () => {
        setIsPlay(true);
        const covers = document.getElementsByClassName("covers")[0];
        const footer = document.getElementById("footer");
        covers.classList.add("hidden-cover-hide");

        // Hide Cover
        setTimeout(() => {
            covers.classList.add("hidden");
            setIsShow(true);
        }, 1800);

        // Show footer
        setTimeout(() => {
            footer.classList.remove("hidden");
        }, 3000);
    };

    useEffect(() => {
        const music = document.getElementById("music");
        const musicIcon = document.getElementById("music-icon");
        if (isPlay) {
            musicIcon.classList.add("rotate");
            music.play();
        } else {
            musicIcon.classList.remove("rotate");
            music.pause();
        }
        music.onended = () => {
            setIsFinish(true);
        };
    }, [isPlay, track]);

    useEffect(() => {
        if (isFinish) {
            setIsFinish(false);
            // Make it 1 if length same as current track
            setTrack((prev) => (prev === musicSource.length ? 1 : prev + 1));
            setIsPlay(true);
        }
    }, [isFinish]);

    return (
        <>
            {<Cover handleShow={handleShow} />}

            <div
                className={`container border-1 mb-0 pb-0 overflow-x-hidden max-auto shadow-xl border-black max-w-cu bg-white m-0 p-0 flex justify-start p-0 flex-col shadow-lg ${
                    isShow === false ? "hidden" : ""
                    // isShow === false ? "" : ""
                }`}
            >
                <CountDate />
                <Ayat />
                <Couple />
                <Calendar />
                <Maps />
                <Story />
                <Gallery />
                <Gift />
                <Comment csrf_token={csrf_token} comm={comments} />
                <ButtonMusic
                    musicSource={musicSource}
                    handlePlay={handlePlay}
                    track={track}
                />
            </div>
            <Footer />
        </>
    );
}

function Cover({ handleShow }) {
    let url = new URL(window.location.href);

    const params = new URLSearchParams(url.search).get("to");
    return (
        <>
            <div className={`h-screen w-screen flex justify-center covers `}>
                <div
                    id="cover"
                    className={`container container-countdown w-screen max-w-md h-screen grid content-between p-0`}
                    style={{
                        backgroundImage: "url('/cache/vertical-1.jpeg')",
                        zIndex: "99999",
                        height: "100dvh",
                        width: "100%",
                    }}
                >
                    <div className="couple-title text-center text-white mt-10">
                        <span className="font-bold text-lg">
                            THE WEDDING OF
                        </span>
                        <p className="playball-regular text-5xl">
                            Uttar & Erlin
                        </p>

                        <p className="drop-shadow-md">
                            Sabtu, 30 November 2024
                        </p>
                    </div>
                    <div className="container max-w-md flex gap-4 justify-center mb-10 flex-col p-4">
                        <div className="container-guest flex justify-center items-center text-white flex-col text-3xl">
                            <h1 className="playball-regular">
                                {params !== "null" ? params : "Tamu"}
                            </h1>
                            <h4 className="playball-regular">di Tempat</h4>
                        </div>
                        <div className="container flex justify-center items-center">
                            <button
                                onClick={handleShow}
                                className="btn bg-amber-800 hover:bg-amber-900 text-white"
                            >
                                Buka Undangan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function ButtonMusic({ musicSource, handlePlay, track }) {
    return (
        <>
            <audio
                className="hidden"
                autoPlay
                id="music"
                src={musicSource[track]}
            ></audio>
            <div
                className="container text-black w-10 h-10 border-4 border-dark border-amber-900 text-amber-900 rounded-full flex justify-center items-center"
                id="music-icon"
                // id="music-icon-2"
                style={{
                    position: "fixed",
                    bottom: "4rem",
                    right: "3%",
                }}
            >
                <button className="text-amber-900" onClick={handlePlay}>
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </>
    );
}

function Footer() {
    return (
        <>
            <footer
                className={`hidden footer bg-amber-800 flex text-neutral-content items-center p-4 h-20 mb-0`}
                id="footer"
            >
                <p className="text-white flex">
                    Copyright © {new Date().getFullYear()}{" "}
                    <a
                        className="hover:font-bold "
                        href="https://www.instagram.com/uttarpn/"
                    >
                        @uttarpn
                    </a>{" "}
                    - All right reserved
                </p>
            </footer>
        </>
    );
}
