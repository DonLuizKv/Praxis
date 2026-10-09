
# Contexto de Diseño Fusionado — Praxis

Este documento fusiona las directrices de identidad y estructura de `designContext.md` con los patrones de organización y composición observados en la vista de Reportes (09), tomando como referencia visual la experiencia de Acceso (02).

Su objetivo es guiar el diseño y desarrollo de Praxis hacia una interfaz académica, visual, intuitiva y menos sobrecargada de información.

---

## 1. Identidad de Diseño

La aplicación se mantiene fiel a su propósito: ser el espacio personal del estudiante para organizar y acompañar su experiencia académica.

Se redefine hacia una experiencia más visual, serena y moderna, sin perder sobriedad.

### 1.1. Propósito y Principios

La interfaz debe transmitir los siguientes principios:

- **Serena y académica:** transmitir tranquilidad y profesionalismo.
- **Directa al punto:** priorizar la información relevante y las acciones necesarias.
- **Visual e intuitiva:** facilitar la comprensión mediante jerarquías y elementos visuales claros.
- **Equilibrada:** mantener una relación adecuada entre contenido, espacio y elementos interactivos.
- **Humana y predecible:** ofrecer interacciones coherentes y fáciles de comprender.
- **Progresiva y respirada:** mostrar primero lo esencial y revelar información adicional cuando sea necesaria.

### 1.2. Personalidad de la Interfaz

- **Ordenada:** mantener un ritmo vertical constante y una separación clara entre bloques.
- **Tranquila:** utilizar fondos suaves, bordes tenues y transiciones cortas.
- **Orientadora:** permitir que el estudiante identifique dónde está, qué tiene pendiente y qué puede hacer a continuación con una sola mirada.
- **Pragmática:** reducir los clics innecesarios y facilitar el escaneo de información.

---

## 2. Estructura General de la Aplicación

Tomando como referencia la identidad y estructura de `designContext.md`, Praxis se organiza como un espacio personal del estudiante con una jerarquía clara de información.

### 2.1. Áreas Principales (Mapa de Páginas)

| Área | Propósito |
|---|---|
| Inicio / Panel principal | Presentar un resumen de la actividad académica y las prioridades actuales. |
| Materias / Cursos | Consultar y organizar las materias del estudiante. |
| Actividades y Tareas | Gestionar actividades, entregas y vencimientos. |
| Calificaciones / Seguimiento | Consultar calificaciones y progreso académico. |
| Horario | Visualizar las clases y actividades programadas. |
| Bitácoras / Seguimiento de Prácticas | Registrar y consultar el progreso de las prácticas. |
| Reportes (Vista Facultad/Consulta) | Consultar información e informes académicos. |
| Comunicaciones / Avisos | Consultar anuncios y comunicaciones relevantes. |
| Perfil / Datos personales | Gestionar la información personal del estudiante. |

### 2.2. Jerarquía de Información

Se mantiene el siguiente orden de prioridad:

1. **Lo urgente:** vencimientos próximos, tareas pendientes y avisos importantes.
2. **Lo vigente:** día actual, actividades del periodo y compromisos de la semana.
3. **Lo contextual:** detalles de materias, actividades e informes.
4. **Lo secundario:** información histórica o complementaria.

### 2.3. Estructura Típica de Página

Todas las páginas deben seguir este orden lógico para garantizar coherencia:

1. Encabezado de página.
2. Acciones rápidas.
3. Resumen e información clave.
4. Contenido principal.
5. Complemento contextual.

Esta estructura sirve como guía general y debe adaptarse a las necesidades específicas de cada vista.

---

## 3. Sistema Visual Fusionado

Se toma como base la paleta sobria de `designContext.md`, armonizada con el color verde oscuro del hero de Acceso (02), `#183C3A`.

El objetivo es lograr una interfaz más visual, aérea e intuitiva, reduciendo la densidad informativa sin perder claridad ni funcionalidad.

### 3.1. Paleta de Colores

La paleta incorpora tonos intermedios para establecer una jerarquía visual suave y distinguir los estados de la interfaz.

| Nombre | HEX |
|---|---|
| Fondo base | `#F3F4EF` |
| Fondo de aplicación | `#F8F9FA` |
| Superficie | `#FFFFFF` |
| Superficie secundaria | `#F9FAF7` |
| Superficie terciaria | `#F1F5F2` |
| Bordes | `#E6E9E2` |
| Bordes sutiles | `#F0F2EC` |
| Fondo activo / suave | `#F2F7F4` |
| Texto primario | `#202D2A` |
| Texto secundario | `#586660` |
| Texto terciario | `#7B8782` |
| Primario académico | `#24665C` |
| Primario hover | `#194E46` |
| Primario activo | `#133B33` |
| Primario suave (Wash) | `#F1F6F4` |
| Acento verde claro | `#A9D3C5` |
| Superficie hero | `#183C3A` |
| Éxito | `#22C55E` |
| Advertencia | `#F59E0B` |
| Peligro / Alerta | `#B33A3A` |
| Peligro suave (Wash) | `#F8EEEE` |
| Información | `#3B82F6` |
| Información suave | `#F1F5FF` |
| Enfoque (Focus) | `#3A5AB3` |

#### Reglas de armonía cromática

- Priorizar la familia verde (`#24665C` y `#F1F6F4`) para acciones principales, navegación y estados activos.
- Reservar los colores de acento (`#B33A3A`, `#F59E0B` y `#3B82F6`) para estados semánticos.
- Utilizar fondos neutros para separar áreas sin introducir ruido visual.
- Evitar el uso excesivo de colores intensos.
- Mantener suficiente contraste entre el texto y su fondo.
- No depender exclusivamente del color para comunicar estados.

### 3.2. Tipografía

Se adopta **Asap**, presente en las vistas de Acceso (02) y Reportes (09), por su legibilidad y tono cercano, adecuado al ámbito académico.

Se mantiene una escala tipográfica consistente, priorizando la lectura escaneable.

| Clase | Tamaño |
|---|---|
| Display | 32–36 px |
| H1 | 28 px |
| H2 | 20 px |
| H3 | 18 px |
| H4 | 16 px |
| Body | 14–15 px |
| Body Small | 13 px |
| Caption | 12 px |
| Label | 12 px |

### 3.3. Espaciado, Radios, Sombras y Transiciones

Se utiliza un sistema de espaciado basado en múltiplos de 4 px para garantizar un ritmo visual consistente.

#### Espaciado

Valores permitidos:

`4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64 px`

#### Radios

| Tamaño | Valor |
|---|---|
| Small (sm) | 8 px |
| Medium (md) | 10 px |
| Large (lg) | 12 px |
| Extra Large (xl) | 16 px |

#### Sombras

Se prioriza la ausencia de sombras, utilizando elevaciones sutiles cuando sean necesarias para diferenciar superficies.

| Tipo | Valor |
|---|---|
| Predeterminada | `none` |
| Sutil | `0 1px 2px rgba(20, 45, 38, 0.02)` |
| Sutil alternativa | `0 1px 3px rgba(20, 45, 38, 0.03)` |
| Tarjeta | `0 1px 3px rgba(20, 45, 38, 0.06)` |
| Tarjeta alternativa | `0 1px 2px rgba(20, 45, 38, 0.04)` |

#### Transiciones

| Tipo | Valor |
|---|---|
| Interacción | `150ms ease-in-out` |
| Transición sutil | `200ms ease-in-out` |

Las transiciones deben ser breves y discretas, sin distraer al usuario ni ralentizar la percepción de respuesta.

---

## 4. Patrones de Diseño Extraídos del Contenedor (Archivo 09)

Del archivo `09 · Reportes facultad — Expediente compartido.html` se toma únicamente el contenedor, su organización, composición y lógica de diseño, excluyendo el sidebar y el header.

Este patrón se establece como una base reutilizable para vistas que requieren selección de opciones y una vista previa contextual.

### 4.1. Layout del Contenedor

El patrón utiliza un layout de dos columnas con una jerarquía clara.

| Zona | Función |
|---|---|
| Listado / Selección (izquierda) | Mostrar las opciones disponibles y permitir seleccionar una. |
| Panel contextual / Vista previa (derecha) | Mostrar información de la opción seleccionada y orientar al usuario sobre los siguientes pasos. |

#### Aplicaciones recomendadas

Este layout es adecuado para:

- Reportes.
- Actividades y tareas.
- Materias.
- Bitácoras.
- Avisos y comunicaciones.
- Cualquier vista donde sea conveniente comparar opciones y consultar detalles sin abandonar el contexto actual.

Su principal ventaja es reducir la navegación innecesaria y mantener la información organizada.

### 4.2. Organización del Listado de Opciones

El listado utiliza elementos seleccionables con estados visuales explícitos.

| Elemento | Patrón |
|---|---|
| Opción seleccionable | Botón de ancho completo (`w-full flex`) con borde inferior entre elementos. |
| Estado activo / seleccionado | Fondo `bg-[var(--brand-wash)]`, icono en color de marca y badge «Seleccionado». |
| Iconografía contextual | Iconos de Tabler alineados con el título mediante `mt-0.5`. |
| Jerarquía del contenido | Título, descripción y metadatos. |
| Metadatos | Información como fuente y alcance. |
| Indicador de navegación | `ti-chevron-right` para opciones no seleccionadas. |
| Separadores | Bordes sutiles para distinguir las opciones. |

El estado seleccionado debe ser reconocible inmediatamente, sin depender exclusivamente del color.

### 4.3. Panel de Vista Previa / Contexto

El panel derecho establece un patrón que reduce la sobrecarga informativa: explica qué es la opción seleccionada, de dónde proviene y qué puede esperar el usuario, sin mostrar datos innecesarios antes de tiempo.

| Zona | Organización |
|---|---|
| Encabezado del panel | Título y subtítulo contextual, por ejemplo, «Configuración y disponibilidad». |
| Metadatos | Grid de dos columnas con información como «Fuente de datos» y «Alcance». |
| Área de contenido / Resultados | Estado vacío centrado con icono grande, título, descripción y llamada a la acción (CTA). |
| Pie del panel | Texto informativo y acción secundaria, como «Exportar», deshabilitada cuando corresponda. |

La información del panel debe adaptarse a la selección actual y mostrar únicamente lo necesario para orientar al usuario.

### 4.4. Estados Vacíos y Retroalimentación

Los estados vacíos deben ser útiles y orientar al usuario sobre lo que puede hacer a continuación.

Se definen los siguientes estados:

| Estado | Comportamiento esperado |
|---|---|
| Vacío (sin datos) | Explicar que no existen datos y, cuando corresponda, indicar cómo generarlos. |
| Sin selección | Invitar al usuario a seleccionar una opción del listado. |
| Cargando | Comunicar que el contenido se está procesando sin generar cambios bruscos en el layout. |
| Error / Sin resultados con filtros | Explicar el problema y ofrecer una acción para recuperarse, como limpiar los filtros. |
| Habilitado / Deshabilitado | Diferenciar claramente las acciones disponibles de las que todavía no pueden ejecutarse. |

Los mensajes deben ser breves, claros y orientados a la acción.

---

## 5. Propuesta de UI Académica: Más Visual y Menos Sobrecargada

La propuesta busca convertir la interfaz en una experiencia académica más intuitiva, visual y fácil de recorrer.

### 5.1. Filosofía de Reducción de Sobrecarga

Se aplican las siguientes estrategias:

- **Respiración visual:** utilizar espacios en blanco para separar bloques y facilitar la lectura.
- **Escaneo primero:** destacar títulos, estados, fechas y acciones importantes.
- **Agrupación inteligente:** reunir información relacionada en un mismo bloque.
- **Revelado progresivo (Progressive Disclosure):** mostrar los detalles secundarios solo cuando sean necesarios.
- **Jerarquía cromática moderada:** utilizar el color para reforzar la jerarquía, no para sustituirla.
- **Un bloque = una idea:** evitar mezclar información que cumple propósitos diferentes.
- **Reducción de redundancias:** no repetir datos que ya sean evidentes en el contexto.
- **Acciones claras:** hacer que la acción principal de cada vista sea fácil de identificar.

### 5.2. Mejora de Elementos Visuales

| Componente | Directriz de diseño |
|---|---|
| Tarjetas | Reducir la cantidad de información por tarjeta, mejorar la separación y destacar el dato principal. |
| Iconos | Utilizar iconografía contextual con wrappers suaves y tamaños consistentes. |
| Badges / Estados | Mantener etiquetas breves y semánticas, con colores reservados para estados relevantes. |
| Botones | Diferenciar claramente acciones primarias, secundarias y destructivas. |
| KPIs / Resumen | Mostrar únicamente indicadores útiles para comprender el estado académico actual. |
| Listados | Mejorar la separación, alineación y jerarquía entre título, descripción y metadatos. |
| Panel contextual / Preview | Presentar información relacionada con la selección actual y orientar sobre el siguiente paso. |

### 5.3. Aplicación del Patrón 09 a Otras Páginas

El layout de listado más vista previa puede reutilizarse en distintas áreas de la aplicación.

| Página | Listado (izquierda) | Panel contextual (derecha) |
|---|---|---|
| Materias | Listado de materias con su estado y avance. | Resumen de la materia seleccionada, progreso y accesos relevantes. |
| Actividades / Tareas | Actividades pendientes agrupadas por «Hoy» y «Esta semana». | Detalles, fecha de entrega y acciones disponibles. |
| Reportes | Tipos de informe disponibles. | Descripción, fuente, alcance y opciones de consulta o exportación. |
| Avisos | Listado cronológico con estados de lectura. | Contenido completo y acciones relacionadas. |
| Bitácoras | Semanas organizadas según su estado. | Detalle de la semana seleccionada y su seguimiento. |

La reutilización del patrón debe mantener una estructura coherente sin obligar a que todas las páginas tengan exactamente el mismo contenido.

---

## 6. Guía de Implementación para Nuevas Vistas

Toda nueva vista debe respetar las siguientes reglas para mantener la coherencia visual y funcional de Praxis.

### 6.1. Checklist de Validación

#### Pertinencia

- [ ] ¿La vista responde a una necesidad real del estudiante?
- [ ] ¿Existe un patrón definido que pueda reutilizarse?
- [ ] ¿Cada componente tiene una función clara?

#### Estructura

- [ ] ¿Respeta el orden general: encabezado, acciones, resumen, contenido y complemento?
- [ ] ¿La información está agrupada de forma lógica?
- [ ] ¿La acción principal es evidente?

#### Reducción de sobrecarga

- [ ] ¿Cada bloque comunica una idea principal?
- [ ] ¿Se aplica el revelado progresivo cuando hay información secundaria?
- [ ] ¿Las descripciones son breves, preferiblemente de menos de 40 palabras?
- [ ] ¿Se han eliminado datos redundantes?

#### Claridad visual

- [ ] ¿Se utilizan iconos con wrappers suaves cuando aportan valor?
- [ ] ¿La jerarquía se establece mediante tipografía, espaciado y composición, no solo mediante color?
- [ ] ¿Los estados son explícitos y fáciles de distinguir?
- [ ] ¿Existe suficiente espacio entre los elementos?

#### Armonía visual

- [ ] ¿Se utiliza la paleta de colores definida?
- [ ] ¿Se respetan los radios y el sistema de espaciado de 4 px?
- [ ] ¿Se priorizan las sombras nulas o sutiles?
- [ ] ¿Las transiciones son breves y discretas?

#### Escaneabilidad

- [ ] ¿Se comprende el propósito de la vista en 3–5 segundos?
- [ ] ¿La información más útil aparece primero?
- [ ] ¿Las acciones principales se identifican fácilmente?
- [ ] ¿Se distinguen los datos prioritarios de los complementarios?

#### Accesibilidad

- [ ] ¿Existe un indicador de foco visible que utilice `#3A5AB3`?
- [ ] ¿El contraste entre texto y fondo es suficiente?
- [ ] ¿Los estados pueden identificarse sin depender exclusivamente del color?
- [ ] ¿Los controles y acciones tienen nombres comprensibles?
- [ ] ¿Los estados deshabilitados siguen siendo reconocibles?

#### Coherencia

- [ ] ¿La vista se percibe como parte de la misma aplicación?
- [ ] ¿Se utiliza un vocabulario académico claro?
- [ ] ¿Se han reutilizado los patrones existentes antes de crear otros nuevos?
- [ ] ¿La experiencia es predecible y consistente con el resto de Praxis?

---

## 7. Conclusión

Este contexto fusionado conserva la solidez estructural de `designContext.md`, aprovecha la claridad organizativa del contenedor de Reportes (09) y hereda la sensación serena, moderna y académica de la vista de Acceso (02).

El resultado es una interfaz más visual, intuitiva y menos sobrecargada, centrada en los siguientes objetivos:

- Priorizar el escaneo rápido de información.
- Orientar al estudiante sobre su situación académica y sus próximas acciones.
- Reforzar los estados vacíos útiles y la retroalimentación contextual.
- Reutilizar el patrón de selección y vista previa para reducir la navegación.
- Mantener una paleta armonizada y una jerarquía visual coherente.
- Favorecer una experiencia académica clara, accesible y predecible.

**Principio rector:** cada vista debe mostrar primero lo importante, ofrecer contexto cuando sea necesario y facilitar la siguiente acción sin sobrecargar al estudiante.