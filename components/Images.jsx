import Image from "next/image";

const imagenes = [
    { src: "/img/isotipo.svg", alt: "Imagen 1" },
    { src: "/img/isotipo.svg", alt: "Imagen 2" },
    { src: "/img/isotipo.svg", alt: "Imagen 3" },
    { src: "/img/isotipo.svg", alt: "Imagen 4" },
    { src: "/img/isotipo.svg", alt: "Imagen 5" },
]
export default function Images() {
    return (
        <div className="images">
            <h2>Imagenes</h2>
            {imagenes.map((imagen, index) => (
                <Image
                    key={index}
                    src={imagen.src}
                    alt={imagen.alt}
                    width={300}
                    height={300}
                />
            ))}
        </div>
    );
}