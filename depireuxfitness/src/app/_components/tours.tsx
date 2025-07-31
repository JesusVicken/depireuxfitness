"use client"

import useEmblaCarousel from "embla-carousel-react"
import {
    ChevronLeft,
    ChevronRight,
    Clock,
    Users,
    Mountain,
    Handshake,
    Sunrise,
    Moon,
    Dumbbell
} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import treinoPresencial from "../../../public/cris1.jpeg"
import treinoOnline from "../../../public/cris2.jpeg"
import canoaHavaiana from "../../../public/123.jpeg"
import mobilidade from "../../../public/cris4.jpg"
import musculacao from "../../../public/cris6.jpg"

import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const services = [
    {
        title: "Treinos Presenciais Personalizados",
        description: "Aulas focadas na sua evolução física com acompanhamento individual. Ideal para quem quer ganhar força, mobilidade e consciência corporal.",
        duration: "Flexível conforme sua agenda",
        icon: <Users className="w-6 h-6 text-white" />,
        linkText: "Olá Cristiano! Gostaria de mais informações sobre os treinos presenciais personalizados.",
        image: treinoPresencial
    },
    {
        title: "Treinos Online e Acompanhamento",
        description: "Treinos via vídeo com planos ajustados ao seu ritmo, para você evoluir de qualquer lugar com segurança e orientação profissional.",
        duration: "A qualquer hora, no seu ritmo",
        icon: <Handshake className="w-6 h-6 text-white" />,
        linkText: "Olá Cristiano! Quero saber como funcionam os treinos online e o acompanhamento.",
        image: treinoOnline
    },
    {
        title: "Treino para Canoa Havaiana",
        description: "Fortaleça seu corpo e melhore sua performance para remar melhor na canoa, com exercícios específicos de mobilidade e força.",
        duration: "Sessões semanais ou conforme necessidade",
        icon: <Sunrise className="w-6 h-6 text-white" />,
        linkText: "Olá Cristiano! Tenho interesse nos treinos para canoa havaiana, pode me informar mais?",
        image: canoaHavaiana
    },
    {
        title: "Mobilidade, Yoga e Alongamento",
        description: "Práticas que ajudam a liberar tensões, aumentar a flexibilidade e promover bem-estar físico e mental, com foco na qualidade de vida.",
        duration: "Sessões individuais ou em grupo",
        icon: <Moon className="w-6 h-6 text-white" />,
        linkText: "Olá Cristiano! Quero saber mais sobre mobilidade, yoga e alongamento.",
        image: mobilidade
    },
    {
        title: "Musculação e Condicionamento Físico",
        description: "Treinos focados em força, resistência e desempenho físico, com acompanhamento para melhorar sua performance e saúde geral.",
        duration: "Programação personalizada",
        icon: <Dumbbell className="w-6 h-6 text-white" />,
        linkText: "Olá Cristiano! Quero participar das atividades de musculação e condicionamento físico.",
        image: musculacao
    }

]

export function Tours() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: "trimSnaps"
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        })
    }, [])

    return (
        <section className="bg-gradient-to-b from-zinc-900 to-black py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Você está procurando o treino perfeito para você?
                    </h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto">
                        Descubra nossa gama completa de serviços de saúde e bem-estar em domicílio e no local.
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-2">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-zinc-900/80 text-white rounded-xl p-5 h-full flex flex-col space-y-4 border border-zinc-700 hover:border-zinc-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10">
                                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className={`object-cover ${item.title === "Treinos Online e Acompanhamento"
                                                        ? "object-[center_30%]"
                                                        : item.title === "Mobilidade, Yoga e Alongamento"
                                                            ? "object-[center_70%]"
                                                            : ""
                                                    }`}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex-1 flex items-start gap-3">
                                            <div className="p-2 bg-zinc-800 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg md:text-xl mb-1 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-zinc-300 text-sm select-none">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-t border-zinc-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/556195982423?text=${encodeURIComponent(item.linkText)}`}
                                                className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg transition-all text-sm font-medium hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/20"
                                            >
                                                <WhatsappLogo className="w-4 h-4" />
                                                Bora Treinar!?
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2 sm:hidden" data-aos="fade-up" data-aos-delay="100">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>
        </section>
    )
}
