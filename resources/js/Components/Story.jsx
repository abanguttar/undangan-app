import ScrollAnimation from "react-animate-on-scroll";

export default function Story({ sectionRefs }) {
    const stories = [
        {
            title: "Perkenalan",
            text: `Tidak ada yang kebetulan di dunia ini, Semua sudah tersusun
        rapih oleh sang maha kuasa, kita tidak bisa memilih kepada
        siapa kita akan jatuh cinta. Kami bertemu pada tahun 2022
        lewat social media, Uniknya kami bertemu di social media
        yang hanya diawali dengan Uttar mengirimkan pesan yang
        isinya " Hai udah punya pacar belum ? " tidak ada yang
        pernah menyangka bahwa pertemuan didunia maya itu membawa
        kami pada suatu ikatan cinta yang suci hari ini.`,
            image: `/cache/2.jpg`,
        },
        {
            title: "Pendekatan",
            text: `Katanya cinta dapat tumbuh dengan kebersamaan,
        Seiring berjalannya waktu dengan jarak yang tidak
        terlalu jauh yaitu Citayam-Pasar Minggu, Akhirnya
        kami sering bertemu untuk sekedar ngopi bareng dan
        ngobrol. Singkat cerita 3 bulan setelahnya kami
        memutuskan untuk berkomitmen.`,
            image: `/cache/2.jpg`,
        },
        {
            title: "Lamaran",
            text: `2 tahun kemudian Kehendak-Nya menuntun kami pada
            pertemuan keluarga yang menuntun kami pada ikatan
            suci, Kami melangsungkan acara lamaran pada bulan
            Juli 2024.`,
            image: `/cache/2.jpg`,
        },
        {
            title: "Menikah",
            text: `Percayalah, bukan karena bertemu lalu berjodoh tapi karena berjodoh lah maka kami dipertemukan, Kami memutuskan untuk mengikrarkan janji suci pernikahan kami di bulan November ini Insya Allah sebagai mana yang pernah dikatakan oleh Saydina Ali bin abi thalib " Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu".`,
            image: `/cache/2.jpg`,
        },
    ];

    return (
        <>
            <div
                id="story"
                ref={(el) => (sectionRefs.current[4] = el)}
                className="container max-w-cu flex justify-center flex-col items-center "
            >
                <div className="card text-center p-6 mt-3  mb-10 shadow-lg story">
                    <ScrollAnimation
                        animateIn="fadeIn"
                        animatePreScroll={false}
                        delay={500}
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
        </>
    );
}

function CardStory({ title, text, image }) {
    return (
        <>
            <div className="card mb-10">
                <figure className=" drop-shadow-md border-4 border-amber-900 flex justify-center rounded-lg ">
                    <img src={image} alt="uttar-pradesh" />
                </figure>
                <h1 className="text-3xl mt-3 mb-5 playball-regular">{title}</h1>
                <p>{text}</p>
            </div>
        </>
    );
}
