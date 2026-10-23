---
name: unostudio
description: Proyectos en movimiento, superficies blancas y acciones claras.
colors:
  background: "#ffffff"
  ink: "#191b1f"
  secondary: "#666b73"
  border: "#e5e8ec"
  accent: "#087bb8"
  brand-blue: "#38b6ff"
  sky: "#e6f3fc"
  sand: "#ece9e2"
  sage: "#e6ede5"
  lavender: "#ecebf3"
  peach: "#f3e9de"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(44px, 4.25vw, 60px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 3.7vw, 51px)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  control: "999px"
  project: "12px"
  showcase: "10px"
  service: "12px"
spacing:
  small: "8px"
  medium: "16px"
  large: "24px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.background}"
    rounded: "{rounded.control}"
    padding: "12px 23px"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 23px"
---

# Sistema de diseño de unostudio

## Overview

Base blanca, limpia y sencilla, elegida por el usuario. La media original construye una escena con profundidad y la tipografía organiza la lectura. El azul señala servicios y selección. El nombre siempre se escribe unostudio.

## Colors

Blanco para página, contacto y servicios. Tinta para acciones y titulares, gris secundario legible y bordes suaves. Las muestras de trabajo se apoyan en un neutro #fafbfc. No hay gradientes, formas de fondo ni paneles de color decorativos. Los botones Arc consumen las variables semánticas de app/globals.css.

## Typography

Manrope se sirve localmente mediante next/font. Titulares de peso 500 y texto de peso 400. El titular principal llega a 60px en escritorio, 49px en portátil, 50px en tableta y 40px en móvil. Encabezados de sección entre 34px y 51px. El texto descriptivo usa entre 13px y 16px. Los botones de servicios usan 12px en móvil y las etiquetas secundarias entre 10px y 12px. Los detalles de las ilustraciones de interfaz son decorativos y se ocultan al lector de pantalla.

## Layout

Contenedor máximo de 1240px. Portada asimétrica: texto y seis botones de servicios a la izquierda, capturas superpuestas a la derecha. Pasa a una columna antes de 800px. Márgenes laterales de 48px, 32px y 20px según el ancho. La galería alterna alturas en escritorio y pasa a una columna por debajo de 580px. Entre secciones hay 104px en escritorio y 57px en móvil pequeño. Las explicaciones de servicios muestran una sola opción a la vez.

## Elevation & Depth

Las capturas se separan con sombras desplazadas y suaves. La escena principal usa perspectiva de 1100px y planos a -30px y 45px. El puntero modifica su inclinación con resortes de rigidez 130 y amortiguación 20. El botón principal usa una sombra corta y un reflejo interior discreto. El resto se organiza mediante espacio y bordes de un píxel.

## Shapes

Botones principales redondeados y botones de servicios con esquinas de 12px, reducidas a 10px en móvil. Las acciones táctiles tienen al menos 44px de alto; los servicios de portada miden 52px. El logo original se presenta en monocromo mediante CSS, sin modificar sus archivos.

## Components

La navegación usa enlaces nativos y un menú móvil con Escape y devolución del foco. El carrusel cambia a petición del usuario en 550ms. La galería entra al recorrerla en 700ms, sin ocultar las imágenes de partida. Los servicios se despliegan en 240ms. Sus botones de portada usan Button de Arc y sus iconos se inclinan al interactuar. La acción principal adapta el gesto de icono de la referencia Get Started Button de 21st.dev. Las preguntas frecuentes usan details nativo. La copia de correo usa Arc, cambia su etiqueta al copiar y ofrece una alternativa visible si falla el permiso.

La navegación a un servicio espera a que termine de abrirse el panel antes de desplazar la página. Así evita que el cambio de altura interrumpa el movimiento. No hay enlace de volver arriba ni oferta de desarrollo en Framer.

La variante de movimiento reducido elimina traslaciones y el desplazamiento animado. Los efectos de hover se limitan a punteros finos. El foco de teclado es visible. Los enlaces de correo y WhatsApp son los contactos existentes.

## Do's and Don'ts

Mantener el texto corto, la jerarquía y el protagonismo de las capturas reales. Conservar el nombre en minúsculas. Respetar el tema claro solicitado y las áreas táctiles de 44px. Evitar incorporar cifras, clientes, premios o testimonios sin evidencia. La media original permanece intacta y su procedencia se registra en .impeccable/asset-provenance.json.
