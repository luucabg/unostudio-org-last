import Image from "next/image"

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={large ? "brand brand-large" : "brand"}>
      <Image src="/logos/logo_nav.png" alt="unostudio" width={1995} height={371} sizes={large ? "(max-width: 768px) 88vw, 1120px" : "175px"} />
    </span>
  )
}
