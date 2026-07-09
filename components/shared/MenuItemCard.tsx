import Image from "next/image";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex w-full max-w-[393px] flex-col items-center text-center">
      <Image
        src={item.image}
        alt={item.name}
        width={393}
        height={394}
        className="h-auto w-full object-cover"
      />
      <h4 className="text-card-title font-bold text-primary">{item.name}</h4>
      <p className="mt-[30px] max-w-[250px] text-body font-bold text-black">
        {item.description}
      </p>
    </article>
  );
}
