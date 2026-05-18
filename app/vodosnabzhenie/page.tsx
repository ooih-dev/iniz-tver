import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABlock } from "@/components/CTA";
import { JsonLd, ServiceSchema, FaqSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Водоснабжение частного дома под ключ в Твери — от скважины до крана",
  description:
    "Водоснабжение частного дома и участка в Тверской области: насос, кессон, гидроаккумулятор, разводка по дому. Под ключ, гарантия 5 лет.",
  alternates: { canonical: "/vodosnabzhenie" },
};

const PACKAGES = [
  {
    t: "Базовая обвязка скважины",
    p: "от 95 000 ₽",
    list: ["Скважинный адаптер или оголовок", "Скважинный насос", "Кабель + трос", "Гидроаккумулятор 50 л", "Реле давления, манометр"],
  },
  {
    t: "С кессоном",
    p: "от 165 000 ₽",
    list: ["Установка кессона 1 × 2 м", "Утепление, гидроизоляция", "Подключение насоса и автоматики", "Ввод трубы в дом до 10 м", "Гидроаккумулятор 100 л"],
  },
  {
    t: "Под ключ + разводка",
    p: "от 280 000 ₽",
    list: ["Всё из пакета «С кессоном»", "Магистраль по дому: ХВС/ГВС", "Подключение бойлера, фильтров", "Подключение сантехнических точек", "Запуск, гидравлика, паспорт"],
  },
];

const ENGINEERING = [
  ["Скважинный насос", "Подбираем по дебиту и высоте подъёма. Бренды на выбор — рекомендации по бюджету и срокам службы."],
  ["Гидроаккумулятор", "50–200 л в зависимости от количества точек водоразбора и пиковой нагрузки."],
  ["Автоматика", "Реле давления, защита от сухого хода, частотник для крупных объектов."],
  ["Фильтрация", "Механика + умягчение + обезжелезивание по результатам химического анализа воды."],
  ["Ввод в дом", "Утеплённая магистраль, ниже глубины промерзания. Кабель греющий — на критических участках."],
  ["Разводка", "PEX или полипропилен. Коллекторная схема, перекрытие каждой точки отдельно."],
];

const FAQ = [
  { q: "Сколько стоит водоснабжение под ключ от скважины?", a: "Для частного дома обычно 280 000–480 000 ₽ в зависимости от глубины скважины, длины ввода в дом, типа кессона и количества сантехнических точек. Точная смета — после выезда инженера." },
  { q: "Какой насос вы устанавливаете?", a: "Подбираем по дебиту скважины и нужному напору. Чаще всего ставим европейские бренды для длительной эксплуатации; для дач — российские. Гарантию даём на установку и наладку." },
  { q: "Зачем нужен кессон?", a: "Кессон защищает оголовок скважины и насосное оборудование от промерзания зимой, доступа посторонних и попадания поверхностной воды. Альтернатива — скважинный адаптер с прокладкой по утеплённой траншее." },
  { q: "Делаете ли фильтрацию воды?", a: "Да, по результатам анализа. Делаем химический анализ из вашей скважины (или прокачанной нашей), на основе результатов подбираем фильтры: механика, обезжелезиватель, умягчитель, УФ-стерилизация." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Водоснабжение частного дома под ключ", description: "Монтаж водоснабжения от скважины до крана: насос, кессон, гидроаккумулятор, разводка по дому в Твери и Тверской области.", price: "95000" })} />
      <JsonLd data={FaqSchema(FAQ)} />

      <section className="bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Услуга 03</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Водоснабжение <em className="accent not-italic">частного дома</em> под ключ
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              От скважины до крана на кухне. Кессон, насос, гидроаккумулятор, ввод в дом, разводка по сантехническим точкам. Делаем сами, без субподряда.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/kontakty" className="btn btn-primary">Заявка на расчёт</Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/gubino.png" alt="Водоснабжение частного дома: кессон и обустройство скважины" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Пакеты</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Три уровня <em className="accent">обустройства</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p, i) => (
              <article key={p.t} className={`rounded-3xl p-7 border ${i === 2 ? "bg-teal-700 text-white border-teal-700" : "bg-white border-neutral-200"}`}>
                <div className="font-mono text-xs opacity-70">Пакет {String(i + 1).padStart(2, "0")} / 03</div>
                <h3 className="font-bold text-xl mt-2">{p.t}</h3>
                <div className="text-3xl font-extrabold mt-3">{p.p}</div>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.list.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className={i === 2 ? "text-amber-400" : "text-teal-600"}>✓</span>{it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Из чего состоит</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Оборудование и инженерия</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGINEERING.map(([t, d]) => (
              <div key={t} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold">{t}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Частые вопросы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">О водоснабжении дома</h2>
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
        </div>
      </section>

      <CTABlock title="Нужно водоснабжение под ключ?" lead="Инженер выедет на участок, посчитает точную стоимость с учётом длины ввода и количества точек." />
    </>
  );
}
