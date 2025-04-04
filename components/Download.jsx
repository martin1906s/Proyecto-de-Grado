import Image from "next/image";
const Descargas = [
    { Logo:"/img/isotipo.svg",Nombre:"NeuroGame.apk",Version:"1.0.0",Tipo:"Android",Fecha:"04/04/2025" },
    { Logo:"/img/isotipo.svg",Nombre:"NeuroGame.exe",Version:"1.0.0",Tipo:"Microsoft",Fecha:"04/04/2025" },
]
export default function Download() {
    return (
        <div className="images">
            <h2>Descargas</h2>
            {Descargas.map((descarga, index) => (
                <div key={index}>
                    <Image
                        src={descarga.Logo}
                        alt="Logo"
                        width={300}
                        height={300}
                    />
                    <p>{descarga.Nombre}</p>
                    <p>{descarga.Version}</p>
                    <p>{descarga.Tipo}</p>
                    <p>{descarga.Fecha}</p>
                    <button className="btn-download">Descargar</button>
                </div>
            ))}
        </div>
    );
}