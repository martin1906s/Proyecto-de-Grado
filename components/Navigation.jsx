"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
    { href: "/", label: "Inicio" },
    { href: "/images", label: "Imágenes" },
    { href: "/downloads", label: "Descargas" },
    { href: "/support", label: "Soporte" },
    { href: "/about", label: "Acerca de" },
];

// Componente para los enlaces de navegación
const NavLink = ({ href, label, onClick }) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(pathname === href); // Calculamos el estado activo solo en el cliente
    }, [pathname, href]);

    return (
        <li className="nav-item">
            <Link
                href={href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={onClick}
                aria-current={isActive ? 'page' : undefined}
            >
                {label}
            </Link>
        </li>
    );
};

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isOpen}
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        href={link.href}
                        label={link.label}
                        onClick={closeMenu}
                    />
                ))}
            </ul>

            <div
                className={`menu-overlay ${isOpen ? 'active' : ''}`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
                tabIndex={isOpen ? 0 : -1}
            />
        </nav>
    );
}