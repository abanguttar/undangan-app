import ScrollAnimation from "react-animate-on-scroll";
export default function Story() {
    const stories = [
        {
            title: "Perkenalan",
            text: `"Tidak ada yang kebetulan di dunia ini; semua sudah tersusun rapi oleh Sang Maha Kuasa. Kita tidak bisa memilih kepada siapa kita akan jatuh cinta. C.S. Lewis mengatakan, 'Perkenalan adalah permulaan dari semua yang besar.' Kami bertemu pada tahun 2022 melalui media sosial. Uniknya, pertemuan kami dimulai dengan pesan sederhana, 'Hai, sudah punya pacar belum?' Tak ada yang pernah menyangka bahwa pertemuan di dunia maya itu membawa kami pada ikatan cinta yang suci hingga hari ini."`,
            image: `/cache/2.jpeg`,
        },
        {
            title: "Pendekatan",
            text: `"Cinta tidak terdiri dari saling memandang, tetapi dalam melihat ke arah yang sama bersama-sama" Seiring berjalannya waktu, dengan jarak yang tidak terlalu jauh antara Citayam dan Pasar Minggu, kami pun sering bertemu. Hanya untuk sekadar ngopi dan ngobrol, menikmati momen sederhana namun berarti. Singkat cerita, tiga bulan kemudian, kami memutuskan untuk berkomitmen.`,
            image: `/cache/3.jpeg`,
        },
        {
            title: "Lamaran",
            text: `2 tahun kemudian Kehendak-Nya menuntun kami pada
            pertemuan keluarga yang menuntun kami pada ikatan
            suci, Kami melangsungkan acara lamaran pada bulan
            Juli 2024.`,
            image: `/cache/5.jpeg`,
        },
        {
            title: "Menikah",
            text: `Percayalah, bukan karena bertemu lalu berjodoh, tetapi karena berjodoh lah maka kami dipertemukan. Kami memutuskan untuk mengikrarkan janji suci pernikahan kami di bulan November ini, Insya Allah. Sebagaimana yang pernah dikatakan oleh Sayyidina Ali bin Abi Thalib, "Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu."`,
            image: `/cache/4.jpeg`,
        },
    ];

    return (
        <div
            id="story"
            className="container p-4 text-black max-w-cu flex justify-center flex-col items-center "
        >
            <div className="card p-4 text-center mt-3 mb-10 shadow-lg story">
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    animatePreScroll={false}
                    delay={200}
                >
                    <h1 className="text-4xl mt-3 mb-8 playball-regular">
                        Love Story
                    </h1>
                    {stories.map((x, i) => (
                        <CardStory
                            key={i}
                            title={x.title}
                            image={x.image}
                            text={x.text}
                        />
                    ))}
                </ScrollAnimation>
            </div>
        </div>
    );
}

function CardStory({ title, text, image }) {
    return (
        <>
            <div className="card mb-10">
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    delay={200}
                >
                    <figure className=" drop-shadow-md border-2 border-amber-900 flex justify-center rounded-lg ">
                        <img
                            src={image}
                            alt={image}
                            referrerPolicy="no-refferer"
                        />
                    </figure>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    initiallyVisible={false}
                    delay={250}
                >
                    <h1 className="text-3xl mt-3 mb-5 playball-regular">
                        {title}
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    initiallyVisible={false}
                    delay={280}
                >
                    <p>{text}</p>
                </ScrollAnimation>
            </div>
        </>
    );
}
