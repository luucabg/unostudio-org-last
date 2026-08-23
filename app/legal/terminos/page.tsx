import type { Metadata } from "next"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "24 de agosto de 2026"

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
      description="Condiciones generales aplicables a los servicios de unostudio. La propuesta aceptada de cada proyecto concreta y prevalece sobre el alcance comercial específico."
      updatedAt={updatedAt}
    >
      <LegalSection title="Objeto">
        <p>
          Estas condiciones regulan la prestación de servicios profesionales de unostudio, principalmente a empresas y
          profesionales que contratan diseño y desarrollo web, sistemas comerciales, integraciones, mantenimiento o
          servicios relacionados.
        </p>
      </LegalSection>

      <LegalSection title="Servicios">
        <LegalList
          items={[
            "Webs de conversión y páginas corporativas orientadas a claridad y captación.",
            "Estrategia de estructura, UX/UI, desarrollo responsive y copy dentro del alcance acordado.",
            "Sistemas comerciales para organizar solicitudes, estados, reuniones, propuestas y seguimientos.",
            "Integraciones con formularios, agenda, email, CRM u otras herramientas cuando estén incluidas.",
            "Mantenimiento técnico y soporte según el servicio contratado.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Primera revisión y propuesta">
        <p>
          La primera revisión para entender la necesidad y comprobar si existe encaje no tiene coste ni compromiso.
          Cuando el trabajo requiere una auditoría extensa, documentación o consultoría independiente, se informará del
          precio antes de realizarla.
        </p>
        <p>
          Ningún proyecto comienza hasta que el cliente ha recibido y aprobado una propuesta con alcance, entregables,
          precio, impuestos, plazos estimados, condiciones de pago y dependencias relevantes.
        </p>
      </LegalSection>

      <LegalSection title="Precios e impuestos">
        <p>
          Los precios publicados en la web son importes de partida y no incluyen IVA salvo que se indique expresamente lo
          contrario. El precio final de cada proyecto se fija en la propuesta aceptada.
        </p>
      </LegalSection>

      <LegalSection title="Pago de proyectos web">
        <p>
          Como referencia general, los proyectos web se abonan en un 50 % al comenzar y un 50 % antes de la publicación.
          Un proyecto concreto puede utilizar otros hitos si quedan definidos por escrito en la propuesta.
        </p>
      </LegalSection>

      <LegalSection title="Mantenimiento web">
        <p>
          El mantenimiento web es opcional. No es necesario contratar una mensualidad de unostudio para conservar la web
          entregada. Cuando se contrata mantenimiento, su alcance puede incluir gestión técnica del alojamiento,
          monitorización, mantenimiento, soporte y pequeños ajustes.
        </p>
        <p>
          Salvo que una propuesta indique otra cosa, el mantenimiento web puede cancelarse con 30 días de preaviso. Una
          vez terminado, el cliente asume la gestión técnica y los costes de los proveedores que siga utilizando.
        </p>
      </LegalSection>

      <LegalSection title="Sistema comercial y mensualidad">
        <p>
          El sistema comercial tiene una implantación inicial y una mensualidad. La mensualidad cubre alojamiento,
          monitorización, mantenimiento, soporte y evolución básica dentro del alcance contratado.
        </p>
        <p>
          Salvo que una propuesta indique otra cosa, no existe permanencia anual. Tras la implantación, el servicio
          continúa mes a mes y puede cancelarse con 30 días de preaviso.
        </p>
      </LegalSection>

      <LegalSection title="Servicios y costes de terceros">
        <p>
          Dominio, hosting, licencias, APIs, email, mensajería, telefonía, almacenamiento u otros servicios de terceros
          pueden tener sus propios costes y condiciones salvo que una propuesta los incluya expresamente. No se
          contratarán costes de terceros por cuenta del cliente sin informarlo previamente.
        </p>
        <p>
          Siempre que sea razonable, las cuentas principales y servicios recurrentes se crearán o mantendrán a nombre del
          cliente para evitar dependencias innecesarias.
        </p>
      </LegalSection>

      <LegalSection title="Alcance y cambios">
        <p>
          El proyecto incluye únicamente lo descrito en la propuesta aceptada. Nuevas páginas, funcionalidades,
          integraciones, rediseños, urgencias o cambios relevantes de alcance se presupuestarán antes de realizarse.
        </p>
      </LegalSection>

      <LegalSection title="Rondas de revisión">
        <p>
          Las rondas de revisión incluidas y la forma de entregar feedback se indican en la propuesta. Los cambios deben
          agruparse de forma clara. Revisiones adicionales o cambios de dirección después de una aprobación pueden
          requerir presupuesto adicional.
        </p>
      </LegalSection>

      <LegalSection title="Materiales y obligaciones del cliente">
        <LegalList
          items={[
            "Facilitar información veraz sobre el negocio, la oferta y los objetivos.",
            "Entregar materiales, accesos y aprobaciones necesarios dentro de los plazos acordados.",
            "Garantizar que los materiales entregados pueden utilizarse legalmente.",
            "Revisar las entregas y comunicar feedback con diligencia.",
            "Cumplir las obligaciones legales, fiscales, publicitarias y de protección de datos propias de su actividad.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Plazos">
        <p>
          Los plazos son estimados salvo que se acuerde expresamente una fecha vinculante. Retrasos en pagos, materiales,
          accesos, decisiones o feedback del cliente pueden desplazar la planificación.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad de la web y cuentas">
        <p>
          Tras el pago completo, la web final se entrega al cliente en los términos definidos en la propuesta. El dominio
          y las cuentas principales se procuran mantener a nombre del cliente cuando sea posible.
        </p>
        <p>
          Quedan fuera de una cesión automática las licencias de terceros, herramientas preexistentes, metodologías,
          componentes reutilizables y know-how de unostudio, que conservan sus condiciones y titularidad propias.
        </p>
      </LegalSection>

      <LegalSection title="Datos y cancelación del sistema">
        <p>
          Los datos comerciales aportados o generados por el cliente en el sistema pertenecen al cliente y podrán
          exportarse en un formato razonable al finalizar el servicio. El software base, herramientas internas o
          componentes propios de unostudio no se transfieren salvo que se acuerde expresamente por escrito.
        </p>
      </LegalSection>

      <LegalSection title="Cancelación de un proyecto">
        <p>
          Si un proyecto se cancela antes de finalizar, se liquidará el trabajo realizado y los compromisos de terceros ya
          asumidos hasta la fecha de cancelación, conforme a la propuesta y a la normativa aplicable. Cualquier saldo o
          devolución se calculará en función del trabajo efectivamente ejecutado.
        </p>
      </LegalSection>

      <LegalSection title="No garantía de resultados comerciales">
        <p>
          unostudio trabaja para mejorar claridad, experiencia, medición y conversión, pero no garantiza un número
          concreto de ventas, leads, reservas o ingresos. Los resultados dependen también de factores como oferta,
          tráfico, mercado, precio, reputación y seguimiento comercial del cliente.
        </p>
      </LegalSection>

      <LegalSection title="Servicios externos y disponibilidad">
        <p>
          Algunas funciones dependen de proveedores externos. unostudio no puede garantizar la disponibilidad permanente
          de servicios de terceros ni evitar cambios de precio, límites o condiciones impuestos por ellos.
        </p>
      </LegalSection>

      <LegalSection title="Confidencialidad">
        <p>
          Las partes tratarán como confidencial la información estratégica, técnica, comercial o interna conocida durante
          la relación, salvo que sea pública, esté autorizada para su divulgación o deba facilitarse por obligación legal.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable">
        <p>
          Estas condiciones se rigen por la legislación española, sin perjuicio de las normas imperativas que resulten
          aplicables en cada caso.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
