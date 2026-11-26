/* Catálogo de la biblioteca.
   Para añadir un libro, copia un objeto dentro de window.CATALOGO y rellena los campos.
   - ruta: ruta relativa desde la raíz del repositorio, p. ej. "libros/mi-libro/index.html"
   - portada: un emoji o carácter grande para la portada generada
   - color: par de colores para el degradado de la portada
   - pdf: URL pública opcional (descarga o préstamo); deja "" si no hay enlace
   - pdfLocal: ruta relativa a un PDF guardado sólo en local (no se publica)
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
    pdf: "https://archive.org/details/elmitodesisifo0000camu",
    pdfLocal: "libros/mito-de-sisifo/El%20mito%20de%20S%C3%ADsifo.pdf",
    pdfLabel: "Abrir PDF local ↗",
    pdfLabelWeb: "Pedir prestado ↗",
    pdfNota: "Copia local no publicada · Alianza Editorial, trad. Luis Echávarri",
    destacado: true
  }
];
