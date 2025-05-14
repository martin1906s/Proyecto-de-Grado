"use client"
import Image from "next/image";

const Descargas = [
    { Logo: "/img/isotipo.svg", Nombre: "NeuroGame.exe", Version: "1.0.2", Dispositivo: "Windows", Fecha: "14/05/2025", Enlace: '/downloads/NeuroGame1.0.2.rar', Tamaño: "298MB" },
    { Logo: "/img/isotipo.svg", Nombre: "NeuroGame.exe", Version: "1.0.1", Dispositivo: "Windows", Fecha: "13/05/2025", Enlace: '/downloads/NeuroGame1.0.1.rar', Tamaño: "298MB" },
    { Logo: "/img/isotipo.svg", Nombre: "NeuroGame.exe", Version: "1.0.0", Dispositivo: "Windows", Fecha: "04/04/2025", Enlace: '/downloads/NeuroGame1.0.0.rar', Tamaño: "292MB" },
];

export default function Download() {
    return (
        <div className="download-section">
            <h3>Requisitos</h3>
            <p>Para descargar la aplicación, asegúrate de cumplir con los siguientes requisitos:</p>
            <ul className="requirements-list">
                <a href="https://www.microsoft.com/es-es/software-download" target="_blank"><b><li>Windows (64 bits)</li></b></a>
                <a href="https://www.python.org/ftp/python/3.9.13/python-3.9.13-amd64.exe" target="_blank"><b><li>Python 3.7 - 3.10</li></b></a>
                <b><li>Instalar las dependencias necesarias</li></b>
                <b><li>Conexión a Internet (Solo al instalar las dependencias)</li></b>
                <b><li>Cámara</li></b>
                <li>4GB RAM</li>
                <li>5GB de espacio en disco</li>
            </ul>
            <h2>Descargas</h2>
            <div className="downloads-container">
                {Descargas.map((descarga, index) => {
                    // Determinar la clase CSS basado en la extensión del archivo
                    const fileTypeClass = descarga.Nombre.endsWith('.apk')
                        ? 'apk-card'
                        : 'exe-card';

                    return (
                        <div key={index} className={`download-card ${fileTypeClass}`}>
                            <div className="card-content">
                                <div className="logo-container">
                                    <Image
                                        src={descarga.Logo}
                                        alt="Logo"
                                        width={120}
                                        height={120}
                                        className="download-logo"
                                    />
                                </div>
                                <div className="info-container">
                                    <p className="file-name">{descarga.Nombre}</p>
                                    <div className="details-grid">
                                        <span>Versión:</span><span>{descarga.Version}</span>
                                        <span>Dispositivo:</span><span>{descarga.Dispositivo}</span>
                                        <span>Fecha:</span><span>{descarga.Fecha}</span>
                                        <span>Tamaño:</span><span>{descarga.Tamaño}</span>
                                    </div>
                                </div>
                            </div>
                            <a href={descarga.Enlace} download className="btn-download">
                                <button className="btn-download">Descargar</button>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}