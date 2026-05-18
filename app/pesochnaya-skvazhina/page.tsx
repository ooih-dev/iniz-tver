import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { DRILL_RATE, PRICE_NOTE } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Песчаная скважина в Твери — бурение скважины на песок под ключ | ИНИЗ",
  description:
    "Бурение песчаной скважины на воду в Твери и Тверской области. Глубина 20–50 м, монтаж за 1–2 дня. Дешевле артезианской, гарантия и паспорт скважины.",
  alternates: { canonical: "/pesochnaya-skvazhina" },
};

const CRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Песчаная скважина", path: "/pesochnaya-skvazhina" },
];

const PROS = [
  "Дешевле артезианской скважины",
  "Бурение за 1–2 дня",
  "Достаточный дебит для дачи и небольшого дома",
  "Малогабаритная техника заходит на тесный участок",
];
const CONS = [
  "Срок службы 5–15 лет, нужна периодическая прокачка",
  "Дебит и качество зависят от водоносного песка",
  "Нужен фильтр, воду желательно проверить анализом",
  "Возможно заиливание при простоях",
];

const SCOPE = [
  ["Разведка участка", "Оцениваем грунт и предполагаемую глубину водоносного песка."],
  ["Бурение", "Проходка до песчаного горизонта — обычно 20–50 м."],
  ["Обсадка и фильтр", "Монтаж обсадной трубы и сетчатого фильтра на водоприёмной части."],
  ["Прокачка", "Прокачиваем до чистой воды, замеряем дебит."],
  ["Обустройство", "Оголовок или кессон, насос, ввод воды в дом, паспорт скважины."],
];

const FAQ = [
  { q: "Какая глубина у песчаной скважины?", a: "Песчаная скважина бьётся на первый или второй водоносный песчаный горизонт — в Тверской области это обычно 20–50 м. Точную глубину определяют по соседним скважинам и при бурении." },
  { q: "Сколько стоит песчаная скважина?", a: "Песчаная скважина дешевле артезианской. Стоимость зависит от глубины: бурение тарифицируется по " + DRILL_RATE + " сверх базовых 30 м, плюс обустройство. Точную цену назовём после оценки участка." },
  { q: "Сколько служит песчаная скважина?", a: "При регулярном использовании и периодической прокачке — 5–15 лет. Срок зависит от качества водоносного песка и того, насколько активно скважину эксплуатируют: простои ускоряют заиливание." },
  { q: "Что лучше — песчаная или артезианская скважина?", a: "Песчаная дешевле и быстрее, подходит для дачи и небольшого дома. Артезианская дороже, но даёт чистую воду и служит 30–50 лет. Если нужно постоянное водоснабжение большого дома — выбирайте артезианскую." },
  { q: "Нужен ли фильтр для песчаной скважины?", a: "Да. На водоприёмную часть устанавливается сетчатый фильтр, который задерживает песок. Дополнительно по результатам анализа воды может понадобиться обезжелезивание или механическая фильтрация." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Бурение песчаной скважины", description: "Бурение песчаной скважины на воду под ключ в Твери и Тверской области." })} />
      <JsonLd data={FaqSchema(FAQ)} />
      <JsonLd data={BreadcrumbSchema(CRUMBS)} />
      <Breadcrumbs items={CRUMBS} />

      <section className="bg-cream !pt-10">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Тип скважины · Песчаная</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Песчаная скважина <em className="accent not-italic">в Твери</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Песчаная скважина (скважина на песок) — недорогое решение для водоснабжения дачи и небольшого дома в Тверской области. Бурится за 1–2 дня на глубину 20–50 м.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Делаем под ключ: бурение, обсадка с фильтром, прокачка, обустройство и паспорт скважины. Малогабаритная техника заходит даже на тесные участки.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/kontakty" className="btn btn-primary">Узнать стоимость</Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/rig3.jpg" alt="Бурение песчаной скважины на воду в Тверской области" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Что это</div>
            <h2 className="text-2xl md:text-4xl font-bold mt-3">Технология песчаной скважины</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Песчаная скважина вскрывает водоносный песчаный горизонт на глубине 20–50 м. В обсадную колонну на водоприёмном участке устанавливают сетчатый фильтр, который задерживает песок и пропускает воду. Это промежуточный вариант между мелкой абиссинской и глубокой артезианской скважиной — по цене, сроку и качеству воды.
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
              <h3 className="text-xl font-bold text-amber-600">Что учесть</h3>
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
            <div className="eyebrow">Состав работ · 05 этапов</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что входит в бурение под ключ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <h2 className="text-3xl md:text-5xl font-bold mt-4">Стоимость песчаной скважины</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Песчаная скважина обходится дешевле артезианской за счёт меньшей глубины. Цена складывается из метража бурения ({DRILL_RATE} сверх базовых 30 м) и обустройства. Срок работ — обычно 1–2 дня.
          </p>
          <div className="mt-5 bg-cream rounded-2xl p-6">
            <div className="font-bold text-lg">Стоимость — по индивидуальному расчёту</div>
            <p className="text-sm text-neutral-600 mt-1">Выезд для оценки и расчёт бесплатные. Доп. услуги: установка фильтрации — от 15 000 ₽, анализ качества воды — от 5 000 ₽.</p>
          </div>
          <p className="text-xs text-neutral-500 mt-3">{PRICE_NOTE}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">О песчаных скважинах</h2>
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
            <Link href="/abissinskaya-skvazhina" className="btn btn-ghost">Абиссинская скважина</Link>
            <Link href="/analiz-vody" className="btn btn-ghost">Анализ воды</Link>
          </div>
        </div>
      </section>

      <CTABlock title="Нужна песчаная скважина?" lead="Позвоните — оценим участок, определим глубину водоносного песка и рассчитаем стоимость." />
    </>
  );
}
