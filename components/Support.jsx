import Link from "next/link";
import Image from "next/image";
export default function Support() {
    return (
        <div className="support">
            <div>
            <h2>Soporte</h2>
            <Link href="/support/faq">FAQ</Link>
            <Link href="/support/contact">Contacto</Link>
            <h3>Email</h3>
            <Image
                src="/img/gmail.svg"
                alt="LogoDeGmail"
                width={100}
                height={100} />
            <a href="https://wa.me/593983331900?text=Hola%20quiero%20hacer%20una%20consulta">
                <Image
                    src="/img/whatsapp.svg"
                    alt="LogoDeWhatsapp"
                    width={100}
                    height={100} />
            </a>
            <input
                type="text"
                placeholder="Escribe tu insidensia"
                className="input-message"
            />
            <button className="btn-send">Enviar</button>
            </div>

        </div>
    );
}
