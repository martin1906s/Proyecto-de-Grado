'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copyright">
                    © {currentYear} NeuroGame. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}