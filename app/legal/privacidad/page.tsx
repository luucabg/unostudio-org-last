import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPageLayout, LegalSection } from "@/components/legal/legal-page-layout"

const updatedAt = "24 de agosto de 2026"

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
            "Responsable: Luca Benidze, bajo la marca unostudio",
            "Email de contacto: hola@unostudio.org",
            "Ámbito de actividad: Valencia, España, con prestación de servicios también de forma remota",
          ]}
        />
      </LegalSection>

      <LegalSection title="Datos que podemos tratar">
        <LegalList
          items={[
            "Nombre y datos de contacto como email o teléfono.",
            "Empresa, web actual y la información que incluyas voluntariamente en formularios o mensajes.",
            "Información necesaria para preparar una propuesta, prestar un servicio o gestionar una relación comercial.",
            "Datos de cuenta y acceso cuando exista un área privada para clientes.",
            "Preferencias de cookies y datos agregados de uso cuando aceptas analítica.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Finalidades">
        <LegalList
          items={[
            "Responder solicitudes recibidas desde formularios, email o WhatsApp.",
            "Realizar una primera revisión, preparar propuestas y gestionar comunicaciones precontractuales.",
            "Prestar, mantener y dar soporte a los servicios contratados.",
            "Gestionar accesos a áreas privadas y proteger la seguridad del servicio.",
            "Medir de forma agregada el uso de la web cuando el usuario acepta analítica.",
            "Cumplir obligaciones legales, fiscales o contractuales cuando proceda.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Base jurídica">
        <LegalList
          items={[
            "Consentimiento cuando envías un formulario o aceptas analítica.",
            "Aplicación de medidas precontractuales cuando solicitas una propuesta o revisión.",
            "Ejecución de un contrato cuando existe una relación de servicios.",
            "Interés legítimo para seguridad, prevención de abuso y gestión operativa cuando resulte aplicable.",
            "Cumplimiento de obligaciones legales cuando sea necesario.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Proveedores que intervienen en la web">
        <p>
          Para operar unostudio.org pueden intervenir proveedores tecnológicos que actúan como prestadores de servicio o
          encargados del tratamiento según corresponda.
        </p>
        <LegalList
          items={[
            "Vercel para alojamiento y despliegue del sitio.",
            "Supabase para formularios, base de datos y funciones de autenticación o área privada cuando se utilizan.",
            "Vercel Analytics únicamente cuando el usuario acepta analítica.",
            "Google Fonts para cargar parte de la tipografía utilizada por el sitio.",
          ]}
        />
        <p>
          Si eliges contactar por email o WhatsApp, esos canales están sujetos además a las condiciones y políticas de sus
          respectivos proveedores.
        </p>
      </LegalSection>

      <LegalSection title="Transferencias internacionales">
        <p>
          Algunos proveedores tecnológicos pueden tratar datos fuera del Espacio Económico Europeo o utilizar
          infraestructuras internacionales. Cuando sea aplicable, el tratamiento se apoyará en los mecanismos y garantías
          previstos por la normativa de protección de datos.
        </p>
      </LegalSection>

      <LegalSection title="Conservación">
        <p>
          Las solicitudes que no terminan en contratación podrán conservarse hasta 12 meses para poder retomar la
          conversación y mantener trazabilidad comercial, salvo que pidas su supresión antes. Los datos de clientes se
          conservarán durante la relación contractual y durante los plazos adicionales exigidos por obligaciones legales
          o posibles responsabilidades. Las preferencias de cookies pueden conservarse hasta 24 meses.
        </p>
      </LegalSection>

      <LegalSection title="Decisiones automatizadas">
        <p>
          No utilizamos decisiones exclusivamente automatizadas con efectos jurídicos o equivalentes sobre las personas
          que envían una solicitud. Las herramientas de automatización pueden ayudar a organizar información, pero las
          decisiones comerciales relevantes requieren revisión humana.
        </p>
      </LegalSection>

      <LegalSection title="Derechos">
        <p>
          Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad o retirar
          tu consentimiento cuando proceda.
        </p>
        <p>
          Para ejercer tus derechos, escribe a hola@unostudio.org indicando qué quieres solicitar y la información
          necesaria para poder identificar tu petición.
        </p>
      </LegalSection>

      <LegalSection title="Reclamaciones">
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
          Aplicamos medidas técnicas y organizativas razonables para reducir el riesgo de acceso no autorizado, pérdida,
          alteración o divulgación indebida de datos.
        </p>
      </LegalSection>

      <LegalSection title="Cambios en esta política">
        <p>
          Esta política puede actualizarse para reflejar cambios legales, técnicos o de servicio. La versión vigente se
          publicará aquí con su fecha de última actualización.
        </p>
        <p>
          También puedes consultar la{" "}
          <Link href="/legal/cookies" className="text-sky-300 hover:text-sky-200">
            Política de Cookies
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
