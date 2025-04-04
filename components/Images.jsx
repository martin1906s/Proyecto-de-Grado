"use client"; // Agrega esta línea al inicio del archivo

import Image from "next/image";
import { useEffect, useRef } from "react";

const imagenes = [
    { src: "/img/isotipo.svg", alt: "Imagen 1" },
    { src: "/img/isotipo.svg", alt: "Imagen 2" },
    { src: "/img/isotipo.svg", alt: "Imagen 3" },
    { src: "/img/isotipo.svg", alt: "Imagen 4" },
    { src: "/img/isotipo.svg", alt: "Imagen 5" },
];

export default function InfiniteScrollImages() {
    const scrollContainerRef = useRef(null);
    const clonedImages = [...imagenes, ...imagenes, ...imagenes]; // Triplicamos las imágenes

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let animationFrameId;
        let scrollPosition = 0;
        const speed = 1; // Ajusta la velocidad del scroll

        const scroll = () => {
            scrollPosition += speed;
            if (scrollPosition >= scrollContainer.scrollWidth / 3) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="images-container">
            <h2 className="images-title">Imágenes</h2>
            <div 
                className="images-scroll-container" 
                ref={scrollContainerRef}
            >
                {clonedImages.map((imagen, index) => (
                    <div key={index} className="image-wrapper">
                        <Image
                            src={imagen.src}
                            alt={imagen.alt}
                            width={300}
                            height={300}
                            className="scroll-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}