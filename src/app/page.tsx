"use client"
import Image from "next/image"
import AnimatedCounter from "@/components/landing/animated-counter"
import Button from "@/components/ui/Button"
import { IconBook, IconFileText, IconUsers, IconUserEdit, IconDownload, IconMapPin, IconMail, IconPhone, IconChevronRight, IconCircleCheck, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react"
import { IconLogin } from "@tabler/icons-react"
import Link from "next/link"


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between py-2 px-4 border-b border-[#c8c8c8] backdrop-blur-sm supports-[backdrop-filter]:bg-white/60">
        <aside className="flex items-center gap-2">
          <Image src={"/logoAnimedWB.png"} alt="Logo" height={60} width={60} />
          <span className="text-2xl font-bold text-[#B33A3A] max-md:hidden">PRAXIS</span>
        </aside>
        <aside className="flex items-center">
          <nav className="flex items-center gap-4 pr-4 max-md:hidden">
            <Link href="#inicio" className="text-sm font-medium transition-colors hover:text-[#B33A3A]">Inicio</Link>
            <Link href="#mision-vision" className="text-sm font-medium transition-colors hover:text-[#B33A3A]">Misión y Visión</Link>
            <Link href="#documentos" className="text-sm font-medium transition-colors hover:text-[#B33A3A]">Documentos</Link>
            <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-[#B33A3A]">Contacto</Link>
          </nav>
          <div className="flex items-center gap-3 pl-4 border-l max-md:border-none border-[#c8c8c8]">
            <Link href="/auth" className="text-sm text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white">
              <IconLogin size={25} className="md:hidden" />
              <p className="hidden md:block">Iniciar sesión</p>
            </Link>
            <Link href="/auth" className="text-sm font-semibold bg-[#B33A3A] text-white py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white">
              <IconUserEdit size={25} className="md:hidden" />
              <p className="hidden md:block">Registrarse</p>
            </Link>
          </div>
        </aside>
      </header>

      <section id="inicio" className="h-[42rem] max-md:h-full flex items-center justify-center p-10 max-md:p-0">
        <article className="h-full w-full flex max-md:flex-col gap-1 p-6">
          <aside className="h-full w-1/2 max-md:w-full flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Gestiona tus <span className="text-[#B33A3A]">prácticas formativas</span> de manera eficiente
              </h1>
              <p className="text-[#707070] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Praxis es la plataforma que simplifica el registro, control y seguimiento de estudiantes en prácticas y
                preprácticas formativas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/auth"} className="text-[#B33A3A] group flex items-center gap-2 font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white duration-300">
                Comenzar ahora
                <IconChevronRight size={20} className="group-hover:translate-x-1 transition-all duration-300"/>
              </Link>
              <Button
                type="button"
                style="outline-gray-to-filled"
                text="Conocer más"
                aditionalsStyles="text-[1.1rem]"
              />
            </div>
          </aside>
          <aside className="h-full w-1/2 max-md:w-full rounded-[25px]"></aside>
        </article>
      </section>

      <section className="p-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedCounter end={100} duration={2000} className="text-4xl font-bold text-[#B33A3A]" />
              <p className="text-sm text-gray-500">Estudiantes Activos</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={100} duration={2000} className="text-4xl font-bold text-[#B33A3A]" />
              <p className="text-sm text-gray-500">Empresas Asociadas</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={100} duration={2000} className="text-4xl font-bold text-[#B33A3A]" />
              <p className="text-sm text-gray-500">Documentos Gestionados</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={100} duration={2000} className="text-4xl font-bold text-[#B33A3A]" suffix="%" />
              <p className="text-sm text-gray-500">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-20 bg-gray-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-[#b33a3a]/10 px-3 py-1 text-sm text-[#b33a3a] mb-4">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="relative">
                Características <span className="text-[#B33A3A]">principales</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-600">
              Praxis ofrece herramientas completas para la gestión eficiente de prácticas formativas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
                <IconUsers className="h-6 w-6 text-[#B33A3A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gestión de Estudiantes</h3>
              <p className="text-gray-600">
                Registro, control y administración eficiente de estudiantes en prácticas formativas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
                <IconFileText className="h-6 w-6 text-[#B33A3A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Documentación Digital</h3>
              <p className="text-gray-600">
                Almacenamiento seguro de documentos como HDV, ARL, cartas de presentación y bitácoras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
                <IconBook className="h-6 w-6 text-[#B33A3A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Seguimiento Académico</h3>
              <p className="text-gray-600">
                Monitoreo del progreso de los estudiantes y generación automática de reportes.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <div className="absolute bottom-0 left-1/4 w-px h-1/2 bg-gradient-to-t from-red-200 to-transparent"></div>
          <div className="absolute bottom-0 left-2/4 w-px h-3/4 bg-gradient-to-t from-red-200 to-transparent"></div>
          <div className="absolute bottom-0 left-3/4 w-px h-1/3 bg-gradient-to-t from-red-200 to-transparent"></div>
        </div>
      </section>

      <section id="mision-vision" className="p-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-600/0 z-10 rounded-xl"></div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-red-600/30 blur-xl"></div>
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-red-600/20 blur-xl"></div>
              <Image
                src="/students.png"
                alt="Estudiantes en prácticas"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">
                  Nuestra Misión
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  <span className="relative">
                    Nuestra <span className="text-[#B33A3A]">Misión</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-600">
                  Facilitar y optimizar el proceso de gestión de prácticas formativas, brindando a estudiantes y
                  administradores una plataforma segura, eficiente e intuitiva que permita el seguimiento adecuado del
                  desarrollo profesional de los futuros egresados.
                </p>
              </div>
              <div>
                <div className="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">
                  Nuestra Visión
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  <span className="relative">
                    Nuestra <span className="text-[#B33A3A]">Visión</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-600">
                  Ser el sistema de referencia en la gestión de prácticas formativas a nivel nacional, reconocido por su
                  innovación, seguridad y contribución al desarrollo profesional de los estudiantes universitarios.
                </p>
              </div>
              <div className="pt-4">
                {/* <ModalSection
                  buttonText="Conoce nuestra historia"
                  buttonIcon={<IconArrowRight className="ml-2 h-4 w-4" />}
                  buttonVariant="primary"
                  title="Nuestra Historia"
                  content={<NuestraHistoriaContent />}
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </section>

      <section id="documentos" className="p-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">Recursos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="relative">
                <span className="text-[#B33A3A]">Documentos</span> importantes
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-gray-600">Accede a todos los documentos necesarios para tus prácticas formativas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hoja de Vida",
                description: "Formato de la universidad para la hoja de vida de los estudiantes.",
                icon: "FileText",
              },
              {
                title: "Arl",
                description: "Documento que salvaguarda los derechos y salud de los estudiantes.",
                icon: "ClipboardList",
              },
              {
                title: "Carta de presentación",
                description: "Documento que presenta el estudiante a la empresa.",
                icon: "CheckSquare",
              },
              {
                title: "Bitácora",
                description: "Documento que registra el progreso de los estudiantes en las prácticas.",
                icon: "BookOpen",
              },
              {
                title: "Formato de Seguimiento",
                description: "Documento que registra el seguimiento de los estudiantes en las prácticas.",
                icon: "BookOpen",
              },
              {
                title: "Convenio de Prácticas",
                description: "Documento que establece el acuerdo entre la universidad y la empresa.",
                icon: "FileText",
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-300 group-hover:bg-red-100"></div>
                <div className="flex justify-between items-start mb-4 relative">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-all duration-300">
                    <IconFileText className="h-5 w-5 text-[#B33A3A]" />
                  </div>
                  <Button
                    type="button"
                    style="outline-to-filled"
                    text="Descargar"
                    icon={<IconDownload className="h-5 w-5 mr-1" />}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -mt-32 -mr-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -mb-32 -ml-32"></div>
      </section>

      <section className="p-20 bg-[#B33A3A] text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white mb-4">Beneficios</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="relative">
                Beneficios de usar <span className="text-white">Praxis</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-red-100">
              Descubre por qué Praxis es la mejor opción para la gestión de prácticas formativas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Ahorro de tiempo en procesos administrativos",
              "Acceso seguro a documentos desde cualquier lugar",
              "Seguimiento en tiempo real del progreso de los estudiantes",
              "Generación automática de reportes y estadísticas",
              "Comunicación eficiente entre estudiantes y administradores",
              "Interfaz intuitiva y fácil de usar",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <IconCircleCheck className="h-6 w-6 text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125" />
                <p className="text-red-50 group-hover:text-white transition-all duration-300 w-[300px]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mt-48 -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -mb-48 -ml-48"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white opacity-5 rounded-full"></div>
      </section>

      <section id="contacto" className="p-20 bg-gray-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div>
            <div className="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">Contacto</div>
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              <span className="relative">
                ¿Tienes alguna <span className="text-[#B33A3A]">pregunta</span>?
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#B33A3A]/20 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos a la brevedad posible.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#B33A3A]/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#B33A3A]/20">
                  <IconPhone className="h-6 w-6 text-[#B33A3A]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Teléfono</h3>
                  <p className="text-gray-600">+57 (605) 643 9333</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-red-200">
                  <IconMail className="h-6 w-6 text-[#B33A3A]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Correo electrónico</h3>
                  <p className="text-gray-600">practicas@unisinucartagena.edu.co</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#B33A3A]/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#B33A3A]/20">
                  <IconMapPin className="h-6 w-6 text-[#B33A3A]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Dirección</h3>
                  <p className="text-gray-600">Av. Pedro de Heredia, Sector Amberes, Cartagena, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 -mt-32 -mr-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200 rounded-full opacity-20 -mb-32 -ml-32"></div>
      </section>

      <section className="p-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="bg-gradient-to-r from-[#B33A3A] to-[#B33A3A] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.1] rounded-full -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.1] rounded-full -mb-32 -ml-32"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white opacity-[0.1] rounded-full"></div>

            <div className="max-w-3xl mx-auto text-center text-white relative">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                ¿Listo para optimizar la gestión de prácticas formativas?
              </h2>
              <p className="text-red-100 mb-8 md:text-lg">
                Únete a las instituciones educativas que ya confían en Praxis para la gestión eficiente de sus prácticas
                formativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth" className="bg-white text-[#B33A3A] group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-light border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300">
                  Comenzar Ahora
                  <IconChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 p-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Praxis Logo" width={40} height={40} />
                <span className="text-2xl font-bold text-white">PRAXIS</span>
              </div>
              <p className="text-sm text-gray-400">
                Sistema de gestión para registro y control de Estudiantes en prácticas y preprácticas formativas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-sm hover:text-red-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#mision-vision" className="text-sm hover:text-red-400 transition-colors">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link href="#documentos" className="text-sm hover:text-red-400 transition-colors">
                    Documentos
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm hover:text-red-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <IconPhone className="h-4 w-4 text-red-400" />
                  +57 (605) 643 9333
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <IconMail className="h-4 w-4 text-red-400" />
                  practicas@unisinucartagena.edu.co
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <IconMapPin className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>Av. Pedro de Heredia, Sector Amberes, Cartagena, Colombia</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
                >
                  <IconBrandFacebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
                >
                  <IconBrandInstagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
                >
                  <IconBrandTwitter className="h-6 w-6 text-white"/>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
                >
                  <IconBrandLinkedin className="h-6 w-6 text-white"/>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Praxis. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </main>
  )
}




// const NuestraHistoriaContent = () => {
//   return (
//     <div className="space-y-4">
//       <p className="text-gray-600">
//         Praxis nació de la necesidad de modernizar y simplificar la gestión de prácticas formativas.
//       </p>
//       <p className="text-gray-600">
//         Nuestro objetivo es facilitar el proceso tanto para estudiantes como para empresas e instituciones educativas.
//       </p>
//     </div>
//   );
// }
