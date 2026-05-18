import Link from "next/link";
import { PACKAGES, PRICE_NOTE } from "@/lib/prices";

export function PriceCards() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {PACKAGES.map((p) => (
          <article
            key={p.id}
            className={`rounded-3xl p-7 border ${p.popular ? "bg-teal-700 text-white border-teal-700" : "bg-white border-neutral-200"}`}
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs opacity-70">Пакет «под ключ»</div>
              {p.popular && (
                <span className="bg-amber-400 text-[#1a0e00] text-xs font-semibold rounded-full px-2.5 py-1">
                  Популярный
                </span>
              )}
            </div>
            <h3 className="font-bold text-xl mt-2">«{p.name}»</h3>
            <div className="text-3xl font-extrabold mt-3">{p.price}</div>
            <p className={`text-sm mt-2 ${p.popular ? "text-white/80" : "text-neutral-600"}`}>{p.tagline}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className={p.popular ? "text-amber-400" : "text-teal-600"}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/kontakty"
              className={`btn mt-6 w-full justify-center ${p.popular ? "btn-amber" : "btn-primary"}`}
            >
              Заказать расчёт
            </Link>
          </article>
        ))}
      </div>
      <p className="text-xs text-neutral-500 mt-4 leading-relaxed">{PRICE_NOTE}</p>
    </div>
  );
}
