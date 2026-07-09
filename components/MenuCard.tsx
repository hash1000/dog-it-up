import Image from "next/image";
import Button from "./Button";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative h-[220px] w-full overflow-hidden rounded-input sm:h-[284px]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <h3 className="text-card-title font-bold text-primary">{item.name}</h3>

      <ul className="list-disc space-y-1 pl-5 text-body font-bold text-black">
        {item.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <Button href="#order" variant="filled" className="w-[185px] !h-[57px]">
          Order Now
        </Button>
        <Button href={`#${item.slug}`} variant="outlined" className="w-[185px] !h-[57px]">
          Find out more
        </Button>
      </div>
    </article>
  );
}
