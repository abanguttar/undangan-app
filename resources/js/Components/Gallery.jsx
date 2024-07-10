import Lightbox from "@seafile/react-image-lightbox";
import "@seafile/react-image-lightbox/style.css";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function Gallery({ sectionRefs }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const images = [
        "/cache/1.jpg",
        "/cache/2.jpg",
        "/cache/3.jpg",
        "/cache/4.jpg",
        "/cache/5.png",
        "/cache/6.jpg",
    ];

    const handleClick = (i) => {
        setPhotoIndex(i);
        setIsOpen(true);
    };
    return (
        <>
            <div
                ref={(el) => (sectionRefs.current[5] = el)}
                className="container-sm max-w-sm flex justify-center flex-col"
                id="gallery"
            >
                <h1 className="text-4xl text-center playball-regular mt-5">
                    Gallery
                </h1>
                <figure className="flex justify-center flex-col items-center gap-4 mt-10">
                    {images.map((x, i) => (
                        <ScrollAnimation
                            key={i}
                            animateIn="flipInX"
                            animateOut="fadeIn"
                            initiallyVisible={false}
                            delay={500}
                            className="flex justify-center items-center"
                        >
                            <img
                                key={i}
                                src={x}
                                className="w-11/12 border-4 border-amber-900 rounded-lg cursor-pointer transition-transform duration-700 ease-in-out transform hover:scale-110 "
                                onClick={() => handleClick(i)}
                                alt=""
                            />
                        </ScrollAnimation>
                    ))}
                </figure>
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
