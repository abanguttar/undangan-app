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
        setIsShow(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.findIndex(
                            (ref) => ref.id === entry.target.id
                        );
                        setActive(index);
                    }
                },
                {
                    threshold: "1",
                }
            )
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <>
            {isShow === false ? <Cover handleShow={handleShow} /> : ""}

            <div
                className={
                    isShow === true
                        ? "container border-1 mb-20 overflow-x-hidden shadow-xl border-black bg-white mb-10 m-0 p-0 flex justify-start p-0 flex-col shadow-lg"
                        : "hidden"
                }
            >
                <CountDate sectionRefs={sectionRefs} />
                <Ayat />
                <Couple sectionRefs={sectionRefs} />
                <Calendar sectionRefs={sectionRefs} />
                <Maps sectionRefs={sectionRefs} />
                <Story sectionRefs={sectionRefs} />
                <Gallery sectionRefs={sectionRefs} />
                <Comment
                    sectionRefs={sectionRefs}
                    csrf_token={csrf_token}
                    comm={comments}
                />
                <BottomNavigation active={active} handleActive={handleActive} />
            </div>
        </>
    );
}

function Cover({ handleShow }) {
    let url = new URL(window.location.href);

    const params = new URLSearchParams(url.search).get("to");
    return (
        <>
            <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                delay={500}
            >
                <div
                    id="cover"
                    className="container container-countdown w-screen max-w-sm h-screen grid content-between p-0 "
                    style={{
                        backgroundImage: "url('/cache/1.jpg')",
                        zIndex: "99999",
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
                    <div className="container max-w-sm flex gap-4 justify-center mb-10 flex-col shadow-xl p-4">
                        <div className="container-guest flex justify-center items-center text-white flex-col text-3xl">
                            <h1 className="playball-regular">
                                {params === "null" ? params : "Tamu"}
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
                </div>{" "}
            </ScrollAnimation>
        </>
    );
}