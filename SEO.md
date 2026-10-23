# SEO de unostudio

Actualizado el 23 de octubre de 2026.

## Implementación

Ocho páginas públicas con título, descripción, URL canónica, encabezado principal y metadatos sociales propios. El registro en `lib/seo.ts` mantiene el sitemap alineado con esas páginas. Los avisos legales conservan noindex y no aparecen en el sitemap. Las rutas desconocidas responden con 404.

El HTML inicial contiene los textos, las preguntas frecuentes, los enlaces y los datos estructurados. La lectura no depende de ejecutar la animación o abrir el carrusel. Se describen Organization, WebSite, WebPage, Service, BreadcrumbList y la colección de proyectos, según la página. Los servicios comparten su información visible con el marcado. No se incluyen reseñas, puntuaciones, direcciones, clientes o resultados inventados.

El servicio de SEO tiene su página /seo, enlaces desde cabecera, inicio, catálogo, diseño web y footer. Explica el trabajo técnico, los contenidos y la visibilidad en búsquedas con IA. Sus preguntas aclaran el alcance sin garantizar posiciones ni recomendaciones.

La vista previa al compartir usa una imagen de unostudio de 1200 por 630, generada estáticamente. Los iconos usan el símbolo original sobre el azul de marca. El hero se sirve como WebP mediante next/image con tamaños adaptados. Los archivos originales se conservan.

## Acceso y descubrimiento

La regla general de robots.txt permite las páginas públicas a Googlebot, Bingbot, OAI-SearchBot y otros rastreadores. También mantiene el acceso permitido para Google-Extended. No se ha cambiado la política previa de acceso a entrenamiento. Las rutas antiguas de administración y API siguen excluidas. El sitemap contiene únicamente las ocho URLs canónicas, con la fecha real de esta actualización.

OpenAI identifica OAI-SearchBot como el rastreador de sus búsquedas. Google documenta que Googlebot controla las funciones de IA de Search; Google-Extended tiene una función distinta para entrenamiento y determinadas experiencias de Gemini. Que una petición con ese nombre reciba HTTP 200 demuestra que la aplicación no la bloquea por su cabecera, pero no verifica un rastreo real desde las IP de esas plataformas ni la indexación.

IndexNow se configura con un archivo público de verificación y un script manual. `pnpm submit:indexnow` comprueba primero la clave y el sitemap publicados y luego notifica las URLs. Una respuesta 200 o 202 acredita recepción, no indexación. El script no se ejecuta durante el build ni en el navegador de los visitantes.

No se añaden instrucciones ocultas para asistentes ni contenido repetitivo para forzar recomendaciones. Tampoco se presenta llms.txt como requisito o factor de posicionamiento: Google indica que no hacen falta archivos de texto especiales ni un marcado específico para sus respuestas con IA.

## Comprobación y seguimiento

Con la aplicación arrancada, ejecutar `pnpm check:seo`. Para producción, `pnpm check:seo https://unostudio.org`. La prueba comprueba metadatos, entidades, enlaces de proyectos en HTML, preguntas visibles sin JavaScript, sitemap, robots, respuestas HTTP, iconos e imagen social.

La propiedad de Search Console y Bing Webmaster Tools no se ha verificado desde esta sesión. Su conexión permite medir impresiones, consultas, clics e indexación, y enviar el sitemap. No se insertan códigos de verificación ficticios ni analítica nueva. No hay datos suficientes para afirmar mejoras de posiciones, tráfico o recomendaciones.

Mantener actualizados servicios, contactos y proyectos. Ampliar los casos de trabajo solo con el alcance y los resultados reales que se puedan documentar. La reputación externa y las menciones auténticas requieren trabajo continuado; no se crean reseñas ni enlaces artificiales.

## Documentación consultada

- Google Search Central: https://developers.google.com/search/docs/appearance/ai-features
- Google, rastreadores y Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Google, datos de organización: https://developers.google.com/search/docs/appearance/structured-data/organization
- OpenAI, rastreadores: https://developers.openai.com/api/docs/bots
- Bing, directrices: https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a
- IndexNow: https://www.indexnow.org/documentation
- Next.js, metadatos y JSON-LD: https://nextjs.org/docs/app/api-reference/functions/generate-metadata y https://nextjs.org/docs/app/guides/json-ld
