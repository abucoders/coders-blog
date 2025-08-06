import { Badge } from "@/components/ui/badge";

interface Props {
  items: { name: string; slug: string }[];
  title?: string;
}

const GlobalBadge = ({ items, title }: Props) => {
  return (
    <div className="flex flex-col space-y-2 mt-4">
      {title && <p className="font-creteRound text-2xl">{title}</p>}

      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <Badge
            key={item.slug}
            className="rounded-sm px-2 py-1 cursor-pointer"
            variant={"secondary"}
          >
            {item.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default GlobalBadge;
