import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Calendar() {
    return (
        <>
            <div
                className="container text-black p-4 max-w-cu"
                // style={{ backgroundColor: "#E7D7C9" }}
                id="calendar"
            >
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    animateOnce={true}
                    delay={200}
                >
                    <Event
                        title={"Akad Nikah"}
                        hour={"10"}
                        showGreeting={true}
                    />
                    <Event title={"Resepsi"} hour={"11"} showGreeting={false} />
                </ScrollAnimation>
            </div>
        </>
    );
}

function Event({ title, hour, showGreeting }) {
    return (
        <>
            <div
                className="card text-center p-4 mt-5 shadow-lg calendar"
                style={{ backgroundColor: "#FFF7ED" }}
            >
                {showGreeting && (
                    <ScrollAnimation
                        animateIn="fadeIn"
                        animatePreScroll={false}
                        animateOnce={true}
                        delay={250}
                    >
                        <p className="mt-10">
                            Dengan segala kerendahan hati kami berharap
                            kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan
                            anak kami yang akan diselenggarakan pada :
                        </p>
                    </ScrollAnimation>
                )}
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    animateOnce={true}
                    delay={250}
                >
                    <h1
                        className={
                            showGreeting === true
                                ? "text-5xl playball-regular mt-10"
                                : "text-5xl playball-regular mt-10"
                        }
                    >
                        {title}
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    animateOnce={true}
                    delay={250}
                >
                    <div className="not-italic date-calendar playball-regular text-3xl gap-2 justify-center mt-3 flex">
                        <p>Sabtu, 30 November 2024</p>
                    </div>
                    <h4 className="playball-regular text-3xl mt-2"></h4>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    animateOnce={true}
                    delay={250}
                >
                    <p className="playball-regular font-bold text-2xl mt-5 not-italic">
                        Pukul: {hour}.00 WIB
                    </p>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    animateOnce={true}
                    delay={250}
                >
                    <p className=" font-bold text-2xl mt-5 not-italic">
                        Lokasi
                    </p>
                    <span className="text-md p-2">
                        Pos Pemadam Kebakaran Ciganjur, RT 002/RW 001, Ciganjur,
                        Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus
                        Ibukota Jakarta 16514
                    </span>
                </ScrollAnimation>
                <div
                    className={
                        showGreeting === true
                            ? "flex justify-center items-center mt-10"
                            : "flex justify-center items-center mt-10"
                    }
                >
                    <ScrollAnimation
                        animateIn="wobble"
                        className="flex"
                        initiallyVisible={true}
                        animateOnce={true}
                        delay={250}
                    >
                        <a
                            href="https://www.google.com/maps/place/POS+Pemadam+Kebakaran+Ciganjur,+Jakarta+Selatan/@-6.3448119,106.7962152,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69ee8bcb7c6613:0x4d4150329f688d7a!8m2!3d-6.3448172!4d106.7987901!16s%2Fg%2F11cm_hx1vy?hl=in-ID&entry=ttu"
                            className="btn hover:bg-amber-900  bg-amber-800 text-white mt-2 gap-2 w-full"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLocationArrow} />
                            Lihat Lokasi
                        </a>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
