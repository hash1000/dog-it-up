import MenuItemCard from "@/components/shared/MenuItemCard";
import SectionTitleRow from "@/components/shared/SectionTitleRow";
import { drinks, sides, signatureDogs, type MenuItem } from "@/lib/menu-data";

function SubSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="flex flex-col gap-14 sm:gap-[103px]">
      <SectionTitleRow title={title} />
      <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-16">
        {items.map((item) => (
          <MenuItemCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function MenuSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="menu" className="w-full bg-surface py-16 sm:py-[100px]">
      <div className="mx-auto flex max-w-content flex-col gap-16 px-6 sm:gap-[103px] md:px-10 lg:px-0">
        {showHeading && (
          <h2 className="text-center text-h1 font-black text-primary">MENU</h2>
        )}
        <SubSection title="Signature Dogs" items={signatureDogs} />
        <SubSection title="Sides" items={sides} />
        <SubSection title="Drinks" items={drinks} />
      </div>
    </section>
  );
}
