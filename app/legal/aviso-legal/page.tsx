import type { Metadata } from "next"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "24 de agosto de 2026"

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
        <p>unostudio.org pertenece a Luca Benidze, que opera bajo la marca comercial unostudio.</p>
      </LegalSection>

      <LegalSection title="Contacto">
        <LegalList
          items={[
            "Marca: unostudio",
            "Titular: Luca Benidze",
            "Ámbito de actividad: Valencia, España",
            "Email: hola@unostudio.org",
          ]}
        />
      </LegalSection>

      <LegalSection title="Actividad">
        <p>
          unostudio presta servicios de diseño y desarrollo web, webs de conversión, sistemas comerciales, integraciones,
          mantenimiento técnico y soporte para empresas de servicios.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de uso">
        <p>
          El usuario se compromete a utilizar este sitio de forma lícita y a no realizar acciones que puedan dañar,
          sobrecargar, alterar o impedir el funcionamiento normal de la web o de los sistemas relacionados.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Los textos, diseños, interfaces, imágenes, logotipos, estructura, código y demás contenidos de unostudio.org
          están protegidos por los derechos que correspondan a sus titulares, salvo que se indique lo contrario.
        </p>
        <p>
          No está permitida su reproducción, distribución, comunicación pública o transformación fuera de los supuestos
          autorizados por la ley o por el titular correspondiente.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces y servicios de terceros">
        <p>
          El sitio puede enlazar o depender de servicios externos. unostudio no controla sus políticas, disponibilidad,
          seguridad o cambios de condiciones. El uso de esos servicios también puede quedar sujeto a las condiciones de
          sus respectivos proveedores.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilidad">
        <p>
          Se procura mantener la información y el funcionamiento del sitio actualizados, pero no se garantiza la ausencia
          absoluta de errores, interrupciones o incidencias causadas por terceros, redes o servicios externos.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable">
        <p>
          Este aviso se rige por la legislación española, sin perjuicio de las normas imperativas que resulten aplicables.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
