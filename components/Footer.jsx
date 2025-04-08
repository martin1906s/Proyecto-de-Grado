'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Componente para los enlaces del footer
const FooterLink = ({ href, text }) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(pathname === href); // Calculamos el estado activo solo en el cliente
    }, [pathname, href]);

    return (
        <Link
            href={href}
            className={`footer-link ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {text}
        </Link>
    );
};

// Componente principal del Footer
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <FooterLink href="/terms" text="Términos y Condiciones" />
                    <FooterLink href="/privacy" text="Política de Privacidad" />
                </nav>
                <p className="footer-copyright">
                    © {currentYear} NeuroGame. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}