import Image from "next/image";
import styles from "./page.module.css";
import Images from "../../components/Images";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark" 
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <p>
          <b>NeuroGame</b> es un innovador videojuego diseñado para apoyar la rehabilitación de personas que han sufrido daños cerebrales o en sus manos. Su enfoque combina entretenimiento y terapia, proporcionando una experiencia inmersiva que estimula y refuerza habilidades cognitivas y motoras esenciales para la recuperación.
          A través de diversas dinámicas de juego, <b>NeuroGame</b>NeuroGame ayuda a mejorar la memoria, la coordinación, la atención y la resolución de problemas. Cada desafío está diseñado con base en principios de neuroplasticidad, permitiendo que los jugadores progresen a su propio ritmo mientras reciben retroalimentación inmediata sobre su desempeño.
          Además, su interfaz accesible y adaptable permite que personas con distintos niveles de movilidad puedan interactuar con facilidad. <b>NeuroGame</b> no solo ofrece una herramienta de rehabilitación, sino que también fomenta la motivación y la superación personal, convirtiendo el proceso de recuperación en una experiencia divertida y estimulante.</p>
        <Images />
      </main>
    </div>
  );
}
