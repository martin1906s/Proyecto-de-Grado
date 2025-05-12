import Image from "next/image";

const integrantes = [
    {
        nombre: "Simbaña Martín",
        rol: "Creador del videojuego y página web",
        link: "https://martinsimbana.vercel.app/",
        img: "/img/colaboradores/dev.jpg"
    },
    {
        nombre: "Pasaco Damessis",
        rol: "Líder del Proyecto",
        img: "/img/colaboradores/anonimo.jpg"
    },
    {
        nombre: "Espín Sebastian",
        rol: "Creador de la idea del videojuego",
        img: "/img/colaboradores/anonimo.jpg"
    }
];

export default function About() {
    return (
        <div className="about">
            <h2>Acerca de NeuroGame</h2>
            <p>
                Nuestro proyecto tiene como propósito contribuir como parte de nuestro trabajo de grado. Su finalidad es contribuir al proceso de rehabilitación cognitiva de personas que presentan lesiones o dificultades cognitivas. Este videojuego ha sido diseñado con un enfoque terapéutico y de entretenimiento, integrando actividades motrices que estimulan el movimiento y la coordinación de la mano del usuario. A través de ejercicios interactivos y dinámicos, NeuroGame busca apoyar el desarrollo de habilidades cognitivas y motoras, ofreciendo una herramienta accesible, motivadora y efectiva en el contexto de la terapia ocupacional y la neurorehabilitación.
            </p>
            <h3>Colaboradores</h3>
            <p>
                NeuroGame fue realizado gracias a la colaboración de:
            </p>
            <div className="colaboradores">
                {integrantes.map((integrante, index) => (
                    <div key={index} className="integrante">
                        <Image
                            src={integrante.img}
                            alt={integrante.nombre}
                            width={120}
                            height={120}
                            style={{ backgroundColor: "white" }}
                            className="integrante-img"
                        />
                        <h3>{integrante.nombre}</h3>
                        <p>{integrante.rol}</p>
                        {integrante.link && (
                            <button className="integrante-button">
                                <a href={integrante.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black", fontSize: "16px" }}>
                                    Ver más
                                </a>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
