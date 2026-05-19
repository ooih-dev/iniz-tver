import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABlock } from "@/components/CTA";
import { LeadButton } from "@/components/LeadButton";
import { JsonLd, ServiceSchema, FaqSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Инженерно-геологические изыскания в Твери — ИНИЗ, отчёт под экспертизу",
  description:
    "Инженерно-геологические изыскания (ИГИ) в Твери и области для проектирования и строительства. Отчёт по СП 47.13330, своя лаборатория. От 45 000 ₽ за объект.",
  alternates: { canonical: "/inzhenernye-izyskaniya" },
};

const SCOPE = [
  { t: "Бурение разведочных скважин", d: "ПБУ-2 на грунты — выработки глубиной до 30 м. Описание разреза, отбор проб ненарушенной структуры." },
  { t: "Полевые испытания", d: "Статическое зондирование, штамповые испытания, измерение уровня грунтовых вод, СПТ." },
  { t: "Лабораторные испытания", d: "Своя лаборатория: физико-механические свойства грунтов, грансостав, агрессивность, химический анализ воды." },
  { t: "Технический отчёт", d: "По СП 47.13330.2016 и СП 22.13330.2016. Графика, разрезы, расчётные характеристики, заключения." },
  { t: "Согласования и экспертиза", d: "Сопровождаем отчёт до положительного заключения Главгосэкспертизы или негосударственной экспертизы." },
];

const FOR_WHOM = [
  { t: "Проектные организации", d: "Для разработки проектной документации, расчёта фундаментов, инженерных сетей." },
  { t: "Застройщики", d: "ИЖС, посёлки, многоквартирные дома, коммерческая недвижимость в Тверской области." },
  { t: "Промышленные объекты", d: "Заводы, производства, склады, ангары, площадки под спецтехнику." },
  { t: "Линейные объекты", d: "Автодороги, инженерные коммуникации, трубопроводы." },
  { t: "Частные клиенты", d: "Перед строительством дома, чтобы не «попасть» с фундаментом на плывунах или насыпных грунтах." },
];

const CLUSTERS = [
  "Гидрогеологические изыскания",
  "Экспертиза изысканий",
  "Отчёт и проектная документация ИГИ",
  "Геология участка под строительство",
  "Инженерно-геодезические работы и топосъёмка",
  "Стоимость и заказ изысканий",
];

const FAQ = [
  { q: "Сколько стоят инженерно-геологические изыскания?", a: "Зависит от площади объекта, количества выработок и состава лабораторных испытаний. От 45 000 ₽ за небольшой частный объект; для производственного — обычно 120 000–350 000 ₽. Точную цену рассчитывает геолог после знакомства с проектом." },
  { q: "Сколько времени занимает отчёт?", a: "От 7 рабочих дней. Большинство частных объектов — 7–10 дней с момента выезда. Промышленные объекты — 14–21 день. Своя лаборатория позволяет не зависеть от очереди в Москве." },
  { q: "Прошёл ли ваш отчёт экспертизу?", a: "100% наших отчётов прошли государственную и негосударственную экспертизу с 2010 года. Все отчёты делаем по СП 47.13330 и СП 22.13330. Можем приложить положительные заключения как референс." },
  { q: "Работаете ли по госконтрактам?", a: "Да. У нас лицензия Роснедра и членство в СРО проектировщиков и изыскателей. Опыт работы по 44-ФЗ и 223-ФЗ." },
  { q: "В чём отличие от компаний из Москвы?", a: "Мы базируемся в Твери, выезжаем в день обращения и не возим пробы в столицу — у нас своя лаборатория. Сроки получаются на 5–10 дней быстрее, а ответственность ближе." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={ServiceSchema({ name: "Инженерно-геологические изыскания", description: "Инженерно-геологические изыскания (ИГИ) для проектирования и строительства в Твери и Тверской области. Отчёт по СП 47.13330, своя лаборатория.", price: "45000" })} />
      <JsonLd data={FaqSchema(FAQ)} />

      <section className="bg-cream">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Услуга 02</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
              Инженерно-геологические изыскания<br />
              <em className="accent not-italic">в Твери и Тверской области</em>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
              ИГИ для проектирования, экспертизы и строительства фундаментов, дорог, инженерных сетей. Своя буровая, штатные геологи, лаборатория и положительные заключения экспертизы с 2010 года.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LeadButton>Заявка на расчёт</LeadButton>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/geolog.png" alt="Инженерно-геологические изыскания, бурение разведочных скважин" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Состав работ</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что входит в комплекс <em className="accent">ИГИ</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCOPE.map((s, i) => (
              <article key={s.t} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="font-mono text-xs text-teal-700">{String(i + 1).padStart(2, "0")} / 05</div>
                <h3 className="font-bold mt-2 text-lg">{s.t}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Для кого</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Кому нужна <em className="accent">геология участка</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOR_WHOM.map((s) => (
              <div key={s.t} className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold">{s.t}</h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUB-TOPICS */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Связанные работы</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что мы ещё делаем по изысканиям</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold mt-4">О геологии под строительство</h2>
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

      <CTABlock title="Нужна геология под объект?" lead="Геолог приедет на участок, оценит сложность и предложит план работ — в день обращения." />
    </>
  );
}
