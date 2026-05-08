import type { Metadata } from "next"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "8 de mayo de 2026"

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de contratación de unostudio.",
  alternates: { canonical: "/legal/terminos" },
  robots: { index: false, follow: true },
}

export default function TerminosPage() {
  return (
    <LegalPageLayout
      eyebrow="Condiciones"
      title="Términos y condiciones"
      description="Condiciones generales orientativas para la contratación de servicios de unostudio. Este contenido debe revisarse con asesoría legal antes de su uso definitivo."
      updatedAt={updatedAt}
    >
      <LegalSection title="Objeto">
        <p>
          Estos términos regulan la contratación de servicios profesionales prestados por unostudio a clientes que
          solicitan diseño web, conversión, creatividad, automatización, IA, mantenimiento u optimización mensual.
        </p>
        {/* TODO: adaptar a contrato final, forma jurídica y jurisdicción validada. */}
      </LegalSection>

      <LegalSection title="Servicios">
        <LegalList
          items={[
            "Landings de conversión y webs corporativas orientadas a captación.",
            "Copy, estructura comercial, diseño visual y desarrollo web.",
            "Creativos, vídeos cortos, automatizaciones, agentes IA y dashboards.",
            "Integraciones con WhatsApp, formularios, CRM, Supabase, email, agenda y herramientas de medición.",
            "Mantenimiento técnico, soporte y optimización mensual según el plan contratado.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Presupuestos y propuestas">
        <p>
          Cada proyecto se definirá mediante propuesta o presupuesto con alcance, entregables, precio, mensualidad,
          plazos estimados, condiciones de pago y dependencias del cliente. La aceptación expresa de la propuesta
          implicará la contratación del servicio.
        </p>
      </LegalSection>

      <LegalSection title="Proceso de contratación">
        <LegalList
          items={[
            "Solicitud inicial o diagnóstico.",
            "Definición de alcance, objetivos y entregables.",
            "Envío y aceptación de propuesta.",
            "Pago inicial o reserva de sprint cuando proceda.",
            "Inicio del proyecto tras recibir materiales, accesos y confirmación.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Pagos">
        <p>
          Los pagos, hitos y vencimientos se indicarán en cada propuesta. Salvo pacto distinto, el inicio del trabajo
          puede requerir un pago inicial. El impago podrá pausar entregas, soporte o mantenimiento hasta regularizar la
          situación.
        </p>
      </LegalSection>

      <LegalSection title="Mensualidades y compromiso mínimo">
        <p>
          Los planes pueden incluir una mensualidad asociada a alojamiento, mantenimiento técnico, soporte, medición y
          mejoras según alcance. Salvo acuerdo distinto, la mensualidad tendrá un compromiso mínimo de 6 meses.
        </p>
      </LegalSection>

      <LegalSection title="Alcance de entregables">
        <p>
          El alcance incluye únicamente los elementos descritos en la propuesta aceptada. Cualquier trabajo adicional,
          nuevas páginas, integraciones, cambios de alcance, urgencias o piezas extra podrá presupuestarse aparte.
        </p>
      </LegalSection>

      <LegalSection title="Rondas de cambios">
        <p>
          Las rondas de cambios incluidas se definirán en la propuesta. Los cambios deben agruparse de forma clara y
          enviarse dentro de los plazos acordados. Cambios adicionales o modificaciones sustanciales podrán tener coste
          extra.
        </p>
      </LegalSection>

      <LegalSection title="Obligaciones del cliente">
        <LegalList
          items={[
            "Facilitar información veraz sobre su negocio, oferta y objetivos.",
            "Entregar materiales, textos, imágenes, accesos y aprobaciones a tiempo.",
            "Revisar entregas dentro de los plazos acordados.",
            "Garantizar que los materiales facilitados no infringen derechos de terceros.",
            "Cumplir sus obligaciones legales, fiscales, publicitarias y de protección de datos.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Contenido, materiales y accesos">
        <p>
          El cliente es responsable de la titularidad, exactitud y legalidad de los contenidos que entregue. Cuando sea
          necesario acceder a herramientas de terceros, el cliente deberá proporcionar accesos seguros y permisos
          adecuados.
        </p>
      </LegalSection>

      <LegalSection title="Plazos">
        <p>
          Los plazos son estimados salvo que se pacte expresamente lo contrario. Retrasos en feedback, pagos, materiales
          o accesos pueden desplazar la fecha de entrega.
        </p>
      </LegalSection>

      <LegalSection title="Mantenimiento">
        <p>
          El mantenimiento cubre las tareas indicadas en cada plan. No incluye rediseños completos, nuevas
          funcionalidades relevantes, cambios de estrategia, campañas publicitarias o incidencias provocadas por terceros
          salvo que se indique expresamente.
        </p>
      </LegalSection>

      <LegalSection title="Cancelación">
        <p>
          Las condiciones de cancelación, pausas o terminación anticipada se definirán en la propuesta. Los importes
          abonados por trabajos ya iniciados, reservas de sprint o servicios prestados no serán reembolsables salvo pacto
          distinto o obligación legal.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual">
        <p>
          Tras el pago completo de los importes acordados, el cliente recibirá los derechos de uso sobre los entregables
          finales en los términos indicados en la propuesta. unostudio podrá conservar derechos sobre metodologías,
          plantillas internas, sistemas, componentes previos y know-how propio.
        </p>
      </LegalSection>

      <LegalSection title="Herramientas y licencias de terceros">
        <p>
          El proyecto puede requerir herramientas, plugins, fuentes, bancos de imágenes, hosting en Vercel, base de datos
          o formularios en Supabase, automatización, IA, CRM, email o servicios externos. Sus costes, licencias, límites
          y condiciones pueden depender de terceros y no siempre están incluidos salvo que se indique.
        </p>
      </LegalSection>

      <LegalSection title="IA y automatización como apoyo">
        <p>
          Las funciones de IA y automatización se implementan como apoyo operativo para responder antes, clasificar
          solicitudes, resumir información o mejorar procesos. El cliente debe revisar respuestas, flujos y decisiones
          sensibles antes de usarlas como definitivas.
        </p>
      </LegalSection>

      <LegalSection title="No garantía de resultados concretos">
        <p>
          unostudio diseña y optimiza activos digitales orientados a mejorar la conversión, pero no garantiza un volumen
          concreto de ventas, leads, reservas o ingresos, ya que estos dependen de factores externos como oferta,
          mercado, tráfico, inversión publicitaria, equipo comercial y seguimiento del cliente.
        </p>
      </LegalSection>

      <LegalSection title="Limitación de responsabilidad">
        <p>
          En la medida permitida por la ley, unostudio no responderá por daños indirectos, pérdida de beneficios,
          interrupciones causadas por terceros, mal uso de herramientas o decisiones comerciales tomadas por el cliente.
        </p>
      </LegalSection>

      <LegalSection title="Confidencialidad">
        <p>
          Las partes se comprometen a tratar como confidencial la información estratégica, técnica, comercial o interna a
          la que accedan durante la relación, salvo que sea pública, autorizada o requerida legalmente.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable">
        <p>Estos términos se regirán por la legislación española, sin perjuicio de derechos imperativos aplicables.</p>
        {/* TODO: definir fuero y mecanismo de resolución de conflictos con asesoría legal. */}
      </LegalSection>
    </LegalPageLayout>
  )
}
