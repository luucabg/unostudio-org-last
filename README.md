# unostudio

Web del estudio de diseño y desarrollo. Frontend en Next.js 16, React 19 y TypeScript, con Motion y un botón gratuito de Arc UI.

```sh
pnpm install
pnpm dev
```

```sh
pnpm lint
pnpm typecheck
pnpm build
```

La web incluye inicio, diseño web, software a medida, servicios, IA, SEO, proyectos y contacto. Presenta diez capturas en una tira automática, con ampliación, arrastre con ratón y alternativa sin movimiento. El footer azul ilustrado organiza los enlaces del estudio. No necesita variables de entorno, base de datos, autenticación ni servicios de IA.

Los logos y las capturas originales se conservan en `public`. El componente gratuito de Arc y sus tokens proceden de `https://uiarc.dev/r/button.json` y `https://uiarc.dev/r/arc-motion-tokens.json`. Las vistas públicas de 21st.dev se consultaron como referencias de interacción.

El repositorio es `luucabg/unostudio-org-last`. Su rama `main` está conectada a Vercel. Publicar cambios requiere subirlos a GitHub.

Los proyectos se capturaron el 23 de octubre de 2026 desde sus páginas públicas. Kavkasioni 33 conserva la versión antigua solicitada. La nueva cala del hero, la imagen anterior de Pexels, los logos y la ilustración del footer están documentados en `.impeccable/asset-provenance.json`.

Los metadatos y el sitemap comparten el registro de páginas en `lib/seo.ts`. `pnpm check:seo` comprueba la versión local en el puerto 3007; admite una URL como argumento. `pnpm submit:indexnow` notifica las ocho páginas después de publicar y comprobar la clave pública en producción. Los scripts usan Node.js 22.18 o posterior. Consulta `SEO.md` para el alcance, las fuentes y la medición pendiente.
