import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { InlineCTA } from "@/components/InlineCTA";
import { JsonLd, LocalBusinessSchema, FaqSchema } from "@/components/JsonLd";
import { EXTRAS, ON_REQUEST } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Бурение скважин на воду в Твери — цены, под ключ | ИНИЗ",
  description:
    "Бурение скважин на воду в Твери и Тверской области: артезианская, абиссинская, песчаная скважина. Водоснабжение под ключ от 151 200 ₽, анализ воды от 5 000 ₽.",
  alternates: { canonical: "/" },
};

const SKVAZHINY = [
  {
    href: "/artezianskaya-skvazhina",
    img: "/img/rig1.png",
    title: "Артезианская скважина",
    price: "от 151 200 ₽",
    priceNote: "пакеты водоснабжения под ключ",
    desc: "Глубокая скважина на известняк, 60–250 м. Чистая вода, стабильный дебит, срок службы 30–50 лет.",
    points: ["Круглогодичное водоснабжение дома", "Бурение, обсадка, кессон, насос", "Паспорт скважины, гарантия 6 лет"],
  },
  {
    href: "/abissinskaya-skvazhina",
    img: "/img/rig2.png",
    title: "Абиссинская скважина",
    price: "по запросу",
    priceNote: "самый бюджетный вариант",
    desc: "Скважина-игла глубиной 8–12 м. Монтаж за день, заходит на любой участок. Для сезонной дачи.",
    points: ["Вода на даче за 1 день", "Малая глубина, поверхностный насос", "Расчёт после оценки участка"],
  },
  {
    href: "/pesochnaya-skvazhina",
    img: "/img/rig3.jpg",
    title: "Песчаная скважина",
    price: "3 500–3 950 ₽/м",
    priceNote: "бурение сверх 30 м + обустройство",
    desc: "Скважина на песчаный горизонт, 20–50 м. Промежуточный вариант по цене и качеству воды.",
    points: ["Сетчатый фильтр от песка", "Бурение 1–2 дня", "Для дома и дачи"],
  },
  {
    href: "/analiz-vody",
    img: "/img/geolog.png",
    title: "Анализ воды",
    price: "от 5 000 ₽",
    priceNote: "лаборатория, офиц. заключение",
    desc: "Лабораторный анализ воды из скважины и колодца. Выявляет железо, жёсткость, нитраты, микробиологию.",
    points: ["Официальный протокол по СанПиН", "Срок 3–7 дней", "Подбор фильтрации по результату"],
  },
];

const OTHER = [
  { href: "/inzhenernye-izyskaniya", t: "Инженерно-геологические изыскания", d: "ИГИ для проектирования и строительства, отчёт по СП 47.13330." },
  { href: "/vodosnabzhenie", t: "Водоснабжение под ключ", d: "Кессон, насос, гидроаккумулятор, разводка по дому." },
  { href: "/burenie-skvazhin", t: "Бурение скважин — все типы", d: "Сравнение артезианской, песчаной и абиссинской скважины." },
  { href: "/kontakty", t: "Ремонт и обслуживание скважин", d: "Прокачка, чистка, замена насоса, ремонт кессона." },
];

const WHY = [
  ["15 лет в Тверской области", "Бурим с 2010 года, более 1 200 скважин."],
  ["Своя буровая техника", "4 установки, включая малогабаритные — без аренды."],
  ["Штатные геологи и мастера", "Без субподряда. Работу ведёт и сдаёт один мастер."],
  ["Договор и гарантия", "Фиксированная стоимость в смете, гарантия до 6 лет."],
  ["Своя лаборатория", "Анализ воды и грунтов без отправки в Москву."],
  ["Выезд за 24 часа", "Инженер на объекте в течение суток, расчёт в день выезда."],
];

const CASES = [
  { img: "/img/rig1.png", t: "Артезианская скважина 87 м, Калининский р-н", s: [["Глубина", "87 м"], ["Дебит", "3.4 м³/ч"], ["Срок", "3 дня"]] },
  { img: "/img/gubino.png", t: "Водоснабжение дома под ключ, Губино", s: [["Кессон", "+ насос"], ["Монтаж", "1 день"], ["Гарантия", "6 лет"]] },
  { img: "/img/pomosh.png", t: "ИГИ под производственное здание", s: [["Объект", "2 400 м²"], ["Скважины", "6"], ["Срок", "9 дней"]] },
];

const FAQ = [
  { q: "Сколько стоит пробурить скважину на воду в Твери?", a: "Водоснабжение под ключ — от 151 200 ₽ («Скважина для дачи»), 299 000 ₽ («Скважина для дома») и 495 000 ₽ («Скважина для коттеджа»). Бурение сверх 30 м — 3 500–3 950 ₽ за погонный метр. Точная цена — после выезда." },
  { q: "Какую скважину выбрать — артезианскую, песчаную или абиссинскую?", a: "Артезианская (60–250 м) — для круглогодичного водоснабжения дома, служит 30–50 лет. Песчаная (20–50 м) — дешевле, для дома и дачи. Абиссинская (8–12 м) — сезонная дача, монтаж за день." },
  { q: "Какая глубина скважины в Тверской области?", a: "Артезианский известняк залегает на 60–180 м, песчаный горизонт — на 20–50 м. Точную глубину геолог определяет по адресу." },
  { q: "Делаете водоснабжение под ключ?", a: "Да: бурение, обсадка, кессон, насос, гидроаккумулятор, автоматика, разводка по дому. На выходе — рабочий водопровод и паспорт скважины." },
  { q: "Нужен ли анализ воды из новой скважины?", a: "Да. Анализ показывает фактический состав воды и нужна ли фильтрация. Лабораторное исследование с заключением — от 5 000 ₽." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={LocalBusinessSchema()} />
      <JsonLd data={FaqSchema(FAQ)} />

      {/* HERO */}
      <section className="bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5 text-xs font-mono">
              <span className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Тверь и Тверская область
              </span>
              <span className="inline-flex items-center bg-white rounded-full px-3 py-1.5">15 лет · 1 200+ скважин</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Бурение скважин на воду <em className="accent not-italic">в Твери</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Артезианская, песчаная, абиссинская скважина. Водоснабжение под ключ, инженерно-геологические изыскания и анализ воды. Своя техника, штатные геологи, договор и гарантия.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Рассчитать стоимость</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
            <div className="mt-9 grid grid-cols-4 gap-4 max-w-lg">
              {[["15", "лет опыт"], ["1 200+", "скважин"], ["6", "лет гарантия"], ["24", "часа выезд"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl md:text-3xl font-bold">{n}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/rig1.png" alt="Бурение скважины на воду в Тверской области" width={720} height={900} className="object-cover w-full h-full" priority />
          </div>
        </div>
      </section>

      {/* 4 OFFERINGS — HUB */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Услуги · бурение и вода</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Скважина на воду под ключ</h2>
            <p className="mt-4 text-neutral-700">Четыре решения под разные задачи и бюджет. Цена и состав работ — в каждом блоке.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SKVAZHINY.map((s) => (
              <article key={s.href} className="bg-white rounded-3xl overflow-hidden border border-neutral-200 flex flex-col">
                <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr]">
                  <div className="relative">
                    <Image src={s.img} alt={s.title + " — Тверь"} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-teal-700">{s.price}</span>
                      <span className="text-xs text-neutral-500">{s.priceNote}</span>
                    </div>
                    <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <ul className="space-y-1.5 text-sm border-t border-neutral-100 pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2"><span className="text-teal-600">✓</span>{p}</li>
                    ))}
                  </ul>
                  <Link href={s.href} className="btn btn-primary mt-5 w-full justify-center">Подробнее</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Не определились с типом скважины? Подскажем по вашему участку." button="Получить расчёт" />

      {/* OTHER SERVICES */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Ещё услуги</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Геология, водоснабжение, сервис</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER.map((o) => (
              <Link key={o.href} href={o.href} className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-teal-500 transition">
                <h3 className="font-bold">{o.t}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{o.d}</p>
                <span className="text-teal-700 text-sm font-semibold mt-3 inline-block">Подробнее →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border border-neutral-200">
            <div className="font-semibold mb-3">Доп. услуги — прайс</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              {EXTRAS.map((e) => (
                <div key={e.name} className="flex justify-between border-b border-dashed border-neutral-200 pb-1.5">
                  <span className="text-neutral-600">{e.name}</span>
                  <span className="font-semibold whitespace-nowrap ml-3">{e.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-500 mt-4">
              Без опубликованной цены (расчёт индивидуальный): {ON_REQUEST.join(", ").toLowerCase()}. Ориентир по ценам — tver-burmaster.ru; стоимость уточняйте по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Почему ИНИЗ</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Бурим сами, отвечаем за результат</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map(([t, d], i) => (
              <div key={t} className="bg-cream rounded-2xl p-6">
                <div className="font-mono text-xs text-teal-700">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-2">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Выезд инженера и расчёт стоимости — бесплатно." button="Записаться на выезд" />

      {/* CASES */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Объекты</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Работы в Тверской области</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <article key={c.t} className="bg-white rounded-3xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={c.img} alt={c.t} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold">{c.t}</h3>
                  <dl className="mt-4 space-y-1.5 text-sm">
                    {c.s.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-dashed border-neutral-200 pb-1">
                        <dt className="text-neutral-500">{k}</dt>
                        <dd className="font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <div className="eyebrow">Вопрос — ответ</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="bg-cream rounded-2xl p-5 border border-neutral-200 group">
                <summary className="font-semibold cursor-pointer flex justify-between gap-4">
                  {f.q}
                  <span className="text-teal-700 text-2xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-neutral-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/faq" className="btn btn-ghost">Все вопросы</Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
