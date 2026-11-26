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
│   │   └── El mito de Sísifo.pdf   # copia local, ignorada por git
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

La ficha de *El mito de Sísifo* usa la **edición en castellano** de Alianza Editorial (1985, traducción de Luis Echávarri). El PDF está guardado en `libros/mito-de-sisifo/` para uso local y **no se sube al repositorio** (regla `*.pdf` en `.gitignore`). Al abrir `index.html` desde tu equipo, el catálogo y la ficha enlazan ese archivo con un botón «Abrir PDF local». En GitHub Pages, donde el archivo no existe, muestran en su lugar el acceso legítimo al préstamo bibliotecario de Internet Archive (`elmitodesisifo0000camu`).

La traducción está protegida por derechos de autor: no se publica ni se redistribuye el PDF. Esta biblioteca no reproduce textos completos dentro de sus páginas: sólo ofrece resúmenes originales, citas breves y enlaces legítimos.

Al añadir un libro con `pdf`, usa `pdfLabel` / `pdfLabelWeb` para distinguir el botón local del público y `pdfLocal` para la ruta del archivo guardado sólo en tu equipo.

## Publicar cambios

```bash
git add .
git commit -m "Añade un libro"
git push
```
