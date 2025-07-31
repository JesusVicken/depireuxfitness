'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const phrases = [
    "Movimente-se Comigo",
    "Fortaleça seu corpo e sua mente",
    "Transforme sua rotina com movimento",
    "Cuide do seu bem-estar todos os dias",
]

export default function Projects() {
    const [index, setIndex] = useState(0)
    const phraseRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length)
        }, 4000) // Troca a cada 4 segundos

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!phraseRef.current) return

        // Garantir opacidade inicial total e sem filtro
        gsap.set(phraseRef.current, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: 'brightness(1)',
        })

        const ctx = gsap.context(() => {
            gsap.to(phraseRef.current, {
                y: -80,
                autoAlpha: 0,
                scale: 0.9,
                rotate: 3,
                filter: 'brightness(0.5)',
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: phraseRef.current,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true, // descomente para debug visual
                },
            })
        }, phraseRef)

        return () => ctx.revert()
    }, [])

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

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 px-4 space-y-8">
                <div ref={phraseRef} className="w-full max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold text-center px-4 leading-tight"
                        >
                            {phrases[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Botão WhatsApp */}
                <div
                    className="mt-2 animate-bounce hover:animate-none transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="https://wa.me/556195982423?text=Olá%20Cristiano.%20Queria%20saber%20mais%20informações%20sobre%20seu%20trabalho."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 text-lg font-medium"
                        aria-label="Entrar em contato no WhatsApp"
                    >
                        <WhatsappLogo weight="fill" className="w-7 h-7" />
                        <span>Entrar em contato</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
