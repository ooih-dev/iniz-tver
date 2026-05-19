import { LeadButton } from "@/components/LeadButton";

export function InlineCTA({
  text = "Готовы посчитать стоимость по вашему участку?",
  button = "Оставить заявку",
}: {
  text?: string;
  button?: string;
}) {
  return (
    <div className="container-x">
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="font-semibold text-lg text-ink">{text}</div>
        <LeadButton className="btn btn-primary whitespace-nowrap">{button}</LeadButton>
      </div>
    </div>
  );
}
