import { useEffect, useState } from "react";
export default function CountDate() {
    const [imgUrl, setImgUrl] = useState("url('/cache-cover/1.jpeg'");
    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    const dateWedding = new Date("2024-11-30").getTime();
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
        "url('/cache-cover/1.jpeg')",
        "url('/cache-cover/4.jpeg')",
        "url('/cache-cover/2.jpeg')",
        "url('/cache-cover/3.jpeg')",
    ];
    useEffect(() => {
        let index = 0;
        const intervalValid = setInterval(() => {
            ++index;
            if (index === arrayImg.length) {
                index = 0;
            }
            setImgUrl(arrayImg[index]);
        }, 3500);

        return () => clearInterval(intervalValid);
    }, []);

    return (
        <>
            <div
                id="countDate"
                className="container container-countdown  max-w-cu grid content-between p-0 "
                style={{
                    backgroundImage: imgUrl,
                    // height: "95vh",
                    width: "100%",
                }}
            >
                <div className="couple-title text-center text-white mt-10">
                    <span className="font-bold text-lg">THE WEDDING OF</span>
                    <p className="playball-regular text-5xl">Uttar & Erlin</p>

                    <p className="drop-shadow-md">Sabtu, 30 November 2024</p>
                </div>
                <div className="container max-w-cu flex gap-4 justify-center mb-10  shadow-xl p-4">
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
                className="box-border text-black h-20 w-20 flex-col rounded-lg flex justify-center items-center"
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
