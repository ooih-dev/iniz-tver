import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CTABlock } from "@/components/CTA";
import { JsonLd, LocalBusinessSchema, FaqSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Бурение скважин и геология в Твери — ИНИЗ, 15 лет работы",
  description:
    "Бурим артезианские скважины на воду и проводим инженерно-геологические изыскания в Тверской области. Своя техника, штатные геологи, договор и гарантия 5 лет.",
  alternates: { canonical: "/" },
};

const ADVANTAGES = [
  { ttl: "Гарантия 5 лет", txt: "На все буровые работы и геологические отчёты. Прописываем в договоре, выезжаем по сервисной заявке." },
  { ttl: "Свои инженеры", txt: "Штатные геологи и буровые мастера со стажем 10+ лет. Без посредников, субподряда и удалённых «специалистов»." },
  { ttl: "4 буровые установки", txt: "УРБ-2А-2, ПБУ-2 и две малогабаритки. Зайдём на участок, где другие отказались." },
  { ttl: "Своя лаборатория", txt: "Грунты и воду исследуем сами. Не возим в Москву и не ждём — отчёт быстрее на 5–10 дней." },
  { ttl: "Отчёт под экспертизу", txt: "СП 47.13330 / СП 22.13330. Прошёл 100% наших отчётов в Главгосэкспертизе и негосударственных экспертизах." },
  { ttl: "Зимой и летом", txt: "Бурим круглый год. Зимняя бригада, обогрев, режим работы при −25 °C — стандартная практика." },
  { ttl: "Лицензия + СРО", txt: "Лицензия Роснедра, членство в СРО проектировщиков и изыскателей. Работаем с тендерами и гос. контрактами." },
  { ttl: "Выезд за 24 часа", txt: "Инженер на объекте в течение суток после заявки. Замер, расчёт и КП — в день выезда." },
];

const PROCESS = [
  { n: "01", t: "Заявка и звонок", d: "Принимаем заявку, уточняем участок, задачу, сроки. Консультация инженера.", day: "0–1 час" },
  { n: "02", t: "Выезд на объект", d: "Геолог или буровой мастер выезжает на участок, осматривает, уточняет глубину и условия.", day: "1–2 дня" },
  { n: "03", t: "Договор и КП", d: "Фиксируем стоимость, объём, сроки. Никаких «вылезших» работ — всё в смете.", day: "2–3 дня" },
  { n: "04", t: "Работы на участке", d: "Бурение скважины или комплекс изысканий. Журнал и фото-фиксация каждого этапа.", day: "3–14 дней" },
  { n: "05", t: "Сдача и гарантия", d: "Паспорт скважины или технический отчёт. Гарантия 5 лет. Сервис по звонку.", day: "1 день" },
];

const CASES = [
  { tag: "Бурение", t: "Артезианская скважина 87 м в Калининском районе", img: "/img/rig1.png", specs: [["Глубина", "87 м"], ["Дебит", "3.4 м³/ч"], ["Срок", "3 дня"]] },
  { tag: "Обустройство", t: "Кессон и водоснабжение «под ключ» в Губино", img: "/img/gubino.png", specs: [["Монтаж", "1 день"], ["Насос", "готов"], ["Гарантия", "5 лет"]] },
  { tag: "Геология", t: "ИГИ у производственного здания, 6 скважин", img: "/img/pomosh.png", specs: [["Объект", "2 400 м²"], ["Скважины", "6"], ["Срок", "9 дн."]] },
];

const FAQ = [
  { q: "Сколько стоит скважина под ключ?", a: "Зависит от глубины и обустройства. Только бурение НПВХ-трубой — от 2 100 ₽ за погонный метр. «Под ключ» (с кессоном, насосом, разводкой по дому) — обычно 280 000 — 480 000 ₽ для частного дома. Точную цену называет инженер после выезда." },
  { q: "На какой глубине у вас в районе вода?", a: "В Тверской области артезианский известняк лежит на глубине 60–180 м в зависимости от района. На песчаную скважину выходим на 25–50 м. Геолог по адресу подскажет — у нас есть карта по всем районам области." },
  { q: "Делаете геологию для экспертизы (Главгосэкспертиза)?", a: "Да. Все наши отчёты по СП 47.13330 и СП 22.13330. С 2010 года прошли 100% отчётов в государственной и негосударственной экспертизе. Можем приложить положительные заключения как референс." },
  { q: "Работаете с НДС / без НДС?", a: "Да, обе схемы. Юр. лицам — счёт, договор, акты, счёт-фактура. ИП и физ. лицам — наличный расчёт, безнал на карту, оплата на расчётный счёт." },
  { q: "Что входит в гарантию 5 лет?", a: "Целостность обсадной колонны, отсутствие заиливания, дебит на уровне паспорта. Если падает производительность или мутнеет вода — приезжаем по сервисной заявке, диагностируем и устраняем." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={LocalBusinessSchema()} />
      <JsonLd data={FaqSchema(FAQ)} />

      {/* HERO */}
      <section className="bg-cream relative overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5 text-xs font-mono">
              <span className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Принимаем заявки сегодня
              </span>
              <span className="inline-flex items-center bg-white rounded-full px-3 py-1.5">
                15 лет · 1 200+ скважин
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Бурение скважин на воду<br />
              <em className="not-italic text-teal-600">и инженерно-геологические изыскания</em><br />
              в Твери и Тверской области
            </h1>
            <p className="mt-6 text-lg text-neutral-700 max-w-xl leading-relaxed">
              Компания «Иниз» из Твери: бурим артезианские скважины и проводим геологические изыскания. Своя техника, штатные геологи, договор и гарантия 5 лет.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontakty" className="btn btn-primary">Заказать выезд инженера</Link>
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost">{SITE.phone}</a>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4 max-w-lg">
              {[["15", "лет", "Опыт"], ["1 200+", "", "Скважин"], ["5", "лет", "Гарантия"], ["14", "дн.", "Срок"]].map(
                ([num, u, lbl]) => (
                  <div key={lbl}>
                    <div className="text-2xl md:text-3xl font-bold">
                      {num}<span className="text-xs font-medium text-neutral-500 ml-0.5">{u}</span>
                    </div>
                    <div className="text-xs text-neutral-500 mt-0.5">{lbl}</div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-teal-700 aspect-[4/5]">
              <Image src="/img/rig1.png" alt="Буровая установка ИНИЗ на объекте в Тверской области" width={720} height={900} className="object-cover w-full h-full" priority />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Что мы делаем · 02 направления</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Две услуги. Полная <em className="accent">ответственность по каждой.</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { href: "/burenie-skvazhin", n: "01", tag: "Бурение", t: "Бурение скважин и водоснабжение", img: "/img/rig2.png", lead: "Артезианские и песчаные скважины «под ключ» — бурение, обсадка, обустройство кессоном, монтаж насосного оборудования и разводка по дому или объекту.", price: "от 2 100 ₽ / м" },
              { href: "/inzhenernye-izyskaniya", n: "02", tag: "Геология", t: "Инженерно-геологические изыскания", img: "/img/geolog.png", lead: "Инженерно-геологические изыскания для проектирования, экспертизы, строительства фундаментов, дорог, инженерных сетей. Для юр. лиц и частников.", price: "от 45 000 ₽ / объект" },
            ].map((s) => (
              <Link href={s.href} key={s.n} className="group block bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-teal-500 hover:shadow-lg transition">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image src={s.img} alt={s.t} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white">
                    <div className="font-mono text-xs opacity-80">{s.n} / Услуга</div>
                    <div className="text-2xl font-bold mt-1">{s.t}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 leading-relaxed">{s.lead}</p>
                  <div className="flex items-center justify-between mt-5">
                    <div className="font-bold text-lg">{s.price}</div>
                    <span className="text-teal-700 font-semibold group-hover:translate-x-1 transition-transform">Подробнее →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Почему ИНИЗ</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">8 причин, по которым нас <em className="accent">выбирают</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADVANTAGES.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-100">
                <div className="font-mono text-xs text-teal-700 mb-3">{String(i + 1).padStart(2, "0")} / 08</div>
                <div className="font-bold text-lg mb-2">{c.ttl}</div>
                <p className="text-sm text-neutral-600 leading-relaxed">{c.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Как мы работаем · 05 этапов</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">От заявки до <em className="accent">паспорта скважины</em> — две недели.</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-5 border border-neutral-200">
                <div className="font-mono text-xs text-teal-700">Шаг {s.n}</div>
                <div className="font-bold mt-3">{s.t}</div>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{s.d}</p>
                <div className="text-xs text-neutral-500 mt-4 font-mono">⏱ {s.day}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Объекты · 03 примера</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что мы сделали <em className="accent">в этом году</em>.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <article key={c.t} className="bg-white rounded-3xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={c.img} alt={c.t} fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-semibold">{c.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{c.t}</h3>
                  <dl className="mt-4 space-y-1.5 text-sm">
                    {c.specs.map(([k, v]) => (
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

      {/* TEAM */}
      <section>
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/img/director.jpg" alt="Куташов Виталий Николаевич — директор ИНИЗ" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-4 backdrop-blur">
              <div className="font-bold">Куташов Виталий Николаевич</div>
              <div className="text-sm text-neutral-600">Директор «ИНИЗ»</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">О компании</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">Местная компания. <em className="accent">15 лет</em> в Тверской области.</h2>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              «Иниз» — это собственная буровая бригада, штатные геологи и лаборатория на базе в Твери. Мы не нанимаем подрядчиков, не перепродаём чужие услуги. Если что-то идёт не по плану — приедет тот же мастер, который делал работу.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Работаем с физическими лицами и юридическими — от частного дома до промышленного комплекса. Все документы, гарантия, фиксированная стоимость в договоре.
            </p>
            <blockquote className="mt-6 pl-5 border-l-4 border-amber-400 italic text-neutral-700">
              «Мы работаем в Тверской области с 2010 года. Считаем своим главным активом то, что заказчики возвращаются и приводят соседей.»
              <div className="mt-2 not-italic text-sm text-neutral-500">— Куташов В. Н., директор «Иниз»</div>
            </blockquote>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[["2010", "Год основания"], ["12", "Сотрудников"], ["100%", "Своих работ"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold">{n}</div>
                  <div className="text-sm text-neutral-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow">Вопрос — ответ</div>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Что обычно <em className="accent">спрашивают</em> до заявки.</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="bg-white rounded-2xl p-5 border border-neutral-200 group">
                <summary className="font-semibold cursor-pointer flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-teal-700 text-2xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-neutral-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/faq" className="btn btn-ghost">Все вопросы</Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
