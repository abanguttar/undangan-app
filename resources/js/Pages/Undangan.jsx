import Ayat from "@/Components/Ayat";
import BottomNavigation from "@/Components/BottomNavigation";
import Calendar from "@/Components/Calendar";
import CountDate from "@/Components/CountDate";
import Couple from "@/Components/Couple";
import Maps from "@/Components/Maps";
import Story from "@/Components/Story";
import { useEffect, useRef, useState } from "react";
import Gallery from "@/Components/Gallery";
import Comment from "@/Components/Comment";
import ScrollAnimation from "react-animate-on-scroll";
import Gift from "@/Components/Gift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Undangan(props) {
    const [active, setActive] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const sectionRefs = useRef([]);
    const csrf_token = props.csrf_token;
    const comments = props.comments;
    function handleActive(i, id) {
        setActive(i);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    const handleShow = () => {
        const covers = document.getElementsByClassName("covers")[0];
        covers.classList.add("hidden-cover-hide");
        setTimeout(() => {
            covers.classList.add("hidden");
            setIsShow(true);
        }, 1800);
    };

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) =>
    //         entries.forEach(
    //             (entry) => {
    //                 if (entry.isIntersecting) {
    //                     const index = sectionRefs.current.findIndex(
    //                         (ref) => ref.id === entry.target.id
    //                     );
    //                     setActive(index);
    //                 }
    //             },
    //             {
    //                 threshold: "1",
    //             }
    //         )
    //     );

    //     sectionRefs.current.forEach((ref) => {
    //         if (ref) observer.observe(ref);
    //     });

    //     return () => {
    //         sectionRefs.current.forEach((ref) => {
    //             if (ref) observer.unobserve(ref);
    //         });
    //     };
    // }, []);

    return (
        <>
            {<Cover handleShow={handleShow} />}

            <div
                className={`container border-1 mb-20 overflow-x-hidden max-auto shadow-xl border-black max-w-cu bg-white mb-10 m-0 p-0 flex justify-start p-0 flex-col shadow-lg ${
                    isShow === false ? "hidden" : ""
                    // isShow === false ? "" : ""
                }`}
            >
                <CountDate sectionRefs={sectionRefs} />
                <Ayat />
                <Couple sectionRefs={sectionRefs} />
                <Calendar sectionRefs={sectionRefs} />
                <Maps sectionRefs={sectionRefs} />
                <Story sectionRefs={sectionRefs} />
                <Gallery sectionRefs={sectionRefs} />
                <Gift />
                <Comment
                    sectionRefs={sectionRefs}
                    csrf_token={csrf_token}
                    comm={comments}
                />
                <Footer />
                {/* <BottomNavigation active={active} handleActive={handleActive} /> */}
            </div>
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
                        height: "100vh",
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
                        <p>Sabtu, 30 November 2024</p>
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

function ButtonMusic() {
    const [isPlay, setIsPlay] = useState(true);
    const [isFinish, setIsFinish] = useState(false);
    const [music, setMusic] = useState(1);
    const musicSource = [
        "/assets/music-1.mp3",
        "/assets/music-2.mp3",
        "/assets/music-3.mp3",
    ];

    function handlePlay() {
        setIsPlay((prev) => !prev);
    }

    // console.log({ music });

    useEffect(() => {
        const music = document.getElementById("music");
        isPlay === true ? music.play() : music.pause();
        music.onended = function () {
            setIsFinish(true);
        };
    }, [isPlay]);

    useEffect(() => {
        if (isFinish === true) {
            if (music === 2) {
                setMusic(0);
            } else {
                setMusic((prev) => parseInt(prev) + 1);
            }
            setIsPlay(true);
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
                // className="container text-black w-10 h-10 border-4 border-dark hover:border-amber-900 hover:text-amber-900 rounded-full flex justify-center items-center"
                className="container text-black w-10 h-10 border-4 border-dark hover:border-amber-900 hover:text-amber-900 rounded-full flex justify-center items-center"
                id={isPlay === true ? "music-icon" : "music-icon-2"}
                // id="music-icon-2"
                style={{
                    position: "fixed",
                    bottom: "4rem",
                    right: "3%",
                }}
            >
                {/* <button onClick={handlePlay}> */}
                <button
                    className="text-white hover:text-amber-900"
                    onClick={handlePlay}
                >
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </>
    );
}

function Footer() {
    return (
        <>
            <footer className="footer bg-amber-800 flex text-neutral-content items-center p-4 h-20 mb-0">
                <ButtonMusic />
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
