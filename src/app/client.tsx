"use client"

import { Button } from "@/src/components/ui/button"
import {
    ChevronRight,
    Info,
    Mail,
    Menu,
    Phone,
    Star,
    Wrench,
    X
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Card } from "../components/ui/card"
import { Testimonial, TestimonialCardProps, } from "./page"


// Componente TestimonialCard incorporado
export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
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
export function TestimonialCarousel() {
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

  export 
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
      <div className="md:hidden">
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