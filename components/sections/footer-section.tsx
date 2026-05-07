import Link from "next/link"

const footerLinks = {
  servicios: [
    { label: "Diseño web", href: "#features" },
    { label: "Automatizaciones IA", href: "#features" },
    { label: "Planes", href: "#pricing" },
  ],
  agencia: [
    { label: "Método", href: "#impact" },
    { label: "Proceso", href: "#impact" },
    { label: "Reservar llamada", href: "mailto:hola@unostudio.org?subject=Reservar%20llamada%20con%20unostudio" },
  ],
  contacto: [
    { label: "hola@unostudio.org", href: "mailto:hola@unostudio.org" },
    { label: "unostudio.org", href: "https://unostudio.org" },
    { label: "Propuesta", href: "mailto:hola@unostudio.org?subject=Propuesta%20web" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-semibold text-zinc-100">
              unostudio
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Agencia de diseño web para convertir, con automatizaciones de IA como complemento.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Agencia</h4>
            <ul className="space-y-3">
              {footerLinks.agencia.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Contacto</h4>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} unostudio. Todos los derechos reservados.</p>
          <p className="text-sm text-zinc-600">unostudio.org</p>
        </div>
      </div>
    </footer>
  )
}
