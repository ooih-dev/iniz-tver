import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { PRICE_NOTE } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Абиссинская скважина в Твери — бурение скважины-иглы под ключ | ИНИЗ",
  description:
    "Бурение абиссинской скважины (скважины-иглы) в Твери и Тверской области. Монтаж за 1 день, поверхностный насос, недорогое водоснабжение для дачи. Плюсы и минусы.",
  alternates: { canonical: "/abissinskaya-skvazhina" },
};

const CRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Абиссинская скважина", path: "/abissinskaya-skvazhina" },
];

const PROS = [
  "Низкая цена — самый бюджетный способ получить воду",
  "Монтаж за 1 день, техника заходит на любой участок",
  "Можно бурить в подвале или под навесом",
  "Простое обслуживание, ремонтопригодность",
];
const CONS = [
  "Глубина 8–12 м — зависит от уровня грунтовых вод",
  "Вода требует анализа и часто фильтрации",
  "Небольшой дебит — для сезонного потребления",
  "Срок службы 5–8 лет, нужна периодическая прокачка",
];

const SCOPE = [
  ["Выезд и оценка", "Мастер оценивает уровень грунтовых вод и грунт на участке."],
  ["Забивка иглы", "Погружаем трубу-иглу с фильтром до водоносного песка, 8–12 м."],
  ["Прокачка", "Прокачиваем до чистой воды, проверяем приток."],
  ["Насос и подключение", "Монтаж поверхностного насоса или насосной станции, ввод в дом."],
];

const FAQ = [
  { q: "Сколько стоит абиссинская скважина?", a: "Абиссинская скважина — самый недорогой вариант водоснабжения. Точная стоимость зависит от глубины забивки и насосного оборудования. Назовём цену после оценки участка — звоните, расчёт бесплатный." },
  { q: "Какие плюсы и минусы у абиссинской скважины?", a: "Плюсы: низкая цена, монтаж за день, заходит на любой участок. Минусы: малая глубина (8–12 м) и зависимость от уровня грунтовых вод, небольшой дебит, срок службы 5–8 лет, воду желательно проверять и фильтровать." },
  { q: "Какой насос нужен для абиссинской скважины?", a: "Из-за небольшой глубины применяют поверхностный насос или насосную станцию — погружной не требуется. Конкретную модель подбираем по высоте подъёма и нужному напору." },
  { q: "Чем абиссинская скважина отличается от артезианской?", a: "Абиссинская — мелкая (8–12 м), труба-игла, поверхностный насос, для сезонного водоснабжения. Артезианская — глубокая (60–250 м), из известняка, чистая вода и срок службы 30–50 лет. Подробнее — на странице артезианской скважины." },
  { q: "Можно ли пить воду из абиссинской скважины?", a: "Вода из абиссинской скважины берётся с верхних песчаных горизонтов и может содержать железо или поверхностные загрязнения. Перед употреблением рекомендуем сделать анализ воды и при необходимости поставить фильтрацию." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Бурение абиссинской скважины", description: "Бурение абиссинской скважины (скважины-иглы) под ключ в Твери и Тверской области." })} />
      <JsonLd data={FaqSchema(FAQ)} />
      <JsonLd data={BreadcrumbSchema(CRUMBS)} />
      <Breadcrumbs items={CRUMBS} />

      <section className="bg-cream !pt-10">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Тип скважины · Абиссинская</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Абиссинская скважина <em className="accent not-italic">в Твери</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Абиссинская скважина (скважина-игла) — самый быстрый и недорогой способ получить воду на даче или участке в Тверской области. Забивается за один день, заходит даже в подвал или под навес.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Подходит для сезонного водоснабжения и полива. Делаем под ключ: забивка иглы, прокачка, монтаж поверхностного насоса и ввод воды в дом.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Узнать стоимость</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/rig4.jpg" alt="Бурение абиссинской скважины-иглы в Тверской области" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Что это</div>
            <h2 className="text-2xl md:text-4xl font-bold mt-3">Технология скважины-иглы</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Абиссинская скважина — это труба малого диаметра с фильтром-иглой на конце, которую забивают в грунт до водоносного песчаного слоя на глубину 8–12 м. Воду поднимают поверхностным насосом или насосной станцией. Технологии больше 150 лет, и для верховодки она остаётся самой экономичной.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-cream rounded-3xl p-7">
              <h3 className="text-xl font-bold text-teal-700">Когда подходит</h3>
              <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
                {PROS.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-teal-600">✓</span> {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-3xl p-7">
              <h3 className="text-xl font-bold text-amber-600">Когда не подходит</h3>
              <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
                {CONS.map((c) => (
                  <li key={c} className="flex gap-2"><span className="text-amber-500">→</span> {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Состав работ · 04 этапа</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что входит в монтаж</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCOPE.map(([t, d], i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="font-mono text-xs text-teal-700">Этап {String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-2">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x max-w-3xl">
          <div className="eyebrow">Цена и сроки</div>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Стоимость абиссинской скважины</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Абиссинская скважина — самый бюджетный вариант среди всех типов. Итоговая цена зависит от глубины забивки и выбранного насосного оборудования, поэтому её называет мастер после оценки участка. Монтаж занимает обычно 1 день.
          </p>
          <div className="mt-5 bg-cream rounded-2xl p-6">
            <div className="font-bold text-lg">Стоимость — по запросу</div>
            <p className="text-sm text-neutral-600 mt-1">Звоните — расчёт и выезд для оценки бесплатные. Сопутствующие работы: анализ качества воды — от 5 000 ₽, установка фильтрации — от 15 000 ₽.</p>
          </div>
          <p className="text-xs text-neutral-500 mt-3">{PRICE_NOTE}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Об абиссинских скважинах</h2>
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
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="btn btn-ghost">← На главную</Link>
            <Link href="/artezianskaya-skvazhina" className="btn btn-ghost">Артезианская скважина</Link>
            <Link href="/pesochnaya-skvazhina" className="btn btn-ghost">Песчаная скважина</Link>
            <Link href="/analiz-vody" className="btn btn-ghost">Анализ воды</Link>
          </div>
        </div>
      </section>

      <CTABlock title="Нужна вода на даче быстро?" lead="Абиссинскую скважину забиваем за день. Позвоните — мастер оценит участок и назовёт цену." />
    </>
  );
}
