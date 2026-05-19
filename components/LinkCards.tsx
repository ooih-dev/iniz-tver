import Link from "next/link";

const ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10z" />
  </svg>
);

export type LinkCard = { href: string; title: string; desc: string };

export function LinkCards({ items }: { items: LinkCard[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <Link
          key={it.title}
          href={it.href}
          className="group bg-white rounded-2xl p-5 border border-neutral-200 hover:border-teal-500 hover:shadow-md transition flex gap-3"
        >
          <span className="shrink-0 w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            {ICON}
          </span>
          <span className="min-w-0">
            <span className="block font-semibold leading-tight group-hover:text-teal-700">
              {it.title}
            </span>
            <span className="block text-sm text-neutral-500 mt-1 leading-snug">{it.desc}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
