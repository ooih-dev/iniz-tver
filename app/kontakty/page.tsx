import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { JsonLd, LocalBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Контакты — ИНИЗ Тверь, бурение скважин и геология",
  description: `Контакты компании ИНИЗ в Твери: телефон ${SITE.phone}, email ${SITE.email}, адрес ${SITE.address}. Перезвон в течение 15 минут.`,
  alternates: { canonical: "/kontakty" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={LocalBusinessSchema()} />

      <section className="bg-cream">
        <div className="container-x">
          <div className="eyebrow">Контакты</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3">Связаться с ИНИЗ</h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-700">
            Перезвоним в течение 15 минут в рабочее время. Ночью и в выходные — на следующее утро в 8:00. Инженерная консультация, выезд инженера и расчёт стоимости — бесплатно.
          </p>
        </div>
      </section>

      <section>
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div className="space-y-7">
            <div>
              <div className="text-xs font-mono text-teal-700 uppercase">Телефон</div>
              <a href={`tel:${SITE.phoneTel}`} className="block text-3xl md:text-4xl font-bold mt-2">{SITE.phone}</a>
              <div className="text-sm text-neutral-500 mt-1">На связи {SITE.hoursPhone}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-teal-700 uppercase">E-mail для тендеров и КП</div>
              <a href={`mailto:${SITE.email}`} className="block text-2xl font-semibold mt-2">{SITE.email}</a>
            </div>
            <div>
              <div className="text-xs font-mono text-teal-700 uppercase">Офис</div>
              <div className="text-xl font-semibold mt-2">{SITE.address}</div>
              <div className="text-sm text-neutral-500 mt-1">{SITE.hoursOffice}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-teal-700 uppercase">Telegram</div>
              <a href={SITE.socials.tg} target="_blank" rel="noreferrer" className="block text-xl font-semibold mt-2">@iniz_tver</a>
            </div>
            <div className="border-t pt-6 text-sm text-neutral-600 leading-relaxed">
              <div className="font-semibold text-neutral-800 mb-1">{SITE.fullName}</div>
              <div>ОГРН {SITE.legal.ogrn} · ИНН {SITE.legal.inn}</div>
              <div className="mt-1">Лицензия Роснедра. Член СРО проектировщиков и изыскателей.</div>
            </div>
          </div>

          <form className="bg-cream rounded-3xl p-7 space-y-4" action="https://formsubmit.co/info@iniz-tver.ru" method="POST">
            <h2 className="text-2xl font-bold">Оставить заявку</h2>
            <p className="text-sm text-neutral-600">Заполните форму — перезвоним в течение 15 минут.</p>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Услуга</label>
              <select name="service" className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-white" defaultValue="Бурение скважины">
                <option>Бурение скважины</option>
                <option>Геологические изыскания</option>
                <option>Водоснабжение под ключ</option>
                <option>Обслуживание / ремонт</option>
                <option>Не знаю — нужна консультация</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Имя *</label>
                <input required name="name" type="text" placeholder="Как обращаться" className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Телефон *</label>
                <input required name="phone" type="tel" placeholder="+7 (___) ___-__-__" className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Адрес объекта</label>
              <input name="address" type="text" placeholder="Тверская обл., район, населённый пункт" className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Комментарий</label>
              <textarea name="comment" rows={3} placeholder="Глубина, тип объекта, сроки, бюджет" className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-white" />
            </div>
            <button type="submit" className="btn btn-amber w-full justify-center">Отправить заявку</button>
            <label className="flex gap-2 text-xs text-neutral-600 items-start">
              <input required type="checkbox" className="mt-1" />
              <span>
                Согласен на сбор и обработку персональных данных согласно{" "}
                <a href="/privacy" className="underline">политике конфиденциальности</a> и{" "}
                <a href="/agreement" className="underline">пользовательскому соглашению</a>.
              </span>
            </label>
          </form>
        </div>
      </section>
    </>
  );
}
