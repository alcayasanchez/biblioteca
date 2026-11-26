/* Catálogo de la biblioteca.
   Para añadir un libro, copia un objeto dentro de window.CATALOGO y rellena los campos.
   - ruta: ruta relativa desde la raíz del repositorio, p. ej. "libros/mi-libro/index.html"
   - portada: un emoji o carácter grande para la portada generada
   - color: par de colores para el degradado de la portada
   - pdf: URL o ruta relativa al texto completo; deja "" si no hay enlace
   - pdfLabel: texto del botón (por defecto "PDF ↗")
   - pdfNota: advertencia corta sobre la fuente/derechos del acceso
   - resumen: texto que aparece en la tarjeta de la portada (si falta, usa descripcion)
*/
window.CATALOGO = [
  {
    id: "mito-de-sisifo",
    titulo: "El mito de Sísifo",
    autor: "Albert Camus",
    anio: "1942",
    genero: "Filosofía",
    tipo: "Guía interactiva",
    descripcion: "Resumen capítulo a capítulo, vocabulario de conceptos, línea temporal, notas personales y enlaces al texto completo del ensayo.",
    resumen: "Un condenado empuja una roca cuesta arriba y, al llegar arriba, la roca vuelve a caer. Camus pregunta qué nos queda cuando el esfuerzo no tiene sentido y responde con una invitación a rebelarse contra la desesperación: hay que imaginar a Sísifo feliz.",
    etiquetas: ["Absurdo", "Existencialismo", "Ensayo"],
    portada: "🪨",
    color: ["#9a3b2f", "#c2763a"],
    ruta: "libros/mito-de-sisifo/index.html",
    pdf: "libros/mito-de-sisifo/el_mito_de_sisifo.pdf",
    pdfLabel: "Abrir PDF ↗",
    pdfNota: "Castellano · 69 páginas · publicado con autorización del titular",
    destacado: true
  },
  {
    id: "don-quijote",
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: "1605 / 1615",
    genero: "Novela",
    tipo: "Guía interactiva",
    descripcion: "Mapa de las dos partes, episodios fundamentales, personajes, vocabulario, línea temporal, notas personales y texto completo en dominio público.",
    resumen: "Un hidalgo arruinado lee tantos libros de caballerías que decide hacerse caballero andante y reparar injusticias. Cervantes se ríe de sus molinos convertidos en gigantes, pero también retrata con ternura la necesidad de inventar una vida más hermosa que la real.",
    etiquetas: ["Siglo de Oro", "Sátira", "Dominio público"],
    portada: "🐴",
    color: ["#5b4636", "#b98b3f"],
    ruta: "libros/don-quijote/index.html",
    pdf: "libros/don-quijote/don_quijote.pdf",
    pdfLabel: "Abrir PDF ↗",
    pdfNota: "Castellano · 536 páginas · Project Gutenberg, dominio público",
    destacado: true
  },
  {
    id: "bodas-de-sangre",
    titulo: "Bodas de sangre",
    autor: "Federico García Lorca",
    anio: "1931",
    genero: "Teatro",
    tipo: "Guía interactiva",
    descripcion: "Los tres actos y siete cuadros, personajes, símbolos, contexto y texto completo de la tragedia.",
    resumen: "Una novia huye el día de su boda con el hombre que ama y el novio sale en su busca. Lorca convierte un suceso real almeriense en una tragedia de deseos, honra y cuchillos donde la luna y la muerte acompañan el final.",
    etiquetas: ["Tragedia rural", "Lorca", "Dominio público"],
    portada: "🌙",
    color: ["#5a2026", "#b06a4a"],
    ruta: "libros/bodas-de-sangre/index.html",
    pdf: "libros/bodas-de-sangre/bodas_de_sangre.pdf",
    pdfLabel: "Abrir PDF ↗",
    pdfNota: "Castellano · 46 páginas · Wikisource, dominio público en España",
    destacado: true
  }
];
