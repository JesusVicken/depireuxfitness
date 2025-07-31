'use client'

import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

import cppLogo from '../../../public/cpp.jpeg'
import ascadeLogo from '../../../public/logo-ascade.png'
import filhooosLogo from '../../../public/filhooos.jpg'
import canoMAMALogo from '../../../public/canoMAMAlogo.png'

const partners = [
  { name: 'CPP Extreme', logo: cppLogo },
  { name: 'Ascade', logo: ascadeLogo },
  { name: 'Filhooos', logo: filhooosLogo },
  { name: 'CanoMAMA', logo: canoMAMALogo },
]

export function Footer() {
  const whatsappNumber = '556195982423'
  const whatsappMessage =
    'Olá Cristiano! Gostaria de mais informações sobre suas aulas e experiências!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* PARCEIROS */}
        <div
          className="border-b border-white/20 pb-10 mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Parceiros
          </h4>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-xl flex items-center justify-center shadow-md w-[140px] h-[80px] sm:w-[160px] sm:h-[90px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill={false}
                  className="object-contain max-w-full max-h-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          {/* SOBRE */}
          <div data-aos="fade-up-left">
            <h3 className="text-2xl font-semibold mb-3">Cristiano Depireux</h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Transformando vidas por meio do treinamento funcional, musculação personalizada e hábitos saudáveis para corpo e mente.
            </p>
            <a
              href={whatsappLink}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md font-semibold text-sm transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={20} weight="fill" />
              Fale com Cristiano
            </a>
          </div>

          {/* CONTATOS */}
          <div data-aos="flip-up">
            <h3 className="text-2xl font-semibold mb-3">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +55 61 9598-2423</li>
              <li>📍 Local: ASCAPE - Brasília, DF</li>
              <li>⏰ Horários sob agendamento</li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div data-aos="fade-up-right">
            <h3 className="text-2xl font-semibold mb-3">Redes Sociais</h3>
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.facebook.com/cristiano.depireux.7?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FacebookLogo size={30} />
              </a>
              <a
                href="https://www.instagram.com/cristianodepireux/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <InstagramLogo size={30} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <YoutubeLogo size={30} />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* MAPA */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] border-t border-white/10">
        <iframe
          title="Localização Cristiano Depireux na Ascade"
          src="https://www.google.com/maps?q=Ascade+-+Associação+dos+Servidores+da+Câmara+dos+Deputados,+Brasília+-+DF&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
