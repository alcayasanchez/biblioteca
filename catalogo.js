/* Catálogo de la biblioteca.
   Para añadir un libro, copia un objeto dentro de window.CATALOGO y rellena los campos.
   - ruta: ruta relativa desde la raíz del repositorio, p. ej. "libros/mi-libro/index.html"
   - portada: un emoji o carácter grande para la portada generada
   - color: par de colores para el degradado de la portada
   - pdf: URL externa opcional al texto completo; deja "" si no hay enlace
   - pdfNota: advertencia corta sobre la fuente/derechos del PDF
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
    pdf: "https://archive.org/download/le_mythe_de_sisyphe/mythe_de_sisyphe.pdf",
    pdfNota: "Internet Archive · francés · metadatos con marca PD (el régimen varía por país)",
    destacado: true
  }
];
