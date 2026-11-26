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
│   ├── mito-de-sisifo/     # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── el_mito_de_sisifo.pdf   # PDF publicado (autorizado por su titular)
│   ├── don-quijote/        # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── don_quijote.pdf        # PDF publicado (dominio público)
│   └── _plantilla/         # Plantilla para fichas nuevas
│       └── index.html
└── README.md
```

## Cómo verla

Abre `index.html` con doble clic. Para publicarla en GitHub Pages: `Settings → Pages → Deploy from a branch → master / root` (rama por defecto del repositorio).

## Cómo añadir un libro

1. Copia `libros/_plantilla/` a `libros/nombre-del-libro/`.
2. Sustituye los marcadores `{{...}}` por los datos reales.
3. Añade un objeto en `catalogo.js` con: `id`, `titulo`, `autor`, `anio`, `genero`, `tipo`, `descripcion`, `resumen` (el que aparece en la tarjeta), `etiquetas`, `portada` (emoji), `color` (dos colores), `ruta`, `pdf` (URL o `""`), `pdfLabel` (texto del botón), `pdfNota` y `destacado`.
4. Comprueba que la ficha abre y que aparece en el catálogo.

Las fichas de *El mito de Sísifo* y *Don Quijote de la Mancha* son autosuficientes (CSS y JS incluidos), así que puedes copiar cualquiera como base si quieres una guía más elaborada.


## Publicar cambios

```bash
git add .
git commit -m "Añade un libro"
git push
```
 ## Página web
 https://alcayasanchez.github.io/biblioteca/
