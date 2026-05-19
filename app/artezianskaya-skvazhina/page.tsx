import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { PriceCards } from "@/components/PriceCards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/JsonLd";
import { DRILL_RATE } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Артезианская скважина в Твери под ключ — бурение, цена | ИНИЗ",
  description:
    "Бурение артезианской скважины на воду в Твери и Тверской области под ключ. Пакеты от 151 200 ₽, глубина 60–250 м, гарантия 6 лет. Своя техника, паспорт скважины.",
  alternates: { canonical: "/artezianskaya-skvazhina" },
};

const CRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Артезианская скважина", path: "/artezianskaya-skvazhina" },
];

const STAGES = [
  ["Геологоразведка", "Геолог уточняет участок, доступ техники и ожидаемую глубину водоносного известняка."],
  ["Бурение", "Установка УРБ-2А-2 проходит до водоносного горизонта — обычно 60–180 м по Тверской области."],
  ["Обсадка колонны", "Стальная или комбинированная (сталь + пищевой пластик) труба, герметизация горизонтов."],
  ["Прокачка", "Прокачиваем скважину до чистой воды, замеряем статический и динамический уровни и дебит."],
  ["Обустройство", "Кессон с утеплением, оголовок, насос, гидроаккумулятор, автоматика, ввод в дом."],
  ["Сдача и паспорт", "Передаём паспорт скважины, гарантию до 6 лет и инструкцию по эксплуатации."],
];

const FAQ = [
  { q: "Сколько метров глубина артезианской скважины в Тверской области?", a: "Артезианский водоносный известняк в Тверской области залегает в среднем на 60–180 м, в отдельных районах — глубже. Точную глубину геолог определяет по адресу: у нас есть карта по большинству районов области." },
  { q: "Сколько стоит артезианская скважина под ключ?", a: "Стоимость зависит от глубины и комплектации. Пакеты водоснабжения «под ключ» — от 151 200 ₽ (базовый), 299 000 ₽ (стандарт) и 495 000 ₽ (премиум). Бурение сверх 30 м тарифицируется по " + DRILL_RATE + "." },
  { q: "Нужна ли лицензия на артезианскую скважину?", a: "Для личного водоснабжения частного дома лицензия на одиночную скважину, как правило, не требуется. Для юридических лиц и СНТ при добыче на продажу или в значимых объёмах оформляется лицензия на пользование недрами — поможем разобраться по вашему случаю." },
  { q: "Платится ли налог за артезианскую скважину?", a: "Для физических лиц при бытовом водопотреблении налог за скважину не взимается. Налоговые и лицензионные обязательства возникают у юридических лиц и при промышленных объёмах добычи." },
  { q: "Чем артезианская скважина лучше абиссинской?", a: "Артезианская бьёт из глубокого известняка: стабильный дебит, чистая вода независимо от уровня грунтовых вод, срок службы 30–50 лет. Абиссинская — мелкая (8–12 м), дешевле, но для сезонного водоснабжения. Подробнее — на странице абиссинской скважины." },
  { q: "Сколько служит артезианская скважина?", a: "При правильном обустройстве и периодическом обслуживании — 30–50 лет. Стальная обсадная колонна и кессон защищают скважину от заиливания и промерзания." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Бурение артезианской скважины", description: "Бурение артезианских скважин на воду под ключ в Твери и Тверской области.", price: "151200" })} />
      <JsonLd data={FaqSchema(FAQ)} />
      <JsonLd data={BreadcrumbSchema(CRUMBS)} />
      <Breadcrumbs items={CRUMBS} />

      <section className="bg-cream !pt-10">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Тип скважины · Артезианская</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Артезианская скважина <em className="accent not-italic">в Твери</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Бурим артезианские скважины на воду в Твери и Тверской области — на глубокий водоносный известняк. Это самый надёжный источник воды для дома: стабильный дебит и чистая вода, не зависящая от засухи и сезона.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Работаем под ключ: бурение, обсадка, кессон, насос, разводка и паспорт скважины. Своя буровая техника, штатные геологи, гарантия до 6 лет.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Рассчитать стоимость</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/rig1.png" alt="Бурение артезианской скважины на воду в Тверской области" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section>
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow">Что это</div>
            <h2 className="text-2xl md:text-4xl font-bold mt-3">Технология артезианской скважины</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Артезианская скважина вскрывает водоносный горизонт в известняке, где вода находится под естественным давлением между водоупорными слоями. Глубина в Тверской области — обычно 60–250 м. Вода проходит природную фильтрацию через породу, поэтому она чистая, без поверхностных загрязнений и сезонных колебаний.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Скважину обсаживают стальной или комбинированной колонной, устье защищают кессоном. Такой источник обеспечивает водой дом, баню и полив круглый год.
            </p>
          </div>
          <div className="bg-cream rounded-3xl p-7">
            <h2 className="text-2xl md:text-4xl font-bold">Когда подходит</h2>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Круглогодичное водоснабжение дома и коттеджа</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Большой расход воды, несколько точек разбора</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Нужна стабильность на десятилетия</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Питьевая вода без поверхностных загрязнений</li>
            </ul>
            <h3 className="text-lg font-bold mt-6">Когда стоит рассмотреть другое</h3>
            <ul className="mt-3 space-y-2 text-neutral-700 text-sm">
              <li className="flex gap-2"><span className="text-amber-500">→</span> Сезонная дача и полив — дешевле <Link href="/abissinskaya-skvazhina" className="underline">абиссинская</Link> или <Link href="/pesochnaya-skvazhina" className="underline">песчаная скважина</Link></li>
              <li className="flex gap-2"><span className="text-amber-500">→</span> Ограниченный бюджет на старте</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Состав работ · 06 этапов</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что входит в бурение под ключ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAGES.map(([t, d], i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="font-mono text-xs text-teal-700">Этап {String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-2 text-lg">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Цены и пакеты</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Стоимость артезианской скважины под ключ</h2>
            <p className="mt-4 text-neutral-700">
              Пакеты включают бурение до 30 м; глубже — {DRILL_RATE}. Срок выполнения — обычно 3–7 рабочих дней с момента договора.
            </p>
          </div>
          <PriceCards />
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Об артезианских скважинах в Твери</h2>
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
            <Link href="/abissinskaya-skvazhina" className="btn btn-ghost">Абиссинская скважина</Link>
            <Link href="/pesochnaya-skvazhina" className="btn btn-ghost">Песчаная скважина</Link>
            <Link href="/analiz-vody" className="btn btn-ghost">Анализ воды</Link>
          </div>
        </div>
      </section>

      <CTABlock title="Нужна артезианская скважина?" lead="Инженер выедет на участок, определит глубину и рассчитает точную стоимость в день выезда." />
    </>
  );
}
