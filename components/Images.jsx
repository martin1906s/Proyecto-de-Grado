'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const imagenes = [
    { src: "/img/gmail.svg", alt: "Imagen 1" },
    { src: "/img/isotipo.svg", alt: "Imagen 2" },
    { src: "/img/whatsapp.svg", alt: "Imagen 3" },
    { src: "/img/isotipo.svg", alt: "Imagen 4" },
    { src: "/img/isotipo.svg", alt: "Imagen 5" },
];

export default function Images() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const carouselRef = useRef(null);
    const modalRef = useRef(null);
    const transitionTimeout = useRef(null);

    // Clonamos las imágenes al principio y al final para efecto infinito
    const clonedImages = [...imagenes, ...imagenes, ...imagenes];

    // Manejar el fin de la transición
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleTransitionEnd = () => {
            // Si estamos en las imágenes clonadas al final, saltamos sin animación al inicio
            if (currentIndex >= imagenes.length * 2) {
                setIsTransitioning(false);
                setCurrentIndex(imagenes.length);
            }
            // Si estamos en las imágenes clonadas al principio, saltamos sin animación al final
            else if (currentIndex < 0) {
                setIsTransitioning(false);
                setCurrentIndex(imagenes.length - 1);
            }
        };

        carousel.addEventListener('transitionend', handleTransitionEnd);
        return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
    }, [currentIndex]);

    // Restablecer la transición después del salto
    useEffect(() => {
        if (!isTransitioning) {
            transitionTimeout.current = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }

        return () => {
            if (transitionTimeout.current) {
                clearTimeout(transitionTimeout.current);
            }
        };
    }, [isTransitioning]);

    // Touch events para móvil
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const difference = touchStartX.current - touchEndX.current;
        if (difference > 5) {
            setCurrentIndex(prev => prev + 1);
        } else if (difference < -5) {
            setCurrentIndex(prev => prev - 1);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Modal functions
    const openModal = (img) => {
        setSelectedImage(img);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    // Flechas del teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && modalOpen) {
                closeModal();
            }
            if (!modalOpen) {
                if (e.key === 'ArrowRight') setCurrentIndex(prev => prev + 1);
                if (e.key === 'ArrowLeft') setCurrentIndex(prev => prev - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen]);

    // Índice real para indicadores
    const realIndex = ((currentIndex % imagenes.length) + imagenes.length) % imagenes.length;

    return (
        <div className="images-container">
            <h2>Imágenes</h2>
            <div
                className="carousel-wrapper"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="carousel"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / imagenes.length)}%)`,
                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                    }}
                >
                    {clonedImages.map((imagen, index) => (
                        <div
                            key={`${imagen.alt}-${index}`}
                            className="carousel-item"
                            style={{ width: `${100 / imagenes.length}%`, padding: '0 5px' }} 
                            onClick={() => openModal(imagenes[index % imagenes.length])}
                        >
                            <Image
                                src={imagen.src}
                                alt={imagen.alt}
                                width={200}
                                height={200}
                                className="carousel-image"
                                priority={index === currentIndex + imagenes.length}
                            />
                        </div>
                    ))}
                </div>

                {/* Flechas de navegación */}
                <button
                    className="carousel-arrow left"
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    aria-label="Imagen anterior"
                >
                    &lt;
                </button>
                <button
                    className="carousel-arrow right"
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    aria-label="Imagen siguiente"
                >
                    &gt;
                </button>
            </div>

            {/* Indicadores */}
            <div className="carousel-indicators">
                {imagenes.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${index === realIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index + imagenes.length)}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="modal-overlay"
                    onClick={handleClickOutside}
                >
                    <div className="modal-content" ref={modalRef}>
                        <button
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Cerrar modal"
                        >
                            &times;
                        </button>
                        <div className="modal-image-container">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={800}
                                height={600}
                                className="modal-image"
                            />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .carousel-item {
                    padding: 0 5px; /* Reduje el padding horizontal */
                }
                
                .carousel-image {
                    margin: 0 auto;
                    max-width: 90%; /* Ajusté el ancho máximo */
                }
                
                @media (min-width: 768px) {
                    .carousel-item {
                        padding: 0 8px; /* Ajuste para tablet */
                    }
                }
            `}</style>
        </div>
    );
}