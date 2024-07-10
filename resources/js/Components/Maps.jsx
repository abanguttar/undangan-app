import ScrollAnimation from "react-animate-on-scroll";

export default function Maps({ sectionRefs }) {
    return (
        <>
            <div
                id="maps"
                ref={(el) => (sectionRefs.current[3] = el)}
                className="container max-w-sm flex justify-center flex-col items-center "
            >
                <div className="card text-center p-6 mt-3  mb-10 shadow-lg maps">
                    <h1 className="text-4xl mt-3 mb-8 playball-regular">
                        Maps
                    </h1>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.37999153389!2d106.79621517603881!3d-6.344811862078104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee8bcb7c6613%3A0x4d4150329f688d7a!2sPOS%20Pemadam%20Kebakaran%20Ciganjur%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1720345967089!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="mb-10"
                        ></iframe>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
