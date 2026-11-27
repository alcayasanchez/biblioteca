# Biblioteca digital

Una biblioteca personal en HTML: catálogo con búsqueda y filtros, fichas de lectura interactivas y enlaces a textos completos. No necesita servidor, base de datos ni dependencias.

## Cómo verla

Abre `index.html` con doble clic. Para publicarla en GitHub Pages: `Settings → Pages → Deploy from a branch → master / root` (rama por defecto del repositorio).

## Cómo añadir un libro

1. Copia `libros/_plantilla/` a `libros/nombre-del-libro/`.
2. Sustituye los marcadores `{{...}}` por los datos reales.
3. Añade un objeto en `catalogo.js` con: `id`, `titulo`, `autor`, `anio`, `genero`, `tipo`, `descripcion`, `resumen` (el que aparece en la tarjeta), `etiquetas`, `portada` (emoji), `color` (dos colores), `ruta`, `pdf` (URL o `""`), `pdfLabel` (texto del botón), `pdfNota` y `destacado`.
4. Si vas a publicar el PDF, añade una excepción para ese archivo en `.gitignore` (por defecto todos los PDF se ignoran).
5. Comprueba que la ficha abre y que aparece en el catálogo.
6. Antes de publicar un texto, confirma que es de dominio público o que tienes autorización de distribución, y anótalo aquí y en la sección «Derechos de los textos publicados».

Las fichas de *El mito de Sísifo*, *Don Quijote de la Mancha*, *Bodas de sangre* y *La Ilíada* son autosuficientes (CSS y JS incluidos), así que puedes copiar cualquiera como base si quieres una guía más elaborada.

## Publicar cambios

```bash
git add .
git commit -m "Añade un libro"
git push
```

## Página web

https://alcayasanchez.github.io/biblioteca/
