import type { Metadata } from "next"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "8 de mayo de 2026"

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de unostudio.org.",
  alternates: { canonical: "/legal/aviso-legal" },
  robots: { index: false, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Aviso legal"
      description="Información general sobre el titular, la actividad y las condiciones básicas de uso de unostudio.org."
      updatedAt={updatedAt}
    >
      <LegalSection title="Titular del sitio">
        <p>El sitio web unostudio.org pertenece a Luca Benidze, que opera bajo la marca comercial unostudio.</p>
        {/* TODO: validar con asesoría legal si el aviso debe incluir datos identificativos adicionales. */}
      </LegalSection>

      <LegalSection title="Datos identificativos">
        <LegalList
          items={[
            "Titular y responsable: Luca Benidze",
            "Forma jurídica: Autónomo",
            "Email de contacto: hola@unostudio.org",
          ]}
        />
      </LegalSection>

      <LegalSection title="Actividad">
        <p>
          unostudio presta servicios de diseño web, desarrollo de landings y webs de conversión, creatividad digital,
          automatizaciones, agentes IA, integración de WhatsApp/formularios, dashboards, mantenimiento y optimización
          mensual.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de uso del sitio">
        <p>
          La navegación por este sitio atribuye la condición de usuario e implica la aceptación de este aviso legal. El
          usuario se compromete a utilizar la web de forma lícita, diligente y respetuosa con la normativa aplicable, la
          buena fe y el orden público.
        </p>
        <p>
          No está permitido usar este sitio para dañar sistemas, introducir código malicioso, recopilar datos de terceros
          sin autorización o realizar acciones que puedan impedir el funcionamiento normal de la web.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Los textos, diseños, interfaces, imágenes, logotipos, estructura, código y demás contenidos de unostudio.org
          están protegidos por derechos de propiedad intelectual e industrial, salvo que se indique lo contrario.
        </p>
        <p>
          Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización previa,
          excepto en los casos permitidos por la ley.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces externos">
        <p>
          Este sitio puede contener enlaces a páginas o herramientas de terceros. unostudio no controla ni responde por
          los contenidos, políticas, seguridad o prácticas de dichos sitios externos. Actualmente el sitio se aloja en
          Vercel y puede integrar servicios como Supabase, Cal.com u otros proveedores necesarios para formularios,
          agenda, medición o automatización.
        </p>
      </LegalSection>

      <LegalSection title="Exclusión de responsabilidad">
        <p>
          unostudio trabaja para mantener la información actualizada y el sitio disponible, pero no garantiza la ausencia
          de errores, interrupciones, fallos técnicos o contenidos desactualizados. El uso de la web se realiza bajo la
          responsabilidad del usuario.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable y jurisdicción">
        <p>
          Este aviso legal se rige por la legislación española. Salvo que la normativa aplicable disponga otra cosa, las
          partes se someterán a los juzgados y tribunales que correspondan conforme a la ley.
        </p>
        {/* TODO: validar jurisdicción concreta con asesor jurídico. */}
      </LegalSection>

      <LegalSection title="Contacto">
        <p>Para cualquier consulta sobre este aviso legal puedes escribir a hola@unostudio.org.</p>
      </LegalSection>
    </LegalPageLayout>
  )
}
