import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-teal-700 text-cream py-12 mt-12">
      <div className="container-x grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold text-lg text-white mb-2">{SITE.fullName}</div>
          <div className="opacity-80">{SITE.address}</div>
          <div className="opacity-80 mt-1">{SITE.hoursOffice}</div>
          <div className="opacity-60 mt-3 text-xs">
            ОГРН {SITE.legal.ogrn} · ИНН {SITE.legal.inn}
          </div>
        </div>
        <div>
          <div className="text-white/60 font-mono text-xs mb-3">УСЛУГИ</div>
          <ul className="space-y-2">
            <li><Link href="/burenie-skvazhin">Бурение скважин на воду</Link></li>
            <li><Link href="/inzhenernye-izyskaniya">Геологические изыскания</Link></li>
            <li><Link href="/vodosnabzhenie">Водоснабжение под ключ</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white/60 font-mono text-xs mb-3">КОМПАНИЯ</div>
          <ul className="space-y-2">
            <li><Link href="/faq">Вопросы и ответы</Link></li>
            <li><Link href="/kontakty">Контакты</Link></li>
            <li><Link href="/privacy">Политика конфиденциальности</Link></li>
            <li><Link href="/agreement">Пользовательское соглашение</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white/60 font-mono text-xs mb-3">СВЯЗАТЬСЯ</div>
          <a href={`tel:${SITE.phoneTel}`} className="block font-semibold text-white text-lg">{SITE.phone}</a>
          <div className="opacity-80 text-xs mt-1">На связи {SITE.hoursPhone}</div>
          <a href={`mailto:${SITE.email}`} className="block mt-3">{SITE.email}</a>
          <a href={SITE.socials.tg} target="_blank" rel="noreferrer" className="block mt-1 opacity-80">Telegram</a>
        </div>
      </div>
      <div className="container-x mt-8 pt-6 border-t border-white/10 text-xs opacity-60">
        © 2010–2026 {SITE.fullName}. Все права защищены.
      </div>
    </footer>
  );
}
