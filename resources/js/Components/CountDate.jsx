import { useEffect, useState } from "react";
export default function CountDate({ sectionRefs }) {
    const [imgUrl, setImgUrl] = useState("url('/makima/1.jpg')");
    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    const dateWedding = new Date("2024-10-16").getTime();
    useEffect(() => {
        const dateInterval = setInterval(() => {
            const dateNow = new Date().getTime();
            let distance = dateWedding - dateNow;
            let d = Math.floor(distance / (1000 * 60 * 60 * 24));
            let h = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);
            setDay(d < 10 ? "0" + d : d);
            setHour(h < 10 ? "0" + h : h);
            setMinute(m < 10 ? "0" + m : m);
            setSecond(s);
            if (d < 0) {
                setDay("00");
            }
            if (s < 0) {
                setHour("00");
                setMinute("00");
                setSecond("00");
                clearInterval(dateInterval);
            }
        }, 1000);

        return () => clearInterval(dateInterval);
    }, []);

    const arrayImg = [
        "url('/cache/1.jpg')",
        "url('/cache/2.jpg')",
        "url('/cache/3.jpg')",
        "url('/cache/4.jpg')",
        "url('/cache/5.png')",
        "url('/cache/6.jpg')",
    ];
    useEffect(() => {
        let index = 0;
        const intervalValid = setInterval(() => {
            ++index;
            if (index === 6) {
                index = 0;
            }
            setImgUrl(arrayImg[index]);
        }, 3000);

        return () => clearInterval(intervalValid);
    }, []);

    return (
        <>
            <div
                id="countDate"
                ref={(el) => (sectionRefs.current[0] = el)}
                className="container container-countdown  max-w-sm grid content-between p-0 "
                style={{
                    backgroundImage: imgUrl,
                }}
            >
                <div className="couple-title text-center text-white mt-10">
                    <span className="font-bold text-lg">THE WEDDING OF</span>
                    <p className="playball-regular text-5xl">Uttar & Erlin</p>
                    <p>Sabtu, 30 November 2024</p>
                </div>
                <div className="container max-w-sm flex gap-4 justify-center mb-10  shadow-xl p-4">
                    <Box counter={day} title={"Days"} />
                    <Box counter={hour} title={"Hours"} />
                    <Box counter={minute} title={"Minutes"} />
                    <Box counter={second} title={"Seconds"} />
                </div>
            </div>
        </>
    );
}
function Box({ counter, title }) {
    return (
        <>
            <div
                className="box-border h-20 w-20 flex-col rounded-lg flex justify-center items-center"
                style={{ backgroundColor: "#E7D7C9" }}
            >
                <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": parseInt(counter) }}></span>
                </span>
                {title}
            </div>
        </>
    );
}
