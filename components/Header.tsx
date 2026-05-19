import Link from "next/link";
import Image from "next/image";
import { LeadButton } from "@/components/LeadButton";
import { MobileMenu } from "@/components/MobileMenu";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur z-40">
      <div className="container-x flex items-center justify-between py-3 gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={SITE.brand}>
          <Image src="/img/logo.png" alt="ИНИЗ" width={44} height={44} priority className="rounded" />
          <div className="leading-tight">
            <div className="font-bold text-lg tracking-tight">ИНИЗ</div>
            <div className="text-[11px] text-neutral-500 font-mono">Бурение · Геология · с {SITE.founded}</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-teal-600 transition">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="hidden sm:block text-sm font-semibold text-teal-700">
            {SITE.phone}
          </a>
          <LeadButton className="btn btn-primary text-sm py-2.5 px-4">Заявка</LeadButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
