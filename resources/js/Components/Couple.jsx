import { Snowfall } from "react-snowfall";

import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Couple() {
    return (
        <>
            <div
                id="couple"
                className="container max-w-cu text-black relative p-4 text-center"
            >
                <Snowfall color="#ffff" snowflakeCount={300} speed={[0, 2]} />
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    animatePreScroll={false}
                    delay={200}
                >
                    <ScrollAnimation
                        animateIn="fadeIn"
                        animateOnce={true}
                        delay={250}
                    >
                        <p style={{ marginTop: "2.5rem" }}>
                            Assalamu'alaikum Wr Wb. <br /> Dengan memohon rahmat
                            dan ridho Allah Subhanahu WaTa’ala, insyaallah kami
                            akan menyelenggarakan acara pernikahan anak kami:
                        </p>
                    </ScrollAnimation>
                    <div className="container-groom flex items-center mt-10 flex-col">
                        <figure className="w-1/2 drop-shadow-md">
                            <ScrollAnimation
                                animateIn="fadeIn"
                                animateOnce={true}
                                initiallyVisible={false}
                                delay={250}
                            >
                                <img src="/cache/2.jpeg" alt="uttar-pradesh" />
                            </ScrollAnimation>
                        </figure>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            initiallyVisible={false}
                            delay={250}
                        >
                            <h1 className="text-4xl playball-regular mt-5">
                                Uttar Pradesh Nahendra
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            initiallyVisible={false}
                            delay={250}
                        >
                            <p className="mt-2 ">
                                Putra pertama dari <br /> Bapak Indra Strekeer &
                                Ibu Ratnawati
                            </p>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation
                        animateIn="fadeIn"
                        animateOnce={true}
                        initiallyVisible={false}
                        delay={250}
                    >
                        <div className="flex items-center justify-center gap-4 pe-5 mt-10">
                            <h1 className="text-5xl playball-regular m-0">&</h1>
                        </div>
                    </ScrollAnimation>
                    <div
                        className="container-bride flex items-center mt-10 flex-col"
                        style={{ marginBottom: "1rem" }}
                    >
                        <figure className="w-1/2 drop-shadow-md">
                            <ScrollAnimation
                                animateIn="fadeIn"
                                animateOnce={true}
                                initiallyVisible={false}
                                delay={200}
                            >
                                <img src="/cache/2.jpeg" alt="erlinda" />
                            </ScrollAnimation>
                        </figure>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            initiallyVisible={false}
                            delay={250}
                        >
                            <h1 className="text-4xl playball-regular mt-5">
                                Erlinda Rahmawati
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn="fadeIn"
                            animateOnce={true}
                            initiallyVisible={false}
                            delay={250}
                        >
                            <p className="mt-2 ">
                                Putri kedua dari <br /> Bapak (Alm) Erika Budi
                                Setiawan & Ibu Endah
                            </p>
                        </ScrollAnimation>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    );
}
