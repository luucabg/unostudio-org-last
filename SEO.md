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

La propiedad de Search Console `https://unostudio.org/` quedó verificada el 23 de octubre de 2026 mediante el archivo HTML original de Google. Conservar `public/google4a5648eaf4efe73c.html` en los despliegues: Google comprueba periódicamente que siga accesible. El sitemap se volvió a enviar ese día y Search Console confirmó estado Correcto y ocho páginas descubiertas. Descubrir una URL no significa que ya esté indexada.

Bing Webmaster Tools no se ha verificado. IndexNow aceptó las ocho URLs con HTTP 202 el 23 de octubre de 2026; eso acredita recepción. No se añade analítica de visitantes ni se inventan códigos de seguimiento.

## Medición en Search Console

La [vista de rendimiento de 28 días](https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Funostudio.org%2F&metrics=CLICKS%2CIMPRESSIONS%2CCTR%2CPOSITION&num_of_days=28) muestra clics, impresiones, CTR y posición media. Las pestañas permiten separar consultas, páginas, países y dispositivos. Requiere acceso a la cuenta propietaria de Search Console.

También está disponible el [informe de funciones de IA generativa de Google](https://search.google.com/search-console/performance/search-analytics/ai?resource_id=https%3A%2F%2Funostudio.org%2F&num_of_days=28). Su alcance es la Búsqueda de Google. No mide recomendaciones en ChatGPT ni conversaciones en la aplicación de Gemini.

Se guardaron exportaciones CSV iniciales en `.design-research/search-console/`, excluidas de Git, con el periodo del 24 de septiembre al 21 de octubre de 2026. La nueva web se publicó el 23 de octubre: esos datos son anteriores a los cambios, no resultados de la optimización.

Para evaluar la evolución, comparar periodos completos de 28 días y exportar la misma vista. Revisar primero impresiones y clics; después, qué consultas y páginas los generan. Separar búsquedas de marca como unostudio de consultas sobre los servicios. Interpretar CTR y posición junto con su volumen de impresiones, especialmente cuando la muestra es pequeña.

Comprobar [indexación](https://search.google.com/search-console/index?resource_id=https%3A%2F%2Funostudio.org%2F), [sitemap](https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Funostudio.org%2F) y [Core Web Vitals](https://search.google.com/search-console/core-web-vitals?resource_id=https%3A%2F%2Funostudio.org%2F). Los datos se actualizan con retraso y algunos informes necesitan tráfico suficiente. Las notificaciones de problemas de sitemap las gestiona Search Console. No se ha programado una automatización de informes.

Mantener actualizados servicios, contactos y proyectos. Ampliar los casos de trabajo solo con el alcance y los resultados reales que se puedan documentar. La reputación externa y las menciones auténticas requieren trabajo continuado; no se crean reseñas ni enlaces artificiales.

## Documentación consultada

- Google Search Central: https://developers.google.com/search/docs/appearance/ai-features
- Google, rastreadores y Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Google, datos de organización: https://developers.google.com/search/docs/appearance/structured-data/organization
- OpenAI, rastreadores: https://developers.openai.com/api/docs/bots
- Bing, directrices: https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a
- IndexNow: https://www.indexnow.org/documentation
- Next.js, metadatos y JSON-LD: https://nextjs.org/docs/app/api-reference/functions/generate-metadata y https://nextjs.org/docs/app/guides/json-ld
- Google, verificación de propiedad: https://support.google.com/webmasters/answer/9008080
- Google, informe de rendimiento: https://support.google.com/webmasters/answer/7576553
- Google, actualización de datos: https://support.google.com/webmasters/answer/17011364
- Google, informe de sitemaps: https://support.google.com/webmasters/answer/7451001
