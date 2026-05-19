import { LeadButton } from "@/components/LeadButton";
import { SITE } from "@/lib/site";

export function CTABlock({ title, lead }: { title?: string; lead?: string }) {
  return (
    <section className="hero-grad text-white">
      <div className="container-x grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="eyebrow text-amber-400">Связаться</div>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-[1.05]">
            {title || (
              <>
                Готовы <em className="not-italic text-amber-400">начать</em>?<br />
                Один звонок — и мы выезжаем.
              </>
            )}
          </h2>
          <p className="mt-5 text-white/85 max-w-md leading-relaxed">
            {lead ||
              "Перезваниваем в течение 15 минут в рабочее время. Инженерная консультация, выезд инженера, расчёт стоимости — бесплатно."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-amber">{SITE.phone}</a>
            <LeadButton className="btn btn-ghost text-white border-white/30 hover:bg-white/10">
              Оставить заявку
            </LeadButton>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["15 минут", "Перезвон"],
              ["По заявке", "Выезд инженера"],
              ["5 лет", "Гарантия"],
              ["Договор", "Фикс. сумма"],
            ].map(([v, k]) => (
              <div key={k} className="bg-white/10 backdrop-blur rounded-2xl p-5">
                <div className="text-3xl font-bold text-amber-400">{v}</div>
                <div className="opacity-80 mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
