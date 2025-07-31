import Image from "next/image"
import cpp1 from "../../../public/bg-cris.jpeg"
import cpp2 from "../../../public/cpp2.jpeg"
import { Check } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-white py-16 text-black">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Bloco de Imagens */}
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src={cpp1}
                                alt="Cristiano treinando no Lago"
                                fill
                                quality={100}
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-2xl overflow-hidden shadow-xl bg-white">
                            <Image
                                src={cpp2}
                                alt="Cristiano na canoa havaiana"
                                fill
                                quality={100}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Bloco de Texto */}
                    <div className="space-y-6 mt-10 lg:mt-0" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-gray-900">SOBRE MIM</h2>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Olá! Eu sou o Cristiano Depireux. Sou treinador físico e atleta, apaixonado por ajudar pessoas a encontrarem equilíbrio, saúde e performance através do movimento.
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Com mais de 10 anos de experiência em modalidades como musculação, calistenia, yoga, mobilidade e canoa havaiana, crio treinos personalizados que combinam técnicas modernas e tradicionais para você evoluir no seu ritmo.
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            Ofereço aulas presenciais e online, para iniciantes ou avançados, sempre com foco em consciência corporal, leveza e resultado real. Quero te ajudar a melhorar sua mobilidade, ganhar força, conexão com o corpo e, claro, se divertir no processo!
                        </p>

                        <ul className="space-y-4 text-sm md:text-base">
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Mobilidade, yoga e calistenia para o corpo e mente
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Treinos focados em performance para esportes e vida ativa
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Um trabalho com propósito, leveza e evolução contínua
                            </li>
                        </ul>

                        <p className="text-gray-700">
                            Quer saber mais ou agendar sua <strong>aula experimental gratuita</strong>? Me chama no WhatsApp que vamos juntos nessa jornada!
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                target="_blank"
                                href={`https://wa.me/556195982423?text=Olá Cristiano! Gostaria de agendar uma aula experimental personalizada.`}
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md hover:bg-green-700 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Contato comigo
                            </a>

                            <a
                                target="_blank"
                                href={`https://wa.me/55556195982423?text=Olá Cristiano! Quero entrar no grupo de treinos ou saber mais sobre seu trabalho.`}
                                className="flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Grupo de Treinos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
