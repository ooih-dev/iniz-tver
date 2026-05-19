import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { InlineCTA } from "@/components/InlineCTA";
import { JsonLd, ServiceSchema, FaqSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Бурение скважин на воду в Твери и Тверской области — ИНИЗ",
  description:
    "Бурение скважин на воду «под ключ» в Твери: артезианские, песчаные, абиссинские. Своя техника, паспорт скважины, гарантия 5 лет. От 2 100 ₽ за метр.",
  alternates: { canonical: "/burenie-skvazhin" },
};

const TYPES = [
  { t: "Артезианская скважина", d: "Скважина на известняк глубиной 60–250 м. Главное преимущество — стабильный дебит, чистая вода, не зависит от уровня грунтовых вод. Подходит для постоянного водоснабжения дома и бизнеса.", depth: "60–250 м", debit: "до 8 м³/ч", life: "30–50 лет" },
  { t: "Песчаная скважина", d: "На первый или второй водоносный песчаный горизонт, глубина 20–50 м. Дешевле артезианской, но требует регулярной прокачки и фильтра. Хорошее решение для дачи.", depth: "20–50 м", debit: "1–2 м³/ч", life: "5–15 лет" },
  { t: "Абиссинская скважина (скважина-игла)", d: "Самый бюджетный вариант: труба-игла до 8–12 м, поверхностный насос. Подходит, если есть верховодка и нужно сезонное водоснабжение. Делаем за 1 день.", depth: "8–12 м", debit: "0.5–1.5 м³/ч", life: "5–8 лет" },
];

const CLUSTERS = [
  "Анализ воды из скважины",
  "Артезианская скважина под ключ",
  "Абиссинская скважина-игла",
  "Песчаная скважина на даче",
  "Ремонт, чистка и прокачка скважин",
  "Обустройство кессоном, оголовком, адаптером",
  "Насосное оборудование",
  "Паспорт скважины и документы",
  "Водоснабжение бизнеса и объектов",
  "Водоснабжение частного дома и участка",
];

const STEPS = [
  ["Выезд геолога", "Уточняем участок, доступ техники, ожидаемую глубину. Бесплатно по сервисной заявке."],
  ["Договор и КП", "Фиксируем глубину, тип трубы, обустройство, сроки. Стоимость — без скрытых работ."],
  ["Бурение", "Установка УРБ-2А-2 (или малогабаритка для тесных участков). 3–7 дней с момента заезда."],
  ["Обсадка и прокачка", "НПВХ или сталь с пакером. Прокачиваем до чистой воды, замеряем дебит."],
  ["Обустройство", "Кессон, оголовок, скважинный адаптер, насос, гидроаккумулятор, автоматика."],
  ["Сдача и паспорт", "Передаём паспорт скважины с замерами, гарантию 5 лет, инструкцию по эксплуатации."],
];

const FAQ = [
  { q: "Сколько стоит бурение скважины на воду в Тверской области?", a: "Только бурение НПВХ — от 2 100 ₽ за погонный метр. Сталь с пакером — от 2 700 ₽. «Под ключ» с кессоном, насосом и разводкой по дому — обычно 280 000–480 000 ₽. Точную цену выставит инженер после выезда." },
  { q: "Какая глубина скважины в Твери и районах области?", a: "Зависит от района. В среднем артезианский известняк лежит на 60–180 м. У нас есть карта по большинству районов Тверской области — геолог по адресу подскажет ожидаемую глубину и пригодность воды." },
  { q: "Чем артезианская скважина отличается от абиссинской?", a: "Артезианская — глубокая (60–250 м), бьёт из известняка под давлением, чистая вода, долгий срок службы (30–50 лет). Абиссинская — мелкая (8–12 м), труба-игла, поверхностный насос, для сезонного водоснабжения." },
  { q: "Что входит в «под ключ»?", a: "Бурение, обсадная труба, прокачка, кессон или оголовок, скважинный адаптер, насос, гидроаккумулятор, автоматика, ввод трубы в дом. На выходе — рабочий кран в кухне или санузле." },
  { q: "Делаете ли паспорт скважины?", a: "Да. В паспорте — глубина, конструкция, статический и динамический уровни, дебит, описание грунтов, дата работ, гарантия. Передаём в день сдачи." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Бурение скважин на воду", description: "Бурение артезианских, песчаных и абиссинских скважин в Твери и Тверской области с обустройством под ключ.", price: "2100" })} />
      <JsonLd data={FaqSchema(FAQ)} />

      <section className="bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Услуга 01</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Бурение скважин на воду<br />
              <em className="accent not-italic">в Твери и Тверской области</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Артезианские, песчаные, абиссинские скважины «под ключ» — бурение, обсадка, обустройство кессоном, насос и разводка. Своя техника, штатные мастера, паспорт скважины и гарантия 5 лет.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Заявка на расчёт</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/rig2.png" alt="Бурение артезианской скважины в Тверской области" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Типы скважин</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Три типа — для разных <em className="accent">задач и бюджетов</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TYPES.map((s) => (
              <article key={s.t} className="bg-white rounded-3xl p-7 border border-neutral-200">
                <h3 className="text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-neutral-700 leading-relaxed">{s.d}</p>
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between border-b border-dashed pb-1">
                    <dt className="text-neutral-500">Глубина</dt><dd className="font-semibold">{s.depth}</dd>
                  </div>
                  <div className="flex justify-between border-b border-dashed pb-1">
                    <dt className="text-neutral-500">Дебит</dt><dd className="font-semibold">{s.debit}</dd>
                  </div>
                  <div className="flex justify-between border-b border-dashed pb-1">
                    <dt className="text-neutral-500">Срок службы</dt><dd className="font-semibold">{s.life}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Технология · 06 этапов</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Как мы бурим скважину</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map(([t, d], i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="font-mono text-xs text-teal-700">Шаг {String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-2 text-lg">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA text="Рассчитаем стоимость бурения по вашему адресу." button="Получить расчёт" />

      {/* TOPICS */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Полный спектр услуг</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что мы ещё делаем по скважинам</h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CLUSTERS.map((c) => (
              <li key={c} className="bg-cream rounded-xl px-5 py-4 border border-neutral-200 text-sm font-medium">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">О бурении скважин в Тверской области</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="bg-white rounded-2xl p-5 border border-neutral-200 group">
                <summary className="font-semibold cursor-pointer flex justify-between gap-4">
                  {f.q}
                  <span className="text-teal-700 text-2xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-neutral-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Готовы пробурить скважину?" lead="Оставьте заявку — инженер выедет на участок и рассчитает точную стоимость в день выезда." />
    </>
  );
}
