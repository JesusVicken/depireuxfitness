'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function Projects() {
    return (
        <div
            className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden"
            data-aos="fade-up"
        >
            <Parallax speed={-20} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/cris1.jpeg"
                        alt="Cris Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </Parallax>

            <div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 px-4 space-y-8"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl px-4">
                    Treinamento pessoal em casa e virtual, Yoga, Flow, Calistenia, Alongamento e Mobilidade e Treinos de Canoa Havaiana
                </h2>

                {/* Botão para entrar no grupo do WhatsApp */}
                <div
                    className="mt-2 animate-bounce hover:animate-none transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="https://chat.whatsapp.com/KM0KWPFhgvH2ivlof8QndE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 text-lg font-medium"
                        aria-label="Entrar no grupo do WhatsApp"
                    >
                        <WhatsappLogo weight="fill" className="w-7 h-7" />
                        <span>Entrar em contato</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
