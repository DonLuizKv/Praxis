"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { IconChevronLeft, IconChevronRight, IconQuote } from "@tabler/icons-react"

const testimonials = [
  {
    id: 1,
    content:
      "Praxis ha revolucionado la forma en que gestionamos las prácticas formativas. Ahora todo es más rápido y organizado.",
    name: "María Rodríguez",
    role: "Administradora de Prácticas",
    avatar: "/avatar1.png",
  },
  {
    id: 2,
    content:
      "Como estudiante, me encanta poder acceder a todos mis documentos y actualizar mis bitácoras desde cualquier lugar.",
    name: "Carlos Mendoza",
    role: "Estudiante de Ingeniería",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    content:
      "La plataforma es muy intuitiva y me ha ahorrado mucho tiempo en la gestión de documentos y seguimiento de mis prácticas.",
    name: "Ana Martínez",
    role: "Estudiante de Psicología",
    avatar: "/avatar3.png",
  },
  {
    id: 4,
    content:
      "Gracias a Praxis, puedo monitorear el progreso de todos los estudiantes en tiempo real y generar reportes con un solo clic.",
    name: "Javier López",
    role: "Coordinador Académico",
    avatar: "/avatar4.png",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-300 group-hover:bg-red-100"></div>
                <div className="flex items-start gap-4 relative">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-200 transition-all duration-300">
                    <IconQuote className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-100 p-0.5">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <button
          className="rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300"
          onClick={prev}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <IconChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </button>

        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 p-0 rounded-full transition-all duration-300 ${
              index === current ? "bg-red-600 scale-125" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <span className="sr-only">Testimonio {index + 1}</span>
          </button>
        ))}

        <button
          className="rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-300"
          onClick={next}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <IconChevronRight className="h-4 w-4" />
          <span className="sr-only">Siguiente</span>
        </button>
      </div>
    </div>
  )
}
