"use client"
import Image from "next/image";

const Descargas = [
    { Logo: "/img/isotipo.svg", Nombre: "NeuroGame.exe", Version: "1.0.0", Dispositivo: "Windows", Fecha: "04/04/2025" },
];

export default function Download() {
    return (
        <div className="download-section">
            <h2>Descargas</h2>
            <h3>Requisitos</h3>
            <p>Para descargar la aplicación, asegúrate de cumplir con los siguientes requisitos:</p>
            <ul className="requirements-list">
                <b><li>Conexión a Internet</li></b>
                <b><li>Python 3.8 o superior</li></b>
                <b><li>Instalar los modulos necesarios</li></b>
                <b><li>Cámara</li></b>
                <b><li>Windows (64 bits)</li></b>
                <li>4GB RAM</li>
                <li>5GB de espacio en disco</li>
            </ul>
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
                                    </div>
                                </div>
                            </div>
                            <button className="btn-download">Descargar</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}