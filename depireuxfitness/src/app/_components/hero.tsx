'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check } from "lucide-react"
import Cristiano from "../../../public/cris2.jpeg"
import Image from "next/image"

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá Cristiano! Vi seu site e gostaria de mais informações sobre os treinos personalizados."
  )

  return (
    <section className="bg-[#060505] text-white relative overflow-hidden">
      {/* Imagem de fundo para mobile */}
      <div>
        <Image
          src={Cristiano}
          alt='Cristiano Depireux treinando'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
          style={{ objectPosition: 'center 50%' }}
        />
        <div className='absolute inset-0 bg-black opacity-20 md:hidden'></div>
      </div>

      <div className='container mx-auto pt-16 pb-16 px-4 relative'>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

          {/* Bloco de texto */}
          <div className='space-y-6' data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold leading-10">
              Treinos personalizados com <br className="hidden md:block" />Cristiano Depireux
            </h1>

            <p className="text-lg text-gray-300">
              Aulas presenciais ou virtuais para quem busca evolução física e equilíbrio corporal.
            </p>

            {/* Tópicos divididos em colunas */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Modalidades oferecidas */}
              <div>
                <p className="text-base md:text-lg font-semibold mb-2">
                  Modalidades oferecidas:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Treino para específicos para Canoa Havaiana
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Yoga e Flow
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Alongamento e Mobilidade
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Musculação Personalizada
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Calistenia
                  </li>
                </ul>
              </div>

              {/* Indicado para quem busca... */}
              <div>
                <p className="text-base md:text-lg font-semibold mb-2">
                  Para quem busca:
                </p>
                <ul className="text-sm md:text-base space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Ganho de mobilidade e consciência corporal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Mais performance na canoa e nos esportes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    Treinos com propósito e leveza
                  </li>
                </ul>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="mt-4">
              <a
                href={`https://wa.me/5561998219177?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md hover:bg-green-700 transition"
              >
                <WhatsappLogo className='w-5 h-5' />
                Contato via WhatsApp
              </a>
            </div>

            {/* Aula experimental */}
            <div className="mt-2">
              <p className="text-sm text-gray-200">
                Agende sua <b className="bg-white text-black px-2 py-1 rounded-md">aula experimental gratuita</b>
              </p>
            </div>
          </div>

          {/* Imagem lateral para desktop */}
          <div
            className="hidden md:block relative w-full h-[400px] rounded-3xl overflow-hidden"
            data-aos="zoom-in"
          >
            <Image
              src={Cristiano}
              alt="Cristiano Depireux - Personal Trainer"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300 transition-transform"
              priority
            />
          </div>

        </article>
      </div>
    </section>
  )
}