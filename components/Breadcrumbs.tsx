import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="container-x pt-6">
      <ol className="flex flex-wrap gap-1.5 text-sm text-neutral-500">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i < items.length - 1 ? (
              <>
                <Link href={it.path} className="hover:text-teal-600">{it.name}</Link>
                <span aria-hidden>›</span>
              </>
            ) : (
              <span className="text-neutral-700" aria-current="page">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
