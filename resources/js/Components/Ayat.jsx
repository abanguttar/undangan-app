import Flower1 from "./Flower1";

import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Ayat() {
    return (
        <>
            <div
                className="container max-w-cu  text-black p-0 flex justify-center flex-col"
                style={{
                    height: "32rem",
                    position: "relative",
                    backgroundImage: 'url("/cache/ayat.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Flower1 name={"flower-1"} />
                <Flower1 name={"flower-3"} />
                <ScrollAnimation
                    animateIn="fadeIn"
                    animatePreScroll={false}
                    delay={500}
                >
                    <div>
                        <h1 className="playball-regular text-center text-4xl">
                            Ar-Rum 21
                        </h1>
                        <div className="container-ayat mt-5 text-center p-4 text-xl">
                            <span className="elementor-heading-title elementor-size-default">
                                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ
                                أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
                                وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ
                                فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
                            </span>
                        </div>
                        <div className="container-translate text-center p-6 text-sm">
                            <span>
                                "Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah
                                Dia Menciptakan Pasangan-Pasangan Untukmu Dari
                                Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa
                                Tenteram Kepadanya, Dan Dia Menjadikan Di
                                Antaramu Rasa Kasih Dan Sayang. Sesungguhnya
                                Pada Yang Demikian Itu Benar-Benar Terdapat
                                Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang
                                Berpikir."
                            </span>
                        </div>
                    </div>{" "}
                </ScrollAnimation>
                <Flower1 name={"flower-2"} />
                <Flower1 name={"flower-4"} />
            </div>
        </>
    );
}
