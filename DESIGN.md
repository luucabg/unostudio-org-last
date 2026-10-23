---
name: unostudio
description: Fotografía, trabajo real en movimiento y un cierre azul ilustrado.
colors:
  background: "#ffffff"
  ink: "#202020"
  secondary: "#656565"
  muted: "#717171"
  border: "#e5e5e3"
  accent: "#304d5d"
  footer: "#0f46a3"
  footer-secondary: "#d3dff8"
  selection: "#f5d8bf"
  cream: "#f2e6cc"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: 1.19
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "46px"
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  control: "999px"
  frame: "16px"
  image: "10px"
  mobile-image: "8px"
spacing:
  small: "8px"
  medium: "16px"
  large: "24px"
  section: "100px"
---

# Sistema de diseño de unostudio

Base blanca y Manrope servida mediante next/font. Titular alineado a la izquierda, texto negro y gris, una acción breve y una cala mediterránea original bajo el trabajo. Fotografía generada con agua azul, piedra clara y luz natural. Contenedor de 1220px con márgenes de 48px, 24px y 20px. Titular principal de 56px en escritorio y 36px en móvil.

La navegación prioriza Diseño web, Software a medida, IA, SEO y Servicios. Cada enlace lleva a una ruta propia. El menú móvil aparece por debajo de 1000px, se cierra con Escape y devuelve el foco.

La tira muestra varias capturas reales a la vez, con tarjetas de 460px, 360px o 280px. Sus dos grupos idénticos forman un bucle de desplazamiento nativo a 35px por segundo. Se detiene con el ratón, el foco, un gesto táctil, al quedar fuera de pantalla y al ocultarse la pestaña. Se arrastra con ratón en ambas direcciones y admite desplazamiento táctil nativo. No incluye texto ni controles debajo. Las diez imágenes se cargan antes de iniciar el avance. Con movimiento reducido se conserva una tira estática navegable. Los originales siguen accesibles una sola vez al lector de pantalla.

Pulsar una captura abre un dialog nativo con imagen grande, enlace a la web cuando existe y cierre mediante botón, Escape o fondo. Conserva el foco y permite desplazar la imagen en móvil. La captura antigua está identificada como versión anterior y no inventa un enlace.

El scroll mueve ligeramente el paisaje, cambia el énfasis de tres frases y dibuja el recorrido del proceso. Nunca oculta información para esperar una animación. Movimiento reducido suprime estas transformaciones y la reproducción de la tira.

La primera llegada a inicio incorpora una apertura de 800ms. Dos paneles blancos se separan desde el centro y el logo se desvanece al abrirse. La navegación interna de regreso no la repite. Se omite con movimiento reducido, anclas o scroll restaurado, y cualquier interacción la interrumpe. La capa es decorativa, no bloquea el puntero ni el scroll y se retira al terminar. CSS conserva una salida segura sin JavaScript.

Los servicios usan details nativo y etiquetas Ver detalles y Cerrar. No hay flechas ni signos de suma. El componente Button gratuito de Arc se usa en menú, visor, ejemplos de IA y copia del correo. Las referencias públicas de 21st.dev inspiran continuidad y respuesta, sin importar bloques ajenos.

Footer azul #0f46a3, logo original, grupos de servicios, exploración y contacto, enlaces legales y paisaje costero ilustrado en la base. Sin transición de degradado. El texto secundario tiene un tono claro de la misma familia azul. No se muestran redes sociales sin una dirección confirmada ni atribución de Pexels.

La marca usa el archivo horizontal original logo_nav.png, con dimensiones 1995 por 371 y altura automática. El contenedor no recorta la imagen. Se conserva completa en cabecera, entrada y footer. Las acciones táctiles miden al menos 44px. El foco de teclado usa contraste suficiente, incluido el fondo azul.

La sección de SEO en inicio y la página /seo reutilizan los títulos, columnas, botones y preguntas desplegables del sitio. No necesitan una nueva dirección visual ni componentes externos. Los proyectos tienen enlaces visibles además del visor. La imagen para compartir usa el logo original sobre azul y texto blanco, en formato 1200 por 630.

La procedencia de todos los recursos se registra en .impeccable/asset-provenance.json. No se añaden clientes, métricas ni testimonios sin evidencia.
