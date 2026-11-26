/* Catálogo de la biblioteca.
   Para añadir un libro, copia un objeto dentro de window.CATALOGO y rellena los campos.
   - ruta: ruta relativa desde la raíz del repositorio, p. ej. "libros/mi-libro/index.html"
   - portada: un emoji o carácter grande para la portada generada
   - color: par de colores para el degradado de la portada
   - pdf: URL o ruta relativa al texto completo; deja "" si no hay enlace
   - pdfLabel: texto del botón (por defecto "PDF ↗")
   - pdfNota: advertencia corta sobre la fuente/derechos del acceso
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
    etiquetas: ["Siglo de Oro", "Sátira", "Dominio público"],
    portada: "🐴",
    color: ["#5b4636", "#b98b3f"],
    ruta: "libros/don-quijote/index.html",
    pdf: "libros/don-quijote/don_quijote.pdf",
    pdfLabel: "Abrir PDF ↗",
    pdfNota: "Castellano · 536 páginas · Project Gutenberg, dominio público",
    destacado: true
  }
];
