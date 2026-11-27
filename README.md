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
│   ├── bodas-de-sangre/    # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── bodas_de_sangre.pdf    # PDF publicado (dominio público)
│   ├── iliada/             # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── iliada.pdf             # PDF publicado (autorización de distribución)
│   ├── arte-de-la-guerra/  # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── el_arte_de_la_guerra.pdf  # PDF publicado (libre difusión)
│   ├── el-extranjero/      # Ficha: guía interactiva
│   │   ├── index.html
│   │   └── el_extranjero.pdf       # PDF publicado (autorización del titular)
│   └── _plantilla/         # Plantilla para fichas nuevas
│       └── index.html
└── README.md
```

## Derechos de los textos publicados

- *El mito de Sísifo*, de Albert Camus: PDF publicado con autorización confirmada de su titular.
- *Don Quijote de la Mancha*, de Miguel de Cervantes: dominio público; texto de Project Gutenberg (ebook n.º 2000).
- *Bodas de sangre*, de Federico García Lorca: dominio público en España; texto de Wikisource.
- *La Ilíada*, de Homero: PDF publicado con autorización de distribución confirmada por el usuario. No se considera automáticamente de dominio público; cualquier redistribución debe respetar esa autorización.
- *El arte de la guerra*, de Sun Tzu: clásico antiguo; el PDF publicado es la edición digital de la Biblioteca Virtual Omegalfa (enero de 2018), que declara expresamente «Texto de libre difusión».
- *El extranjero*, de Albert Camus: novela protegida por derechos de autor (Camus murió en 1960). El PDF se publica con autorización confirmada del titular de los derechos de distribución, igual que *El mito de Sísifo*.

Las guías interactivas son elaboraciones originales: contienen resúmenes propios, análisis y citas breves, no una copia de las obras.

## Cómo verla

Abre `index.html` con doble clic. Para publicarla en GitHub Pages: `Settings → Pages → Deploy from a branch → master / root` (rama por defecto del repositorio).

## Cómo añadir un libro

1. Copia `libros/_plantilla/` a `libros/nombre-del-libro/`.
2. Sustituye los marcadores `{{...}}` por los datos reales.
3. Añade un objeto en `catalogo.js` con: `id`, `titulo`, `autor`, `anio`, `genero`, `tipo`, `descripcion`, `resumen` (el que aparece en la tarjeta), `etiquetas`, `portada` (emoji), `color` (dos colores), `ruta`, `pdf` (URL o `""`), `pdfLabel` (texto del botón), `pdfNota` y `destacado`.
4. Si vas a publicar el PDF, añade una excepción para ese archivo en `.gitignore` (por defecto todos los PDF se ignoran).
5. Comprueba que la ficha abre y que aparece en el catálogo.
6. Antes de publicar un texto, confirma que es de dominio público o que tienes autorización de distribución, y anótalo aquí y en la sección «Derechos de los textos publicados».

Las fichas de *El mito de Sísifo*, *Don Quijote de la Mancha*, *Bodas de sangre*, *La Ilíada*, *El arte de la guerra* y *El extranjero* son autosuficientes (CSS y JS incluidos), así que puedes copiar cualquiera como base si quieres una guía más elaborada.

## Publicar cambios

```bash
git add .
git commit -m "Añade un libro"
git push
```

## Página web

https://alcayasanchez.github.io/biblioteca/
