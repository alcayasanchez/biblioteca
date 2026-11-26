# Biblioteca digital

Una biblioteca personal en HTML: catálogo con búsqueda y filtros, fichas de lectura interactivas y enlaces a textos completos. No necesita servidor, base de datos ni dependencias.

## Estructura

```text
biblioteca/
├── index.html              # Portada y catálogo
├── catalogo.js             # Lista de libros (aquí se añaden las entradas)
├── assets/
│   ├── biblioteca.css      # Estilos de la portada
│   └── biblioteca.js       # Tema, búsqueda, filtros y render del catálogo
├── libros/
│   ├── mito-de-sisifo/     # Primera ficha: guía interactiva
│   │   ├── index.html
│   │   └── el_mito_de_sisifo.pdf   # PDF publicado (autorizado por su titular)
│   └── _plantilla/         # Plantilla para fichas nuevas
│       └── index.html
└── README.md
```

## Cómo verla

Abre `index.html` con doble clic. Para publicarla en GitHub Pages: `Settings → Pages → Deploy from a branch → master / root` (rama por defecto del repositorio).

## Cómo añadir un libro

1. Copia `libros/_plantilla/` a `libros/nombre-del-libro/`.
2. Sustituye los marcadores `{{...}}` por los datos reales.
3. Añade un objeto en `catalogo.js` con: `id`, `titulo`, `autor`, `anio`, `genero`, `tipo`, `descripcion`, `etiquetas`, `portada` (emoji), `color` (dos colores), `ruta`, `pdf` (URL o `""`), `pdfLabel` (texto del botón), `pdfNota` y `destacado`.
4. Comprueba que la ficha abre y que aparece en el catálogo.

La ficha de *El mito de Sísifo* es autosuficiente (CSS y JS incluidos), así que puedes copiarla como base si quieres una guía más elaborada.

## Cuestionario

Se ha eliminado a petición del propietario. Cada ficha conserva resumen, conceptos, línea de tiempo, notas y progreso de lectura.

## Enlaces a textos completos y derechos

La ficha de *El mito de Sísifo* incluye la **edición en castellano** de Alianza Editorial (traducción de Luis Echávarri) como [el_mito_de_sisifo.pdf](libros/mito-de-sisifo/el_mito_de_sisifo.pdf), un PDF de 69 páginas. Se publica en el repositorio y en GitHub Pages con **autorización expresa de su titular**, confirmada por el propietario de esta biblioteca. El catálogo y la ficha enlazan directamente al archivo con un botón «Abrir PDF ↗».

El archivo está exceptuado de la regla general `*.pdf` de `.gitignore`. Esta biblioteca no reproduce el texto completo dentro de sus propias páginas: sólo ofrece resúmenes originales, citas breves y el enlace al PDF.

Al añadir un libro con `pdf`, usa `pdfLabel` para el texto del botón y `pdfNota` para indicar la procedencia y los derechos. Si el PDF no puede publicarse, añade una regla de exclusión en `.gitignore`.

## Publicar cambios

```bash
git add .
git commit -m "Añade un libro"
git push
```
