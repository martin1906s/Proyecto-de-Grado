'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Support() {
    const [message, setMessage] = useState('');
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!message.trim() || !selectedMethod) return;

        if (selectedMethod === 'gmail') {
            const subject = "Soporte NeuroGame";
            const body = `Hola NeuroGame\n\nNecesito Soporte\n\n${message}`;
            const mailtoLink = `mailto:martin.simbana007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        } else if (selectedMethod === 'whatsapp') {
            const whatsappText = `Hola NeuroGame%0ANecesito Soporte%0A%0A${encodeURIComponent(message)}`;
            const whatsappLink = `https://wa.me/593983331900?text=${whatsappText}`;
            window.open(whatsappLink, '_blank');
        }

        setIsSubmitted(true);
        setMessage('');
        setTimeout(() => {
            setIsSubmitted(false);
            setSelectedMethod(null);
        }, 3000);
    };

    return (
        <section className="support">
            <div className="support-container">
                <h2 className="support-title">Soporte</h2>

                <nav className="support-links">
                    <Link href="/support/faq" className="support-link">FAQ</Link>
                    <Link href="/support/contact" className="support-link">Contacto</Link>
                </nav>

                <form onSubmit={handleSubmit} className="support-form">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe aquí tu problema o consulta..."
                        className="input-message"
                        rows={5}
                        required
                    />

                    <div className="method-selection">
                        <h3>Selecciona método de envío:</h3>
                        <div className="method-options">
                            <label className={`method-option ${selectedMethod === 'gmail' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="method"
                                    checked={selectedMethod === 'gmail'}
                                    onChange={() => setSelectedMethod('gmail')}
                                />
                                <Image src="/img/gmail.svg" alt="Gmail" width={32} height={32} />
                                <span>Enviar por Gmail</span>
                            </label>

                            <label className={`method-option ${selectedMethod === 'whatsapp' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="method"
                                    checked={selectedMethod === 'whatsapp'}
                                    onChange={() => setSelectedMethod('whatsapp')}
                                />
                                <Image src="/img/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
                                <span>Enviar por WhatsApp</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-send"
                        disabled={!message.trim() || !selectedMethod}
                    >
                        Enviar Mensaje
                    </button>

                    {isSubmitted && (
                        <div className="confirmation-message">
                            {selectedMethod === 'gmail' ? "Redirigiendo a Gmail..." : "Abriendo WhatsApp..."}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}