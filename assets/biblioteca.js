(function(){
  "use strict";
  const $ = s => document.querySelector(s);
  const CAT = window.CATALOGO || [];
  let genero = "Todo";

  /* Tema */
  let tema = "claro";
  try{ tema = localStorage.getItem("biblioteca-tema") || (matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro"); }catch(e){}
  function aplicarTema(){
    document.documentElement.dataset.theme = tema === "oscuro" ? "dark" : "light";
    $("#tema").textContent = tema === "oscuro" ? "☀ Modo día" : "◐ Modo noche";
  }
  $("#tema").addEventListener("click", () => {
    tema = tema === "oscuro" ? "claro" : "oscuro";
    try{ localStorage.setItem("biblioteca-tema", tema); }catch(e){}
    aplicarTema();
  });
  aplicarTema();

  /* Barra de progreso */
  const barra = $("#barra-progreso");
  function progreso(){
    const h = document.documentElement;
    const total = h.scrollHeight - h.clientHeight;
    barra.style.width = (total > 0 ? (h.scrollTop / total) * 100 : 0) + "%";
  }
  addEventListener("scroll", progreso, {passive:true});
  addEventListener("resize", progreso);
  progreso();

  /* Catálogo */
  const generos = ["Todo"].concat(Array.from(new Set(CAT.map(l => l.genero))));
  const filtros = $("#filtros");
  generos.forEach(g => {
    const b = document.createElement("button");
    b.className = "filtro" + (g === "Todo" ? " activo" : "");
    b.textContent = g;
    b.addEventListener("click", () => {
      genero = g;
      filtros.querySelectorAll(".filtro").forEach(x => x.classList.toggle("activo", x === b));
      pintar();
    });
    filtros.appendChild(b);
  });

  function tarjeta(l){
    const insignia = l.destacado ? '<span class="insignia">Destacado</span>' : "";
    const pdf = l.pdf
      ? '<a class="btn secondary" href="' + l.pdf + '" target="_blank" rel="noopener">' + (l.pdfLabel || "Abrir PDF ↗") + '</a>' +
        '<p class="nota-pdf">' + (l.pdfNota || "Enlace al texto completo.") + '</p>'
      : '<p class="nota-pdf">Texto completo: consulta la ficha.</p>';
    return '<article class="libro">' +
      '<div class="portada" style="background:linear-gradient(135deg,' + l.color[0] + ',' + l.color[1] + ')">' +
        insignia + "<span>" + l.portada + "</span>" +
        '<span class="titulo-portada">' + l.genero + " · " + l.anio + "</span></div>" +
      '<div class="cuerpo">' +
        "<h3>" + l.titulo + "</h3>" +
        '<div class="meta">' + l.autor + " · " + l.tipo + "</div>" +
        '<span class="resumen-titulo">Resumen</span>' +
        '<p class="resumen">' + (l.resumen || l.descripcion) + "</p>" +
        '<div class="etiquetas">' + l.etiquetas.map(t => "<i>" + t + "</i>").join("") + "</div>" +
      "</div>" +
      '<div class="acciones">' +
        '<a class="btn primary" href="' + l.ruta + '">Leer la guía →</a>' + pdf +
      "</div></article>";
  }

  function pintar(){
    const q = $("#buscar").value.trim().toLowerCase();
    const lista = CAT.filter(l => {
      const okGenero = genero === "Todo" || l.genero === genero;
      const texto = [l.titulo, l.autor, l.genero, l.tipo, l.descripcion, l.resumen].concat(l.etiquetas).join(" ").toLowerCase();
      return okGenero && (!q || texto.includes(q));
    });
    $("#rejilla").innerHTML = lista.length
      ? lista.map(tarjeta).join("")
      : '<div class="vacio">No hay libros que coincidan con la búsqueda.</div>';
    $("#contador").textContent = lista.length + (lista.length === 1 ? " libro" : " libros");
  }
  $("#buscar").addEventListener("input", pintar);
  $("#total").textContent = CAT.length;
  $("#generos").textContent = generos.length - 1;
  pintar();
})();
