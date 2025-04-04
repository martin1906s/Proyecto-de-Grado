import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <Image
                    className="logo"
                    src="/img/isotipo.svg"
                    alt="Logo NeuroGame"
                    width={100}
                    height={100}
                />
            </div>
            <div className="text-container">
                <h1>Neuro Game</h1>
                <i><p>- Rehabilita tus Habilidades -</p></i>
            </div>
        </header>
    );
}