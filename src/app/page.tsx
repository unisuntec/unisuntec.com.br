"use client"

import ElevatorImage from "@/src/assets/consertando-elevador.jpg"
import UnisuntecLogo from "@/src/assets/unisuntec.jpg"
import { Button } from "@/src/components/ui/button"

// Modernização de Cabine
import ModernizacaoCabine1Antes from "@/src/assets/modernizacao_cabine/1-antes.jpeg"
import ModernizacaoCabine1Depois from "@/src/assets/modernizacao_cabine/1-depois.jpeg"
import ModernizacaoCabine2Antes from "@/src/assets/modernizacao_cabine/2-antes.jpeg"
import ModernizacaoCabine2Depois from "@/src/assets/modernizacao_cabine/2-depois.jpeg"

// Instalação de Elevador Residencial
import InstalacaoElevadorResidencial1Antes from "@/src/assets/instalacao_elevador_residencial/1-antes.jpeg"
import InstalacaoElevadorResidencial1Depois from "@/src/assets/instalacao_elevador_residencial/1-depois.jpeg"

// Modernização de Quadro
import ModernizacaoQuadro1Antes from "@/src/assets/modernizacao_quadro/1-antes.jpeg"
import ModernizacaoQuadro1Depois from "@/src/assets/modernizacao_quadro/1-depois.jpeg"
import ModernizacaoQuadro2Antes from "@/src/assets/modernizacao_quadro/2-antes.jpeg"
import ModernizacaoQuadro2Depois from "@/src/assets/modernizacao_quadro/2-depois.jpeg"
import ModernizacaoQuadro3Antes from "@/src/assets/modernizacao_quadro/3-antes.jpeg"
import ModernizacaoQuadro3Depois from "@/src/assets/modernizacao_quadro/3-depois.jpeg"
import ModernizacaoQuadro4Antes from "@/src/assets/modernizacao_quadro/4-antes.jpeg"
import ModernizacaoQuadro4Depois from "@/src/assets/modernizacao_quadro/4-depois.jpeg"

// Modernização de Piso da Cabine
import ModernizacaoPisoCabine1Antes from "@/src/assets/modernizacao_piso_cabine/1-antes.jpeg"
import ModernizacaoPisoCabine1Depois from "@/src/assets/modernizacao_piso_cabine/1-depois.jpeg"

// Renovação de Portas
import RenovacaoPortas1Antes from "@/src/assets/renovacao_de_portas/1-antes.jpeg"
import RenovacaoPortas1Depois from "@/src/assets/renovacao_de_portas/1-depois.jpeg"
import RenovacaoPortas2Antes from "@/src/assets/renovacao_de_portas/2-antes.jpeg"
import RenovacaoPortas2Depois from "@/src/assets/renovacao_de_portas/2-depois.jpeg"

// Reparos
import Reparos1TrocaRolamento from "@/src/assets/reparos/1-troca-rolamento.jpeg"
import Reparos1TrocaRolamento2 from "@/src/assets/reparos/1-troca-rolamento-2.jpeg"
import Reparos2UsinagemEngrenagem from "@/src/assets/reparos/2-usinagem_engrenagem.jpeg"
import Reparos2UsinagemEngrenagem2 from "@/src/assets/reparos/2-usinagem_engrenagem-2.jpeg"

// Revitalização Motor Elevador
import RevitalizacaoMotorElevador from "@/src/assets/revitalizacao_motor_elevador/1-revitalizacao-motor.jpeg"
import RevitalizacaoMotorElevador2 from "@/src/assets/revitalizacao_motor_elevador/1-revitalizacao-motor-2.jpeg"
import { Card } from "@/src/components/ui/card"
import {
  ArrowUp,
  ChevronRight,
  Clock,
  Info,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Settings,
  Sparkles,
  Star,
  PhoneIcon as WhatsApp,
  Wrench,
  X
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"

// Tipos
interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

interface LinkItem {
  name: string
  href: string
}

// Componente TestimonialCard incorporado
function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow h-full">
      <div className="flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "fill-[#b8860b] text-[#b8860b]" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
        <p className="text-gray-600 mb-6 flex-grow overflow-y-auto max-h-[120px] scrollbar-thin">{content}</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  )
}

// Componente TestimonialCarousel
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      role: "Síndico de Condomínio",
      content:
        "A equipe da Unisuntec Service é extremamente profissional. Resolveram o problema do nosso elevador rapidamente e com qualidade.",
      rating: 5,
    },
    {
      name: "Maria Oliveira",
      role: "Administradora de Edifício",
      content:
        "Contratamos a modernização do elevador e ficamos muito satisfeitos com o resultado. Serviço impecável e dentro do prazo.",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      role: "Proprietário de Empresa",
      content:
        "O atendimento 24 horas realmente funciona! Tivemos uma emergência no final de semana e eles resolveram prontamente.",
      rating: 4,
    },
    {
      name: "Ana Ferreira",
      role: "Gerente Predial",
      content:
        "Excelente serviço de modernização. Transformaram nosso elevador antigo em um equipamento moderno e eficiente.",
      rating: 5,
    },
    {
      name: "Paulo Mendes",
      role: "Síndico de Condomínio",
      content:
        "Atendimento rápido e eficiente. A manutenção preventiva reduziu drasticamente os problemas com nosso elevador.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Administradora",
      content:
        "Profissionais muito capacitados e atenciosos. Sempre explicam tudo detalhadamente e resolvem os problemas com rapidez.",
      rating: 4,
    },
  ]

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Função para obter índices com lógica circular
  const getVisibleTestimonials = (): Testimonial[] => {
    const result: Testimonial[] = []
    const total: number = testimonials.length

    // Em telas grandes, mostramos 3 depoimentos
    const itemsToShow: number = 3

    for (let i = 0; i < itemsToShow; i++) {
      const index: number = (currentIndex + i) % total
      result.push(testimonials[index])
    }

    return result
  }

  // Configurar intervalo para avançar automaticamente
  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      nextSlide()
    }, 5000) // Avança a cada 5 segundos

    return () => clearInterval(interval)
  }, [currentIndex, nextSlide])

  // Adicionar estilos de animação ao head
  useEffect(() => {
    const style: HTMLStyleElement = document.createElement("style")
    style.innerHTML = `
    @keyframes testimonialPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.85; }
    }
    
    @keyframes testimonialAppear {
      from { opacity: 0; transform: scale(0.8) translateY(20px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    
    .animate-testimonial {
      animation: testimonialAppear 0.6s ease-out forwards;
    }
    
    /* Estilo para scrollbar */
    .scrollbar-thin::-webkit-scrollbar {
      width: 4px;
    }
    
    .scrollbar-thin::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0%)` }}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full auto-rows-fr">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="transform transition-all duration-700 animate-testimonial h-full"
                style={{
                  animation: `testimonialPulse 5s infinite ${index * 0.5}s`,
                }}
              >
                <div className="h-full hover:scale-[1.02] transition-transform duration-300">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controles de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10 hidden md:block transition-transform duration-300 hover:scale-110"
        aria-label="Depoimento anterior"
      >
        <ChevronRight className="h-6 w-6 text-[#b8860b] rotate-180" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none z-10 hidden md:block transition-transform duration-300 hover:scale-110"
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="h-6 w-6 text-[#b8860b]" />
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-[#b8860b]" : "w-2 bg-gray-300"
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (): void => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Delay setting menuVisible to true to allow the overlay to appear first
      setTimeout(() => setMenuVisible(true), 50)
    } else {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, toggleMenu])

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Menu de navegação"
        className="relative z-50 hover:bg-transparent"
      >
        {isOpen ? 
          <X className="h-6 w-6 text-[#b8860b]" /> : 
          <Menu className="h-6 w-6 text-[#b8860b]" />
        }
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}

      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end px-4 py-3 absolute top-0 right-0">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        
        <nav className="px-4 py-2 flex flex-col items-center bg-white pt-6">
          {[
            { name: "Sobre", href: "#sobre", icon: <Info className="h-5 w-5" /> },
            { name: "Serviços", href: "#servicos", icon: <Wrench className="h-5 w-5" /> },
            { name: "Depoimentos", href: "#depoimentos", icon: <Star className="h-5 w-5" /> },
            { name: "Contato", href: "#contato", icon: <Mail className="h-5 w-5" /> },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-3 text-lg text-gray-600 hover:text-[#b8860b] rounded-md transition-colors w-full text-center flex items-center justify-center gap-2"
              onClick={toggleMenu}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          
          <div className="my-2 w-full">
            <a
              href="tel:+5521982184621"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#b8860b] text-white rounded-md hover:bg-[#a67c0b] transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Atendimento 24h</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
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

// aqui para quando for uma selectedTransformation
// no mobile, quero que ele veja mesmo que de forma reduzida, uma forma de que a imagem no mobile ainda apareça ambas imagens, mesmo que reduzidas e uma em cima da outra

function BeforeAfterGallery() {
  // Dados das transformações (antes e depois)
  const transformations: {
    id: number
    title: string
    description: string
    beforeImage: string
    afterImage: string
    category: string
    type: "modernization" | "installation" | "repair"
  }[] = [
    {
      id: 1,
      title: "Modernização de Cabine - 1",
      description: "Modernização completa do interior da cabine com revestimento de aço escovado, remanejamento da iluminação elétrica, instalação de novo piso e iluminação LED.",
      beforeImage: ModernizacaoCabine1Antes.src,
      afterImage: ModernizacaoCabine1Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 2,
      title: "Instalação de Elevador Residencial",
      description: "Instalação completa de elevador residencial com estrutura metálica personalizada e acabamento em vidro temperado. O serviço inclui a construção do poço, montagem da estrutura de sustentação e instalação do equipamento com todos os sistemas de segurança. Solução elegante que combina funcionalidade, design moderno e valorização do imóvel.",
      beforeImage: InstalacaoElevadorResidencial1Antes.src,
      afterImage: InstalacaoElevadorResidencial1Depois.src,
      category: "Instalação",
      type: "installation"
    },
    {
      id: 3,
      title: "Modernização do Quadro de Comando do Elevador",
      description: "Modernização do quadro de comando do elevador, substituindo componentes antigos por tecnologia atual. Reorganização completa da fiação e separação adequada dos circuitos, eliminando interferências e aumentando significativamente a segurança e confiabilidade do sistema. Pode chegar até 40% de economia de energia, além de modificar a forma de abordar o sistema.",
      beforeImage: ModernizacaoQuadro1Antes.src,
      afterImage: ModernizacaoQuadro1Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 4,
      title: "Modernização de Piso da Cabine do Elevador",
      description: "Instalação de piso de granito na cabine do elevador com soleira personalizada, proporcionando um acabamento sofisticado e moderno que valoriza o ambiente e aumenta a durabilidade do equipamento.",
      beforeImage: ModernizacaoPisoCabine1Antes.src,
      afterImage: ModernizacaoPisoCabine1Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 5,
      title: "Renovação de Portas",
      description: "Pintura eletrostática das portas de pavimento, proporcionando um acabamento elegante e aumentando significativamente a durabilidade do equipamento.",
      beforeImage: RenovacaoPortas1Antes.src,
      afterImage: RenovacaoPortas1Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 6,
      title: "Troca de Rolamento de Peso",
      description: "Substituição completa do sistema de rolamentos da máquina de tração do elevador. Este procedimento de manutenção preventiva elimina ruídos indesejados, aumenta a vida útil do equipamento e garante um funcionamento mais suave e silencioso.",
      beforeImage: Reparos1TrocaRolamento.src,
      afterImage: Reparos1TrocaRolamento2.src,
      category: "Reparo",
      type: "repair"
    },
    {
      id: 7,
      title: "Usinagem da Engrenagem da Máquina de Tração",
      description: "Reparo especializado através da usinagem da engrenagem da máquina de tração do elevador. Este procedimento técnico corrige o desgaste natural e elimina folgas que poderiam comprometer o funcionamento do sistema. A manutenção preventiva desta peça crítica garante maior precisão nos movimentos, reduz vibrações, prolonga a vida útil do equipamento e assegura um transporte mais seguro e confortável.",
      beforeImage: Reparos2UsinagemEngrenagem.src,
      afterImage: Reparos2UsinagemEngrenagem2.src,
      category: "Reparo",
      type: "repair"
    },
    {
      id: 8,
      title: "Modernização de Cabine - 2",
      description: "Modernização completa do interior da cabine com acabamento premium em aço escovado e revestimento em fórmica de alta durabilidade. Inclui remanejamento completo do sistema elétrico, instalação de piso de alto tráfego e iluminação LED de baixo consumo, proporcionando ambiente mais sofisticado, seguro e eficiente energeticamente.",
      beforeImage: ModernizacaoCabine2Antes.src,
      afterImage: ModernizacaoCabine2Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 9,
      title: "Modernização do Quadro de Comando do Elevador",
      description: "Modernização do quadro de comando do elevador, substituindo componentes antigos por tecnologia atual. Reorganização completa da fiação e separação adequada dos circuitos, eliminando interferências e aumentando significativamente a segurança e confiabilidade do sistema. Pode chegar até 40% de economia de energia, além de modificar a forma de abordar o sistema.",
      beforeImage: ModernizacaoQuadro2Antes.src,
      afterImage: ModernizacaoQuadro2Depois.src,
      category: "Modernização",
      type: "modernization"
    },    
    {
      id: 10,
      title: "Modernização do Quadro de Comando do Elevador",
      description: "Modernização do quadro de comando do elevador, substituindo componentes antigos por tecnologia atual. Reorganização completa da fiação e separação adequada dos circuitos, eliminando interferências e aumentando significativamente a segurança e confiabilidade do sistema. Pode chegar até 40% de economia de energia, além de modificar a forma de abordar o sistema.",
      beforeImage: ModernizacaoQuadro3Antes.src,
      afterImage: ModernizacaoQuadro3Depois.src,
      category: "Modernização",
      type: "modernization"
    },  
    {
      id: 11,
      title: "Modernização do Quadro de Comando do Elevador",
      description: "Modernização do quadro de comando do elevador, substituindo componentes antigos por tecnologia atual. Reorganização completa da fiação e separação adequada dos circuitos, eliminando interferências e aumentando significativamente a segurança e confiabilidade do sistema. Pode chegar até 40% de economia de energia, além de modificar a forma de abordar o sistema.",
      beforeImage: ModernizacaoQuadro4Antes.src,
      afterImage: ModernizacaoQuadro4Depois.src,
      category: "Modernização",
      type: "modernization"
    },    
    {
      id: 12,
      title: "Renovação de Portas",
      description: "Revestimento de porta em aço escovado, proporcionando uma transformação completa do acabamento. Foi substituída a pintura eletrostática original pelo revestimento em aço escovado, conferindo um visual moderno, sofisticado e de alta durabilidade ao equipamento.",
      beforeImage: RenovacaoPortas2Antes.src,
      afterImage: RenovacaoPortas2Depois.src,
      category: "Modernização",
      type: "modernization"
    },
    {
      id: 13,
      title: "Revitalização do Motor do Elevador",
      description: "Revisão e revitalização estética dos motores elétricos das máquinas de elevador, melhorando a aparência, funcionalidade e prolongando a vida útil do equipamento.",
      beforeImage: RevitalizacaoMotorElevador.src,
      afterImage: RevitalizacaoMotorElevador2.src,
      category: "Modernização",
      type: "repair"
    },    
  ]

  const [activeCategory, setActiveCategory] = useState<string>("Todos")
  const [selectedTransformation, setSelectedTransformation] = useState<number | null>(null)

  // Filtrar transformações por categoria
  const filteredTransformations =
    activeCategory === "Todos" ? transformations : transformations.filter((item) => item.category === activeCategory)

  // Categorias únicas para o filtro
  const categories = ["Todos", ...Array.from(new Set(transformations.map((item) => item.category)))]

  return (
    <div className="w-full">
      {/* Filtros de categoria com contador */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => {
          const count = category === "Todos" 
            ? transformations.length 
            : transformations.filter(item => item.category === category).length;
            
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-[#b8860b] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid de transformações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTransformations.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedTransformation(item.id)}
          >
            <div className="relative h-64 w-full">
              {/* Container para as imagens antes/depois */}
              <div className="absolute inset-0 flex">
                {/* Imagem "Antes" */}
                <div className="w-1/2 relative overflow-hidden">
                  <Image
                    src={item.beforeImage || "/placeholder.svg"}
                    alt={`Antes - ${item.title}`}
                    fill
                    className="object-cover"
                  />
                  {item.type === "modernization" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ANTES</span>
                    </div>
                  )}
                </div>

                {/* Imagem "Depois" */}
                <div className="w-1/2 relative overflow-hidden">
                  <Image
                    src={item.afterImage || "/placeholder.svg"}
                    alt={`Depois - ${item.title}`}
                    fill
                    className="object-cover"
                  />
                  {item.type === "modernization" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">DEPOIS</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <span className="bg-[#b8860b]/10 text-[#b8860b] text-xs font-medium px-2.5 py-0.5 rounded">
                  {item.category}

                </span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para visualização ampliada */}
      {selectedTransformation !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTransformation(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-semibold">
                {transformations.find((t) => t.id === selectedTransformation)?.title}
              </h3>
              <button onClick={() => setSelectedTransformation(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative h-80">
                  <Image
                    src={transformations.find((t) => t.id === selectedTransformation)?.beforeImage || ""}
                    alt="Antes"
                    fill
                    className="object-cover rounded-lg"
                  />
                  {transformations.find((t) => t.id === selectedTransformation)?.type === "modernization" && (
                    <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Antes
                    </div>
                  )}
                </div>

                <div className="flex-1 relative h-80">
                  <Image
                    src={transformations.find((t) => t.id === selectedTransformation)?.afterImage || ""}
                    alt="Depois"
                    fill
                    className="object-cover rounded-lg"
                  />
                  {transformations.find((t) => t.id === selectedTransformation)?.type === "modernization" && (
                    <div className="absolute top-2 left-2 bg-[#b8860b] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Depois
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-lg mb-2">Descrição do Serviço</h4>
                <p className="text-gray-600">
                  {transformations.find((t) => t.id === selectedTransformation)?.description}
                </p>
                <p className="text-sm mt-4 text-gray-600">
                  Este é um exemplo de transformação realizada pela Unisuntec Service. Nossos profissionais altamente
                  qualificados garantem um trabalho de excelência, utilizando materiais de primeira linha e seguindo
                  rigorosos padrões de segurança.
                </p>
              </div>
            </div>

            <div className="p-4 border-t flex justify-end">
              <a
                href={`https://api.whatsapp.com/send?phone=5521982184621&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20${transformations.find((t) => t.id === selectedTransformation)?.title}%20similar%20ao%20que%20vi%20no%20site.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#128C7E] transition-colors"
              >
                <WhatsApp className="h-4 w-4" />
                Solicitar Orçamento Similar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
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
                  src={ElevatorImage}
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

  {/* Seção de Transformações (Antes e Depois) */}
  <section id="transformacoes" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformações Impressionantes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Confira alguns dos nossos trabalhos de modernização e instalação de elevadores. Arraste para ver o antes
                e depois.
              </p>
            </div>

            <BeforeAfterGallery />
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
