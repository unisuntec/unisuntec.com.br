import UnisuntecLogo from "@/src/assets/unisuntec.jpg"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import {
  ArrowUp,
  ChevronRight,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Settings,
  Sparkles,
  PhoneIcon as WhatsApp,
  Wrench
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { MobileMenu, TestimonialCarousel } from "./client"

// Tipos
export interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface LinkItem {
  name: string
  href: string
}

// Componente ServiceCard incorporado
 function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8860b]/20 text-[#b8860b] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  )
}





export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={UnisuntecLogo}
              alt="Unisuntec Service Logo"
              width={120}
              height={50}
              className="h-10 w-auto rounded-lg"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { name: "Sobre", href: "#sobre" },
              { name: "Serviços", href: "#servicos" },
              { name: "Depoimentos", href: "#depoimentos" },
              { name: "Contato", href: "#contato" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#b8860b]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+5521982184621"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#b8860b]"
            >
              <Phone className="h-4 w-4" />
              Atendimento 24h
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521982184621&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 gap-2 bg-[#b8860b] hover:bg-[#a67c0b] text-white rounded-md text-sm font-medium transition-colors"
            >
              <WhatsApp className="mr-2 h-4 w-4" />
              Solicitar Orçamento
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  <span className="text-[#b8860b]">TECNOLOGIA</span> QUE NÃO PARA!
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                  Realizamos modernizações, manutenções, reparos e outros serviços para elevadores com excelência e
                  compromisso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=5521982184621&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 gap-2 bg-[#b8860b] hover:bg-[#a67c0b] text-white rounded-md text-base font-medium transition-colors"
                  >
                    Solicitar Orçamento
                    <WhatsApp className="ml-2 h-4 w-4" />
                  </a>
                  <Link href="#servicos" passHref>
                    <Button size="lg" variant="outline" className="border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b]/10">
                      Nossos Serviços
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-[#b8860b]" />
                  <span>Atendimento 24 horas para chamados de emergência</span>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                  alt="Técnico consertando elevador"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg object-cover h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferecemos soluções completas para elevadores, desde a instalação até a manutenção preventiva e
                corretiva.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<ArrowUp />}
                title="Instalação de Elevadores"
                description="Instalação profissional de elevadores residenciais e comerciais com as melhores tecnologias do mercado."
              />
              <ServiceCard
                icon={<Settings />}
                title="Manutenção Preventiva"
                description="Serviços de manutenção preventiva para garantir o funcionamento seguro e eficiente do seu elevador."
              />
              <ServiceCard
                icon={<Wrench />}
                title="Reparos e Correções"
                description="Reparos rápidos e eficientes para resolver problemas e evitar paradas prolongadas."
              />
              <ServiceCard
                icon={<Sparkles />}
                title="Modernizações"
                description="Atualize seu elevador com as mais recentes tecnologias para melhorar desempenho, segurança e eficiência energética."
              />
              <ServiceCard
                icon={<Clock />}
                title="Atendimento 24 Horas"
                description="Serviço de emergência disponível 24 horas por dia para atender chamados em condomínios."
              />
              <ServiceCard
                icon={<Settings />}
                title="Instalação de Geradores"
                description="Instalação de geradores para garantir o funcionamento do elevador mesmo durante quedas de energia."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-80 md:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                  alt="Equipe técnica capacitada trabalhando em elevador"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg object-cover h-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Experiência e Qualidade desde 1999</h2>
                <p className="text-gray-600">
                  A Unisuntec Service conta com profissionais capacitados que trabalham no ramo de elevadores desde
                  1999, oferecendo soluções completas e de alta qualidade para nossos clientes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Equipe técnica altamente qualificada",
                    "Mais de 20 anos de experiência no mercado",
                    "Atendimento personalizado e ágil",
                    "Compromisso com a segurança e qualidade",
                    "Peças e componentes de primeira linha",
                  ].map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-[#b8860b]/20 p-1">
                        <ChevronRight className="h-3 w-3 text-[#b8860b]" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#b8860b]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Atendimento 24 Horas para Emergências</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Estamos disponíveis 24 horas por dia, 7 dias por semana para atender chamados de emergência em elevadores
              de condomínios.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+5521982184621" className="inline-flex items-center justify-center gap-2 bg-white text-[#b8860b] hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg transition-colors">
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5521982184621?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Unisuntec."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-3 rounded-md font-medium text-lg transition-colors shadow-lg"
              >
                <WhatsApp className="h-5 w-5" />
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Veja o que nossos clientes têm a dizer sobre nossos serviços de elevadores.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estamos prontos para atender suas necessidades. Entre em contato conosco para solicitar um orçamento ou
                tirar dúvidas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Canal WhatsApp */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="bg-[#25D366]/10 p-4 rounded-full mb-4">
                  <WhatsApp className="h-8 w-8 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Resposta em até 30 minutos</p>
                <a
                  href="https://wa.me/5521982184621?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Unisuntec."
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#128C7E] transition-colors"
                >
                  <WhatsApp className="h-4 w-4" />
                  Falar pelo WhatsApp
                </a>
                <p className="mt-3 text-sm text-gray-500">(21) 98218-4621</p>
              </div>

              {/* Canal Telefone */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="bg-[#b8860b]/10 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-[#b8860b]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">Atendimento 24 horas</p>
                <a
                  href="tel:+5521982184621"
                  className="inline-flex items-center gap-2 bg-[#b8860b] text-white px-4 py-2 rounded-md hover:bg-[#a67c0b] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Ligar Agora
                </a>
                <p className="mt-3 text-sm text-gray-500">(21) 98218-4621</p>
              </div>

              {/* Canal Email */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="bg-[#b8860b]/10 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-[#b8860b]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Resposta em até 24 horas</p>
                <a
                  href="mailto:unisuntec@gmail.com"
                  className="inline-flex items-center gap-2 bg-[#b8860b] text-white px-4 py-2 rounded-md hover:bg-[#a67c0b] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Enviar Email
                </a>
                <p className="mt-3 text-sm text-gray-500">unisuntec@gmail.com</p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Localização */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Nossa Localização</h3>
                <div className="rounded-md overflow-hidden border border-gray-200 h-[250px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3112401552245!2d-43.05523372516954!3d-22.821191384066933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999b0415f19bd3%3A0xaf72b7c580cc1e53!2sR.%20S%C3%A1%20Carvalho%2C%201261%20-%20Centro%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024440-710!5e0!3m2!1spt-BR!2sbr!4v1709821234567!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Unisuntec Service"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-sm text-gray-600">Av. Sá Carvalho, 1261 - Centro, São Gonçalo - RJ, 24440-710</p>
                  <a
                    href="https://g.co/kgs/pb8QjuK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b8860b] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    <span>Ver no Google Maps</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Segunda a Sexta</span>
                    <span className="font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Sábado, Domingo e Feriados</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                  <div className="flex justify-between items-center py-2 mt-2">
                    <span className="font-medium text-[#b8860b]">Emergências</span>
                    <span className="font-bold text-[#b8860b] bg-[#b8860b]/10 px-3 py-1 rounded-full">24 horas</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/unisuntec"
                    target="_blank"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#b8860b] hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5521982184621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-[#b8860b] hover:text-white transition-colors"
                  >
                    <WhatsApp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <Image
                src={UnisuntecLogo}
                alt="Unisuntec Service Logo"
                width={150}
                height={60}
                className="h-12 w-auto mb-4 brightness-200"
              />
              <p className="text-gray-400 mt-4 max-w-xs">
                TECNOLOGIA QUE NÃO PARA! Realizamos modernizações, manutenções, reparos e outros serviços.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {[
                  "Instalação de Elevadores",
                  "Manutenção Preventiva",
                  "Reparos e Correções",
                  "Modernizações",
                  "Instalação de Geradores",
                  "Embelezamento",
                ].map((service: string, index: number) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { name: "Serviços", href: "#servicos" },
                  { name: "Sobre Nós", href: "#sobre" },
                  { name: "Depoimentos", href: "#depoimentos" },
                  { name: "Contato", href: "#contato" },
                ].map((link: LinkItem, index: number) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">(21) 98218-4621</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">unisuntec@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Rio de Janeiro, RJ - Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Atendimento 24 horas</span>
                </li>
              </ul>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/unisuntec"
                  target="_blank"
                  className="rounded-full p-2 text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5521982184621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-gray-400 hover:text-[#b8860b] transition-colors"
                >
                  <WhatsApp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p> {new Date().getFullYear()} Unisuntec Service. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
