import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="flex flex-col">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "fill-[#b8860b] text-[#b8860b]" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{content}</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  )
}

