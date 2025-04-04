"use client"; // Agrega esta línea al inicio del archivo

import Link from 'next/link';
import { useState } from 'react';

const links = [
    { href: "/", label: "Inicio" },
    { href: "/images", label: "Imagenes" },
    { href: "/downloads", label: "Descarga" },
    { href: "/support", label: "Soporte" },
    { href: "/about", label: "Acerca De" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navigation">
            <button 
                className="hamburger" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
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