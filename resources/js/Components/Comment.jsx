import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Flower2 from "./Flower2";

export default function Comment({ csrf_token, comm, sectionRefs }) {
    const [datas, setDatas] = useState({
        name: "",
        text: "",
    });
    const chatRef = useRef(null);
    const [chatRefActive, setChatRefActive] = useState(false);
    const [datasLength, setDatasLength] = useState(null);
    const [isReload, setReload] = useState(false);
    const [comments, setComments] = useState(comm);
    const [error, setError] = useState({ name: "", text: "" });
    const arrayFlower = [...Array(5).keys()];
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setDatas((p) => ({ ...p, [key]: value }));
    };

    const handleClick = () => {
        setError({ name: "", text: "" });
        fetch("/uttarerlinda", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-CSRF-TOKEN": csrf_token,
            },
            body: JSON.stringify({
                name: datas.name,
                text: datas.text,
            }),
        })
            .then((res) => {
                if (res.status === 422) {
                    return res.json().then((e) => {
                        let error = e.message.map((x) => {
                            let n = x.split("|");
                            return setError((pre) => ({
                                ...pre,
                                [n[0]]: n[1],
                            }));
                        });

                        throw new Error("Gagal!");
                    });
                }
                return res.json();
            })
            .then((d) => {
                setReload(true);
                setDatas({
                    name: "",
                    text: "",
                });
            });
    };

    useEffect(() => {
        if (isReload) {
            fetch("fetch-comments")
                .then((res) => {
                    return res.json();
                })
                .then((d) => {
                    // console.log(d.comments);
                    setDatasLength(d.comments.length - 1);
                    setComments(d.comments);
                    setChatRefActive(true);
                });
            setTimeout(() => {
                setChatRefActive(false);
                setReload(false);
            }, 500);
        }
    }, [isReload]);

    useEffect(() => {
        if (chatRefActive) {
            chatRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [chatRefActive]);

    return (
        <>
            <div
                id="comment"
                ref={(el) => (sectionRefs.current[6] = el)}
                className="container relative text-black max-w-cu flex justify-center flex-col items-center "
            >
                <div className="flower-transition-wrap flex">
                    {arrayFlower.map((x) => (
                        <Flower2 key={x} name={x} />
                    ))}
                </div>
                <div className="container text-center p-6 mt-16  shadow-lg comment">
                    <h1 className="text-4xl mt-3 mb-8 playball-regular">
                        Ucapan & Do'a
                    </h1>
                    <div
                        className="container border-4 rounded-2xl border-amber-900 shadow overflow-y-scroll p-2"
                        style={{ height: "30rem" }}
                    >
                        <div className="p mt-3"></div>
                        <div className="chat chat-end">
                            <div className="chat-header">
                                Uttar & Erlin
                                <time className="text-xs opacity-50 ml-1">
                                    30 November 2024
                                </time>
                            </div>
                            <div className="chat-bubble text-white">
                                Jangan lupa untuk datang yaa!
                            </div>
                        </div>
                        {comments.map((x, i) => (
                            <div
                                ref={datasLength === i ? chatRef : null}
                                key={i}
                                className="chat chat-start"
                            >
                                <div className="chat-header">
                                    {x.name}
                                    <time className="text-xs opacity-50 ml-1">
                                        {x.send_at}
                                    </time>
                                </div>
                                <div className="chat-bubble bg-amber-800 text-white">
                                    {x.text}
                                </div>
                            </div>
                        ))}
                        <div className="p mb-3"></div>
                    </div>

                    <ScrollAnimation
                        animateIn="fadeIn"
                        animatePreScroll={false}
                    >
                        <div className="container gap-2 flex flex-col flex-start mt-10">
                            <h5 className="playball-regular text-2xl">
                                Kirim Ucapan & Do'a
                            </h5>

                            <input
                                type="text"
                                placeholder="Nama"
                                className="input w-full max-w-sm bg-white"
                                id="name"
                                onChange={handleChange}
                                value={datas.name}
                                maxLength={30}
                            />
                            {error.name && (
                                <p className="text-error flex ml-2 p-0">
                                    {error.name}
                                </p>
                            )}
                            <textarea
                                className="textarea textarea-bordered max-w-sm bg-white"
                                placeholder="Ucapan & Do'a"
                                id="text"
                                maxLength={120}
                                value={datas.text}
                                onChange={handleChange}
                            ></textarea>
                            {error.text && (
                                <p className="text-error flex ml-2 p-0">
                                    {error.text}
                                </p>
                            )}

                            <button
                                className="btn bg-amber-800 hover:bg-amber-900 text-white"
                                onClick={handleClick}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                                Kirim
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
