import Image from "next/image"

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={large ? "brand brand-large" : "brand"}>
      <Image src="/logos/logo_white.png" alt="unostudio" width={2000} height={370} sizes={large ? "(max-width: 768px) 88vw, 1120px" : "140px"} />
    </span>
  )
}
