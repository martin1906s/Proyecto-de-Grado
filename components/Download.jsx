import Image from "next/image";

const Descargas = [
    { Logo:"/img/isotipo.svg",Nombre:"NeuroGame.apk",Version:"1.0.0",Tipo:"Android",Fecha:"04/04/2025" },
    { Logo:"/img/isotipo.svg",Nombre:"NeuroGame.exe",Version:"1.0.0",Tipo:"Microsoft",Fecha:"04/04/2025" },
];

export default function Download() {
    return (
        <div className="download-section">
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
                                        <span>Tipo:</span><span>{descarga.Tipo}</span>
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