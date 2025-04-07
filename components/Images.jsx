"use client"
import { useState, useRef } from "react";
import Image from "next/image";

const imagenes = [
    { src: "/img/isotipo.svg", alt: "Imagen 1" },
    { src: "/img/isotipo.svg", alt: "Imagen 2" },
    { src: "/img/isotipo.svg", alt: "Imagen 3" },
    { src: "/img/isotipo.svg", alt: "Imagen 4" },
    { src: "/img/isotipo.svg", alt: "Imagen 5" },
];

export default function Images() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef(null);

    const openModal = (img) => {
        setSelectedImage(img);
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Bloquear scroll
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto'; // Restaurar scroll
    };

    // Cerrar al hacer clic fuera
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <div className="images-container">
            <h2>Imágenes</h2>
            <div className="carousel">
                {imagenes.map((imagen, index) => (
                    <div 
                        key={index} 
                        className="carousel-item"
                        onClick={() => openModal(imagen)}
                    >
                        <Image
                            src={imagen.src}
                            alt={imagen.alt}
                            width={200}
                            height={200}
                            className="carousel-image"
                        />
                    </div>
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
        </div>
    );
}