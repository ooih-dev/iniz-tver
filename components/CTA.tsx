import { LeadButton } from "@/components/LeadButton";
import { SITE } from "@/lib/site";

const ICONS: Record<string, JSX.Element> = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M8 13h8M8 17h5" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H7" />
      <path d="M16 13h.01" />
    </svg>
  ),
};

const TRUST = [
  { icon: "clock", value: "15 минут", caption: "Перезвоним по заявке" },
  { icon: "shield", value: "5 лет", caption: "Гарантия по договору" },
  { icon: "doc", value: "Договор", caption: "Фиксированная сумма, без доплат" },
  { icon: "wallet", value: "Бесплатно", caption: "Выезд инженера и расчёт стоимости" },
];

export function CTABlock({ title, lead }: { title?: string; lead?: string }) {
  return (
    <section className="hero-grad text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow text-amber-400">Связаться</div>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-[1.05]">
            {title || (
              <>
                Готовы <em className="not-italic text-amber-400">начать</em>?<br />
                Один звонок — и мы выезжаем.
              </>
            )}
          </h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            {lead ||
              "Перезваниваем в течение 15 минут в рабочее время. Инженерная консультация, выезд инженера, расчёт стоимости — бесплатно."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LeadButton className="btn bg-amber-400 text-[#1a0e00] font-bold hover:bg-[#ffb947] shadow-lg">
              Оставить заявку
            </LeadButton>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="btn bg-white text-teal-700 font-bold hover:bg-white/90"
            >
              {SITE.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map((t) => (
            <div
              key={t.value}
              className="bg-white rounded-2xl p-5 md:p-6 text-ink flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-11 h-11 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                {ICONS[t.icon]}
              </div>
              <div className="text-xl md:text-2xl font-extrabold mt-3">{t.value}</div>
              <div className="text-sm text-neutral-500 mt-1 leading-snug">{t.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
