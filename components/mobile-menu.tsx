"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={toggleMenu}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-6">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Fechar menu">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="space-y-6 text-black">
              <div className="space-y-3">
                {[
                  { name: "Sobre", href: "#sobre" },
                  { name: "Serviços", href: "#servicos" },
                  { name: "Depoimentos", href: "#depoimentos" },
                  { name: "Contato", href: "#contato" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-2 text-gray-900 hover:text-[#b8860b] font-medium text-base"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-2 py-2 text-gray-900 hover:text-[#b8860b] font-medium"
                >
                  Atendimento 24h
                </a>
                <Button className="w-full mt-4 bg-[#b8860b] hover:bg-[#a67c0b] text-white">Solicitar Orçamento</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

