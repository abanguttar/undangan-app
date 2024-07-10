import { Snowfall } from "react-snowfall";

import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Couple({ sectionRefs }) {
    return (
        <>
            <div
                id="couple"
                ref={(el) => (sectionRefs.current[1] = el)}
                className="container max-w-sm relative p-4 text-center"
            >
                <Snowfall color="#ffff" snowflakeCount={300} speed={[0, 2]} />
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    delay={500}
                >
                    <p style={{ marginTop: "5rem" }}>
                        Assalamu'alaikum Wr Wb Dengan memohon rahmat dan ridho
                        Allah Subhanahu WaTa’ala, insyaallah kami akan
                        menyelenggarakan acara pernikahan anak kami:
                    </p>
                    <div className="container-groom flex items-center mt-10 flex-col">
                        <figure className="w-1/2 drop-shadow-md">
                            <img src="/cache/2.jpg" alt="uttar-pradesh" />
                        </figure>
                        <h1 className="text-3xl playball-regular mt-5">
                            Uttar Pradesh Nahendra
                        </h1>
                        <p className="mt-2 font-bold">
                            Putra pertama dari <br /> Bapak Indra Strekeer & Ibu
                            Ratnawati
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 pe-5 mt-10">
                        <h1 className="text-5xl playball-regular mt-10 me-3">
                            ~
                        </h1>
                        <h1 className="text-5xl playball-regular m-0">&</h1>
                        <h1 className="text-5xl playball-regular mt-10">~</h1>
                    </div>
                    <div
                        className="container-bride flex items-center mt-10 flex-col"
                        style={{ marginBottom: "5rem" }}
                    >
                        <figure className="w-1/2 drop-shadow-md">
                            <img src="/cache/2.jpg" alt="uttar-pradesh" />
                        </figure>
                        <h1 className="text-3xl playball-regular mt-5">
                            Erlinda Rahmawati
                        </h1>
                        <p className="mt-2 font-bold">
                            Putri ke-2 dari <br /> Bapak (Alm) Erika Budi
                            Setiawan & Ibu Endah
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    );
}
