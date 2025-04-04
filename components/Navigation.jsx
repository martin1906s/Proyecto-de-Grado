import Link from 'next/link';

const links = [
    { href: "/", label: "Inicio" },
    { href: "/images", label: "Imagenes" },
    { href: "/downloads", label: "Descarga" },
    { href: "/support", label: "Soporte" },
    { href: "/about", label: "Acerca De" },
];


export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                {links.map((link, index) => (
                    <li key={index} className="nav-item">
                        <Link href={link.href} className="nav-link">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}