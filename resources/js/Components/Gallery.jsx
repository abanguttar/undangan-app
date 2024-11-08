import Lightbox from "@seafile/react-image-lightbox";
import "@seafile/react-image-lightbox/style.css";
import { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUp, setIsOpenUp] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        "/cache/2.jpeg",
        "/cache/3.jpeg",
        "/cache/4.jpeg",
        "/cache/5.jpeg",
        "/cache/6.jpeg",
        "/cache/7.jpeg",
        "/cache/8.jpeg",
        "/cache/9.jpeg",
        "/cache/10.jpeg",
        "/cache/11.jpeg",
    ];
    // const imagesUpper = [
    //     "https://placehold.co/358x200",
    //     "https://placehold.co/175x100",
    //     "https://placehold.co/175x230",
    //     "https://placehold.co/175x230",
    //     "https://placehold.co/175x100",
    // ];
    const imagesUpper = [
        "/cache/5.jpeg",
        "https://placehold.co/175x100",
        "https://placehold.co/175x230",
        "https://placehold.co/175x230",
        "https://placehold.co/175x100",
    ];

    // mainRef = React.createRef<Splide>();

    // /**
    //  * The thumbnail Splide component.
    //  */
    // thumbsRef = React.createRef<Splide>();

    const handleClick = (i) => {
        setPhotoIndex(i);
        setIsOpen(true);
    };
    const handleClickUpper = (i) => {
        setPhotoIndex(i);
        setIsOpenUp(true);
    };

    const options = {
        type: "loop",
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        perPage: 1,
        speed: 200,
        height: "17rem",
    };

    const thumsOptions = {
        type: "slide",
        rewind: true,
        gap: "1rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true,
    };
    return (
        <>
            <div
                className="container max-w-cu flex justify-center text-black flex-col items-center"
                id="gallery"
            >
                <ScrollAnimation
                    delay={200}
                    initiallyVisible={false}
                    animateIn="fadeIn"
                    animateOnce={true}
                >
                    <h1 className="text-4xl text-center playball-regular mt-5">
                        Gallery
                    </h1>
                </ScrollAnimation>

                <div className="image-upper flex justify-center flex-wrap gap-1 mt-10">
                    <ScrollAnimation
                        delay={200}
                        initiallyVisible={false}
                        animateIn="fadeIn"
                        animateOnce={true}
                    >
                        <img
                            src={imagesUpper[0]}
                            onClick={() => handleClickUpper(0)}
                            alt=""
                            style={{
                                width: "358px",
                                height: "auto",
                            }}
                            className="p-0 "
                        />
                    </ScrollAnimation>
                    <ScrollAnimation
                        delay={200}
                        initiallyVisible={false}
                        animateIn="fadeIn"
                        animateOnce={true}
                    >
                        <div className="columns-2 gap-0 m-0">
                            {imagesUpper.map((x, i) => {
                                if (i > 0) {
                                    return (
                                        <img
                                            src={x}
                                            alt={x}
                                            className={` h-auto max-w-full rounded-lg p-1`}
                                            key={`${i}image-upper`}
                                            onClick={() => handleClickUpper(i)}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation
                    className="flex justify-center m-0"
                    delay={200}
                    animateIn="fadeIn"
                    animateOnce={true}
                >
                    <div className="wrapper mt-3 w-10/12  mb-10">
                        <Splide
                            options={options}
                            aria-label="Gallery-splide"
                            hasTrack={false}
                        >
                            <div style={{ position: "relative" }}>
                                <SplideTrack>
                                    {images.map((x, i) => (
                                        <SplideSlide key={`${x}splideslide`}>
                                            <img
                                                src={x}
                                                alt={x}
                                                onClick={() => handleClick(i)}
                                            />
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </div>

                            {/* <div className="splide__progress">
                            <div className="splide__progress__bar" />
                        </div> */}
                        </Splide>
                    </div>
                </ScrollAnimation>

                {isOpenUp && (
                    <Lightbox
                        mainSrc={imagesUpper[photoIndex]}
                        nextSrc={
                            imagesUpper[(photoIndex + 1) % imagesUpper.length]
                        }
                        prevSrc={
                            imagesUpper[
                                (photoIndex + imagesUpper.length - 1) %
                                    imagesUpper.length
                            ]
                        }
                        onCloseRequest={() => setIsOpenUp(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + imagesUpper.length - 1) %
                                    imagesUpper.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % imagesUpper.length)
                        }
                    />
                )}
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                            images[
                                (photoIndex + images.length - 1) % images.length
                            ]
                        }
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + images.length - 1) % images.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>
        </>
    );
}
