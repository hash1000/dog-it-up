import type { MenuItem } from "@/lib/menu-data";
import MenuCard from "@/components/menu/MenuCard";
import SectionTitleRow from "@/components/shared/SectionTitleRow";

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section className="flex w-full flex-col gap-10 sm:gap-14">
      {/* SectionTitleRow animates itself: lines grow, stars pop, title write-on */}
      <SectionTitleRow title={title} />

      {/* flex-wrap keeps odd last rows centered at every breakpoint */}
      <ul className="flex list-none flex-wrap justify-center gap-5 lg:gap-8">
        {items.map((item, index) => (
          <li
            key={item.slug}
            className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-4rem)/3)]"
          >
            <MenuCard
              name={item.name}
              tagline={item.tagline}
              description={item.description}
              image={item.image}
              price={item.price}
              badge={item.badge}
              index={index}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
