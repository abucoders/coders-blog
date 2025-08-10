import { Badge } from "@/components/ui/badge";
import { DrawerClose } from "@/components/ui/drawer";
import { Minus } from "lucide-react";
import Link from "next/link";

interface Props {
  items: { title: string; slug: string }[];
  title?: string;
  slug: string;
}

const GlobalBadge = ({ items, title, slug }: Props) => {
  return (
    <div className="flex flex-col space-y-2 mt-4">
      {title && (
        <div className="flex items-center gap-1 font-creteRound text-2xl">
          <p>{title}</p> <Minus />{" "}
          <Link href={`/${slug}`} className="flex">
            <DrawerClose className="text-muted-foreground text-sm cursor-pointer hover:underline hover:text-primary/50">
              See all
            </DrawerClose>
          </Link>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <Link key={item.slug} href={`/${slug}/${item.slug}`}>
            <DrawerClose>
              <Badge
                className="rounded-sm px-2 py-1 cursor-pointer bg-primary/20"
                variant={"secondary"}
              >
                {item.title}
              </Badge>
            </DrawerClose>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GlobalBadge;
