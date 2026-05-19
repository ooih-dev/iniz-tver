import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { InlineCTA } from "@/components/InlineCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Анализ воды из скважины в Твери — лаборатория, цена от 5 000 ₽ | ИНИЗ",
  description:
    "Анализ воды из скважины и колодца в Твери: лабораторное исследование, официальное заключение. Цена от 5 000 ₽. Отбор пробы, подбор фильтрации по результату.",
  alternates: { canonical: "/analiz-vody" },
};

const CRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Анализ воды", path: "/analiz-vody" },
];

const SHOWS = [
  ["Жёсткость", "Соли кальция и магния — причина накипи и налёта."],
  ["Железо и марганец", "Бурый осадок, ржавый цвет, пятна на сантехнике."],
  ["Нитраты и аммиак", "Признак загрязнения водоносного горизонта стоками."],
  ["Микробиология", "Бактерии и кишечная палочка — для колодцев и мелких скважин."],
  ["pH и минерализация", "Кислотность и общий солевой состав воды."],
  ["Мутность и запах", "Органолептика — первый признак проблем с источником."],
];

const STAGES = [
  ["Отбор пробы", "Показываем, как набрать воду в чистую тару, либо отбираем пробу на объекте."],
  ["Лаборатория", "Исследование по нужному набору показателей — базовый или расширенный."],
  ["Заключение", "Официальный протокол с результатами и нормами СанПиН."],
  ["Рекомендации", "Подбираем фильтрацию под фактический состав воды, если нужно."],
];

const FAQ = [
  { q: "Где сдать воду на анализ в Твери?", a: "Пробу можно привезти к нам или передать через инженера при выезде на объект. Исследование проводит лаборатория, по результату выдаётся официальное заключение." },
  { q: "Сколько стоит анализ воды?", a: "Лабораторный анализ качества воды с официальным заключением — от 5 000 ₽. Цена зависит от набора показателей: базовый набор дешевле, расширенный с микробиологией — дороже." },
  { q: "Что показывает анализ воды из скважины?", a: "Жёсткость, железо, марганец, нитраты, аммиак, pH, минерализацию, мутность, запах, при необходимости — микробиологию. Этого достаточно, чтобы оценить пригодность воды для питья и подобрать фильтр." },
  { q: "Как правильно отобрать пробу воды?", a: "Воду набирают в чистую тару (1,5–2 л) после прокачки скважины, без воздушных пузырей, и доставляют в лабораторию в течение суток. Для микробиологии нужна стерильная тара — подскажем при заявке." },
  { q: "Сколько делается анализ воды?", a: "Базовый химический анализ — обычно 3–5 рабочих дней. Расширенный с микробиологией — до 7 дней. Точный срок зависит от набора показателей." },
  { q: "Нужен ли анализ воды для новой скважины?", a: "Да. После бурения анализ показывает фактический состав воды и нужна ли фильтрация. Без него подбор системы очистки — это угадывание." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Анализ воды из скважины", description: "Лабораторный анализ качества воды из скважины и колодца в Твери с официальным заключением.", price: "5000" })} />
      <JsonLd data={FaqSchema(FAQ)} />
      <JsonLd data={BreadcrumbSchema(CRUMBS)} />
      <Breadcrumbs items={CRUMBS} />

      <section className="bg-cream !pt-10">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Услуга · Анализ воды</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Анализ воды из скважины <em className="accent not-italic">в Твери</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              Лабораторный анализ качества воды из скважины и колодца в Твери и Тверской области. Показывает фактический состав воды и пригодность для питья.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              По результату выдаём официальное заключение и подбираем систему фильтрации под конкретные показатели. Цена анализа — от 5 000 ₽.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Сдать воду на анализ</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/geolog.png" alt="Анализ воды из скважины в лаборатории, Тверь" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section>
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow">Что это</div>
            <h2 className="text-2xl md:text-4xl font-bold mt-3">Зачем нужен анализ воды</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Вода из скважины проходит природную фильтрацию через породу, но её состав зависит от горизонта и района. Железо, жёсткость, нитраты не видны на глаз — их выявляет только лабораторный анализ.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Анализ нужен для новой скважины, при смене вкуса или цвета воды, перед покупкой участка и для подбора фильтра. Без протокола система очистки подбирается вслепую.
            </p>
          </div>
          <div className="bg-cream rounded-3xl p-7">
            <h2 className="text-2xl md:text-4xl font-bold">Когда сдавать воду</h2>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li className="flex gap-2"><span className="text-teal-600">✓</span> После бурения новой скважины</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Изменился вкус, запах или цвет воды</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Перед подбором системы фильтрации</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Перед покупкой участка со скважиной</li>
              <li className="flex gap-2"><span className="text-teal-600">✓</span> Раз в 1–2 года для контроля источника</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Показатели</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что показывает анализ воды</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SHOWS.map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="font-bold text-lg">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Как проходит · 04 этапа</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Состав работ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAGES.map(([t, d], i) => (
              <div key={t} className="bg-cream rounded-2xl p-6">
                <div className="font-mono text-xs text-teal-700">Этап {String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold mt-2 text-lg">{t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-8">
            <div className="eyebrow">Цена</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Стоимость анализа воды</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-white rounded-3xl p-7 border border-neutral-200">
              <div className="font-bold text-xl">Анализ качества воды</div>
              <div className="text-3xl font-extrabold mt-3">от 5 000 ₽</div>
              <p className="text-sm text-neutral-600 mt-2">Лабораторное исследование с официальным заключением.</p>
            </div>
            <div className="bg-white rounded-3xl p-7 border border-neutral-200">
              <div className="font-bold text-xl">Установка фильтрации</div>
              <div className="text-3xl font-extrabold mt-3">от 15 000 ₽</div>
              <p className="text-sm text-neutral-600 mt-2">Подбор и монтаж системы очистки по результатам анализа.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            Ориентир по ценам — tver-burmaster.ru; стоимость уточняйте по телефону. Срок анализа — 3–7 рабочих дней.
          </p>
        </div>
      </section>

      <InlineCTA text="Поможем отобрать пробу и сдать воду в лабораторию." button="Заказать анализ воды" />

      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Об анализе воды в Твери</h2>
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
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="btn btn-ghost">← На главную</Link>
            <Link href="/artezianskaya-skvazhina" className="btn btn-ghost">Артезианская скважина</Link>
            <Link href="/abissinskaya-skvazhina" className="btn btn-ghost">Абиссинская скважина</Link>
            <Link href="/pesochnaya-skvazhina" className="btn btn-ghost">Песчаная скважина</Link>
          </div>
        </div>
      </section>

      <CTABlock title="Нужен анализ воды?" lead="Поможем отобрать пробу и сдать воду в лабораторию. По результату подберём фильтрацию." />
    </>
  );
}
