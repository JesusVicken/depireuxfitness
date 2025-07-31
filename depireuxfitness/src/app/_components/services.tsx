"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import AOS from "aos"

const certificates = [
    {
        title: "Certificado de Instrutor Oficial - Canoa Havaiana",
        file: "/cer1.jpg",
    },
    {
        title: "Certificado de Primeiros Socorros",
        file: "/cer2.jpg",
    },
    {
        title: "Certificado de Condutor de Turismo Náutico",
        file: "/cer3.jpg",
    },
    {
        title: "Certificado de Educação Física",
        file: "/cer4.jpg",
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: "trimSnaps"
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        })
    }, [])

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Certificados Profissionais
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Confira abaixo alguns dos certificados que comprovam a experiência e qualificação do Cristiano.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-white border border-gray-200 rounded-2xl p-5 h-full flex flex-col space-y-4 shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 bg-gray-100 rounded-xl">
                                                <FileText className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {cert.title}
                                            </h3>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-gray-200">
                                            <a
                                                href={cert.file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                                            >
                                                Ver Certificado
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navegação (Desktop) */}
                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-gray-100 w-10 h-10 rounded-full shadow-md transition-all border border-gray-200"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-gray-100 w-10 h-10 rounded-full shadow-md transition-all border border-gray-200"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* Navegação (Mobile) */}
                <div className="flex justify-center mt-8 gap-3 sm:hidden">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-md border border-gray-200"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-md border border-gray-200"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    )
}
