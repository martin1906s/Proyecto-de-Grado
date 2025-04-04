import styles from "./page.module.css";
import Images from "../../components/Images";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <b>NeuroGame</b>
        </h1>
        <p>
          <b>NeuroGame</b> es un innovador videojuego diseñado para apoyar la rehabilitación de personas que han sufrido daños cerebrales o en sus manos. Su enfoque combina entretenimiento y terapia, proporcionando una experiencia inmersiva que estimula y refuerza habilidades cognitivas y motoras esenciales para la recuperación.
          A través de diversas dinámicas de juego, <b>NeuroGame</b>NeuroGame ayuda a mejorar la memoria, la coordinación, la atención y la resolución de problemas. Cada desafío está diseñado con base en principios de neuroplasticidad, permitiendo que los jugadores progresen a su propio ritmo mientras reciben retroalimentación inmediata sobre su desempeño.
          Además, su interfaz accesible y adaptable permite que personas con distintos niveles de movilidad puedan interactuar con facilidad. <b>NeuroGame</b> no solo ofrece una herramienta de rehabilitación, sino que también fomenta la motivación y la superación personal, convirtiendo el proceso de recuperación en una experiencia divertida y estimulante.</p>
        <Images />
        <Download />
      </main>
    </div>
  );
}
