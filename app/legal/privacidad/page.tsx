import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "8 de mayo de 2026"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de unostudio.org.",
  alternates: { canonical: "/legal/privacidad" },
  robots: { index: false, follow: true },
}

export default function PrivacidadPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacidad"
      title="Política de privacidad"
      description="Información sobre cómo tratamos los datos personales recibidos a través de unostudio.org y sus canales de contacto."
      updatedAt={updatedAt}
    >
      <LegalSection title="Responsable del tratamiento">
        <LegalList
          items={[
            "Responsable: [NOMBRE LEGAL]",
            "Forma jurídica: [SL/Autónomo]",
            "NIF/CIF: [NIF/CIF]",
            "Domicilio: [DOMICILIO]",
            "Email: hola@unostudio.org",
          ]}
        />
        {/* TODO: completar y revisar datos del responsable antes de publicar versión definitiva. */}
      </LegalSection>

      <LegalSection title="Datos que se recogen">
        <LegalList
          items={[
            "Nombre y apellidos.",
            "Email y teléfono.",
            "Empresa, sector, web actual y servicio de interés.",
            "Mensaje, presupuesto aproximado, urgencia y datos facilitados voluntariamente.",
            "Datos de navegación, dispositivo, eventos o cookies si se activan herramientas de medición.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Finalidades del tratamiento">
        <LegalList
          items={[
            "Responder solicitudes recibidas desde formularios, email, WhatsApp o calendario.",
            "Preparar diagnósticos, presupuestos, propuestas y comunicaciones precontractuales.",
            "Gestionar la relación comercial y la prestación de servicios contratados.",
            "Enviar comunicaciones relacionadas con los servicios si el usuario lo solicita o autoriza.",
            "Mejorar la web, medir rendimiento y entender qué contenidos generan oportunidades reales.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Base legal">
        <LegalList
          items={[
            "Consentimiento del usuario cuando envía un formulario, acepta cookies o solicita comunicaciones.",
            "Aplicación de medidas precontractuales cuando pide una propuesta o diagnóstico.",
            "Ejecución contractual cuando existe una relación de servicios.",
            "Interés legítimo para mantener seguridad, prevenir abuso y mejorar procesos internos cuando proceda.",
            "Cumplimiento de obligaciones legales cuando sea necesario.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Proveedores y encargados">
        <p>
          Para operar el sitio y prestar servicios pueden intervenir proveedores de hosting, email, analítica,
          formularios, CRM, automatización, calendario, herramientas de IA, almacenamiento, documentación y soporte.
        </p>
        <p>
          Algunos proveedores habituales en este tipo de servicios pueden ser Google, Vercel, OpenAI, Notion, Make,
          Cal.com, herramientas CRM o plataformas de comunicación. La lista definitiva debe revisarse según las
          herramientas realmente activas.
        </p>
        {/* TODO: listar proveedores reales, contratos de encargo y enlaces a sus políticas. */}
      </LegalSection>

      <LegalSection title="Transferencias internacionales">
        <p>
          Pueden existir transferencias internacionales de datos si se usan proveedores ubicados fuera del Espacio
          Económico Europeo o con infraestructuras globales, como Google, Vercel, OpenAI, Notion, Make, Cal.com u otros.
          En ese caso se revisarán las garantías aplicables, como cláusulas contractuales tipo, decisiones de adecuación
          u otros mecanismos previstos por la normativa.
        </p>
      </LegalSection>

      <LegalSection title="Conservación de datos">
        <p>
          Los datos se conservarán durante el tiempo necesario para responder la solicitud, gestionar la relación
          comercial, cumplir obligaciones legales y atender posibles responsabilidades. Los datos de contactos no
          contratados podrán conservarse durante un plazo razonable para seguimiento comercial, salvo solicitud de
          supresión.
        </p>
        {/* TODO: definir plazos concretos con asesoría jurídica y fiscal. */}
      </LegalSection>

      <LegalSection title="Derechos">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento,
          portabilidad y retirada del consentimiento cuando proceda.
        </p>
        <p>
          Para ejercerlos, escribe a hola@unostudio.org indicando el derecho que quieres ejercer y la información
          necesaria para identificar tu solicitud.
        </p>
      </LegalSection>

      <LegalSection title="Derecho a reclamar ante la AEPD">
        <p>
          Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes presentar una reclamación
          ante la Agencia Española de Protección de Datos en{" "}
          <a href="https://www.aepd.es" className="text-sky-300 hover:text-sky-200">
            aepd.es
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Seguridad">
        <p>
          unostudio aplicará medidas técnicas y organizativas razonables para proteger los datos personales frente a
          acceso no autorizado, pérdida, alteración o divulgación indebida.
        </p>
      </LegalSection>

      <LegalSection title="Cambios en la política">
        <p>
          Esta política puede actualizarse para reflejar cambios legales, técnicos o de servicios. La versión vigente se
          publicará en esta página con su fecha de última actualización.
        </p>
        <p>
          Puedes consultar también la{" "}
          <Link href="/legal/cookies" className="text-sky-300 hover:text-sky-200">
            Política de Cookies
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
