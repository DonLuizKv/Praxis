<script lang="ts">
	import { resolve } from "$app/paths";
    import { IconBook, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconChevronRight, IconCircleCheck, IconDownload, IconFileText, IconLogin, IconMail, IconMapPin, IconPhone, IconUserEdit, IconUsers } from "@tabler/icons-svelte-runes"

    const sections = [
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
    ]

    const Benefits = [
        "Ahorro de tiempo en procesos administrativos",
        "Acceso seguro a documentos desde cualquier lugar",
        "Seguimiento en tiempo real del progreso de los estudiantes",
        "Generación automática de reportes y estadísticas",
        "Comunicación eficiente entre estudiantes y administradores",
        "Interfaz intuitiva y fácil de usar",
    ]
</script>
<main class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 flex items-center justify-between py-2 px-4 border-b border-[#c8c8c8] backdrop-blur-sm supports-[backdrop-filter]:bg-white/60">
    <aside class="flex items-center gap-2">
        <img src="/images/logoAnimedWB.png" alt="Logo" height={60} width={60} />
        <span class="text-2xl font-bold text-[#B33A3A] max-md:hidden">PRAXIS</span>
    </aside>
    <aside class="flex items-center">
        <nav class="flex items-center gap-4 pr-4 max-md:hidden">
        <a href="#inicio" class="text-sm font-medium transition-colors hover:text-[#B33A3A]">Inicio</a>
        <a href="#mision-vision" class="text-sm font-medium transition-colors hover:text-[#B33A3A]">Misión y Visión</a>
        <a href="#documentos" class="text-sm font-medium transition-colors hover:text-[#B33A3A]">Documentos</a>
        <a href="#contacto" class="text-sm font-medium transition-colors hover:text-[#B33A3A]">Contacto</a>
        </nav>
        <div class="flex items-center gap-3 pl-4 border-l max-md:border-none border-[#c8c8c8]">
        <a href="/auth" class="text-sm text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white">
            <IconLogin size={25} class="md:hidden" />
            <p class="hidden md:block">Iniciar sesión</p>
        </a>
        <a href="/auth" class="text-sm font-semibold bg-[#B33A3A] text-white py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white">
            <IconUserEdit size={25} class="md:hidden" />
            <p class="hidden md:block">Registrarse</p>
        </a>
        </div>
    </aside>
    </header>

    <section id="inicio" class="h-[42rem] max-md:h-full flex items-center justify-center p-10 max-md:p-0">
    <article class="h-full w-full flex max-md:flex-col gap-1 p-6">
        <aside class="h-full w-1/2 max-md:w-full flex flex-col justify-between gap-8">
        <div class="flex flex-col gap-3">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Gestiona tus <span class="text-[#B33A3A]">prácticas formativas</span> de manera eficiente
            </h1>
            <p class="text-[#707070] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Praxis es la plataforma que simplifica el registro, control y seguimiento de estudiantes en prácticas y
            preprácticas formativas.
            </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
            <a href={resolve("/auth")} class="text-[#B33A3A] group flex items-center gap-2 font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white duration-300">
            Comenzar ahora
            <IconChevronRight size={20} class="group-hover:translate-x-1 transition-all duration-300"/>
            </a>
            <button type="button" class="text-[#B33A3A] text-[1.1rem] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white">Conocer mas</button>
        </div>
        </aside>
        <aside class="h-full w-1/2 max-md:w-full rounded-[25px]"></aside>
    </article>
    </section>

    <section class="p-12 bg-white">
    <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="space-y-2">
            <!-- <AnimatedCounter end={100} duration={2000} class="text-4xl font-bold text-[#B33A3A]" /> -->
            <p class="text-sm text-gray-500">Estudiantes Activos</p>
        </div>
        <div class="space-y-2">
            <!-- <AnimatedCounter end={100} duration={2000} class="text-4xl font-bold text-[#B33A3A]" /> -->
            <p class="text-sm text-gray-500">Empresas Asociadas</p>
        </div>
        <div class="space-y-2">
            <!-- <AnimatedCounter end={100} duration={2000} class="text-4xl font-bold text-[#B33A3A]" /> -->
            <p class="text-sm text-gray-500">Documentos Gestionados</p>
        </div>
        <div class="space-y-2">
            <!-- <AnimatedCounter end={100} duration={2000} class="text-4xl font-bold text-[#B33A3A]" suffix="%" /> -->
            <p class="text-sm text-gray-500">Satisfacción</p>
        </div>
        </div>
    </div>
    </section>

    <section class="p-20 bg-gray-50 relative overflow-hidden">
    <div class="container relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
        <div class="inline-block rounded-lg bg-[#b33a3a]/10 px-3 py-1 text-sm text-[#b33a3a] mb-4">
            Características
        </div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span class="relative">
            Características <span class="text-[#B33A3A]">principales</span>
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
            </span>
        </h2>
        <p class="mt-4 text-gray-600">
            Praxis ofrece herramientas completas para la gestión eficiente de prácticas formativas
        </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
            <IconUsers class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <h3 class="text-xl font-bold mb-2">Gestión de Estudiantes</h3>
            <p class="text-gray-600">
            Registro, control y administración eficiente de estudiantes en prácticas formativas.
            </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
            <IconFileText class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <h3 class="text-xl font-bold mb-2">Documentación Digital</h3>
            <p class="text-gray-600">
            Almacenamiento seguro de documentos como HDV, ARL, cartas de presentación y bitácoras.
            </p>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-300 group-hover:bg-red-100"></div>
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
            <IconBook class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <h3 class="text-xl font-bold mb-2">Seguimiento Académico</h3>
            <p class="text-gray-600">
            Monitoreo del progreso de los estudiantes y generación automática de reportes.
            </p>
        </div>
        </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1/2">
        <div class="absolute bottom-0 left-1/4 w-px h-1/2 bg-gradient-to-t from-red-200 to-transparent"></div>
        <div class="absolute bottom-0 left-2/4 w-px h-3/4 bg-gradient-to-t from-red-200 to-transparent"></div>
        <div class="absolute bottom-0 left-3/4 w-px h-1/3 bg-gradient-to-t from-red-200 to-transparent"></div>
    </div>
    </section>

    <section id="mision-vision" class="p-20 bg-white relative overflow-hidden">
    <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative h-[400px] overflow-hidden rounded-xl shadow-xl group">
            <div class="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-600/0 z-10 rounded-xl"></div>
            <div class="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-red-600/30 blur-xl"></div>
            <div class="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-red-600/20 blur-xl"></div>
            <img
            src="/students.png"
            alt="Estudiantes en prácticas"
            class="object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div class="space-y-8">
            <div>
            <div class="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">
                Nuestra Misión
            </div>
            <h2 class="text-3xl font-bold tracking-tighter mb-4">
                <span class="relative">
                Nuestra <span class="text-[#B33A3A]">Misión</span>
                <span class="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
                </span>
            </h2>
            <p class="text-gray-600">
                Facilitar y optimizar el proceso de gestión de prácticas formativas, brindando a estudiantes y
                administradores una plataforma segura, eficiente e intuitiva que permita el seguimiento adecuado del
                desarrollo profesional de los futuros egresados.
            </p>
            </div>
            <div>
            <div class="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">
                Nuestra Visión
            </div>
            <h2 class="text-3xl font-bold tracking-tighter mb-4">
                <span class="relative">
                Nuestra <span class="text-[#B33A3A]">Visión</span>
                <span class="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
                </span>
            </h2>
            <p class="text-gray-600">
                Ser el sistema de referencia en la gestión de prácticas formativas a nivel nacional, reconocido por su
                innovación, seguridad y contribución al desarrollo profesional de los estudiantes universitarios.
            </p>
            </div>
            <div class="pt-4">
                <!-- <ModalSection
                    buttonText="Conoce nuestra historia"
                    buttonIcon={<IconArrowRight class="ml-2 h-4 w-4" />}
                    buttonVariant="primary"
                    title="Nuestra Historia"
                    content={<NuestraHistoriaContent />}
                /> -->
            </div>
        </div>
        </div>
    </div>

    <div class="absolute top-1/2 right-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
    </section>

    <section id="documentos" class="p-20 relative overflow-hidden">
    <div class="container relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
        <div class="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">Recursos</div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span class="relative">
            <span class="text-[#B33A3A]">Documentos</span> importantes
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-red-200 rounded-full"></span>
            </span>
        </h2>
        <p class="mt-4 text-gray-600">Accede a todos los documentos necesarios para tus prácticas formativas</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each sections as S, i (i)}
                <div
                    class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-2 duration-300 group relative overflow-hidden"
                >
                    <div class="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-300 group-hover:bg-red-100"></div>
                    <div class="flex justify-between items-start mb-4 relative">
                        <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-all duration-300">
                            <IconFileText class="h-5 w-5 text-[#B33A3A]" />
                        </div>
                        <button
                            type="button"
                            class="text-[#B33A3A] font-semibold bg-transparent outline outline-[#B33A3A] py-2 px-4 rounded-[4px] transition-all hover:bg-[#B33A3A] hover:text-white"
                        >
                        <IconDownload class="h-5 w-5 mr-1" /> Descargar</button>
                    </div>
                    <h3 class="text-lg font-bold mb-2">{S.title}</h3>
                    <p class="text-gray-600 text-sm">{S.description}</p>
                    </div>
            {/each}
        </div>
    </div>

    <div class="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -mt-32 -mr-32"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full opacity-20 -mb-32 -ml-32"></div>
    </section>

    <section class="p-20 bg-[#B33A3A] text-white relative overflow-hidden">
    <div class="container relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
        <div class="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white mb-4">Beneficios</div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span class="relative">
            Beneficios de usar <span class="text-white">Praxis</span>
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
            </span>
        </h2>
        <p class="mt-4 text-red-100">
            Descubre por qué Praxis es la mejor opción para la gestión de prácticas formativas
        </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each Benefits as B, i (i)}
                <div class="flex items-start gap-3 group">
                    <IconCircleCheck class="h-6 w-6 text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125" />
                    <p class="text-red-50 group-hover:text-white transition-all duration-300 w-[300px]">{B}</p>
                </div>
            {/each}
        </div>
    </div>

    <div class="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mt-48 -mr-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -mb-48 -ml-48"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-white opacity-5 rounded-full"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white opacity-5 rounded-full"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white opacity-5 rounded-full"></div>
    </section>

    <section id="contacto" class="p-20 bg-gray-50 relative overflow-hidden">
    <div class="container relative z-10">
        <div>
        <div class="inline-block rounded-lg bg-[#B33A3A]/10 px-3 py-1 text-sm text-[#B33A3A] mb-4">Contacto</div>
        <h2 class="text-3xl font-bold tracking-tighter mb-6">
            <span class="relative">
            ¿Tienes alguna <span class="text-[#B33A3A]">pregunta</span>?
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-[#B33A3A]/20 rounded-full"></span>
            </span>
        </h2>
        <p class="text-gray-600 mb-8 max-w-2xl">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos a la brevedad posible.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div class="w-12 h-12 bg-[#B33A3A]/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#B33A3A]/20">
                <IconPhone class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <div>
                <h3 class="font-medium text-lg mb-2">Teléfono</h3>
                <p class="text-gray-600">+57 (605) 643 9333</p>
            </div>
            </div>

            <div class="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-red-200">
                <IconMail class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <div>
                <h3 class="font-medium text-lg mb-2">Correo electrónico</h3>
                <p class="text-gray-600">practicas@unisinucartagena.edu.co</p>
            </div>
            </div>

            <div class="flex items-center gap-4 group bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
            <div class="w-12 h-12 bg-[#B33A3A]/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#B33A3A]/20">
                <IconMapPin class="h-6 w-6 text-[#B33A3A]" />
            </div>
            <div>
                <h3 class="font-medium text-lg mb-2">Dirección</h3>
                <p class="text-gray-600">Av. Pedro de Heredia, Sector Amberes, Cartagena, Colombia</p>
            </div>
            </div>
        </div>
        </div>
    </div>

        <div class="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full opacity-20 -mt-32 -mr-32"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-red-200 rounded-full opacity-20 -mb-32 -ml-32"></div>
    </section>

    <section class="p-20 relative overflow-hidden">
    <div class="container relative z-10">
        <div class="bg-gradient-to-r from-[#B33A3A] to-[#B33A3A] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.1] rounded-full -mt-32 -mr-32"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.1] rounded-full -mb-32 -ml-32"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white opacity-[0.1] rounded-full"></div>

        <div class="max-w-3xl mx-auto text-center text-white relative">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
            ¿Listo para optimizar la gestión de prácticas formativas?
            </h2>
            <p class="text-red-100 mb-8 md:text-lg">
            Únete a las instituciones educativas que ya confían en Praxis para la gestión eficiente de sus prácticas
            formativas.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth" class="bg-transparent border border-white group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-light hover:bg-white hover:text-[#B33A3A] transition-all duration-300">
                Comenzar Ahora
                <IconChevronRight class="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </a>
            </div>
        </div>
        </div>
    </div>
    </section>

    <footer class="bg-gray-900 text-gray-300 p-12">
    <div class="container">
        <div class="grid md:grid-cols-4 gap-8">
        <div>
            <div class="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Praxis Logo" width={40} height={40} />
            <span class="text-2xl font-bold text-white">PRAXIS</span>
            </div>
            <p class="text-sm text-gray-400">
            Sistema de gestión para registro y control de Estudiantes en prácticas y preprácticas formativas.
            </p>
        </div>

        <div>
            <h3 class="text-lg font-bold text-white mb-4">Enlaces rápidos</h3>
            <ul class="space-y-2">
            <li>
                <a href="#inicio" class="text-sm hover:text-red-400 transition-colors">
                Inicio
                </a>
            </li>
            <li>
                <a href="#mision-vision" class="text-sm hover:text-red-400 transition-colors">
                Misión y Visión
                </a>
            </li>
            <li>
                <a href="#documentos" class="text-sm hover:text-red-400 transition-colors">
                Documentos
                </a>
            </li>
            <li>
                <a href="#contacto" class="text-sm hover:text-red-400 transition-colors">
                Contacto
                </a>
            </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-bold text-white mb-4">Contacto</h3>
            <ul class="space-y-2">
            <li class="flex items-center gap-2 text-sm">
                <IconPhone class="h-4 w-4 text-red-400" />
                +57 (605) 643 9333
            </li>
            <li class="flex items-center gap-2 text-sm">
                <IconMail class="h-4 w-4 text-red-400" />
                practicas@unisinucartagena.edu.co
            </li>
            <li class="flex items-start gap-2 text-sm">
                <IconMapPin class="h-4 w-4 text-red-400 mt-0.5" />
                <span>Av. Pedro de Heredia, Sector Amberes, Cartagena, Colombia</span>
            </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-bold text-white mb-4">Síguenos</h3>
            <div class="flex gap-4">
            <a
                href="/"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
            >
                <IconBrandFacebook class="h-6 w-6 text-white" />
            </a>
            <a
                href="/"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
            >
                <IconBrandInstagram class="h-6 w-6 text-white" />
            </a>
            <a
                href="/"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
            >
                <IconBrandTwitter class="h-6 w-6 text-white"/>
            </a>
            <a
                href="/"
                class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#B33A3A] transition-colors"
            >
                <!-- <IconBrandaedin class="h-6 w-6 text-white"/> -->
            </a>
            </div>
        </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Praxis. Todos los derechos reservados.</p>
        </div>
    </div>
    </footer>

</main>