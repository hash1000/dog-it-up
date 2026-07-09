import MenuCard from "./MenuCard";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-6">
        <h3 className="whitespace-nowrap text-h2 font-bold text-ink">{title}</h3>
        <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-[39px] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
