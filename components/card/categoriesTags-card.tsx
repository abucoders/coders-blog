import { CategorieTag } from "@/types/service.type";
import { Layers, Tag } from "lucide-react";
import Link from "next/link";

interface Props extends CategorieTag {
  type: "categories" | "tags";
}

const CategoriesTagsCard = ({ slug, title, type }: Props) => {
  return (
    <Link
      href={`/${type}/${slug}`}
      className=" bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center justify-center gap-4"
    >
      {type === "categories" ? <Layers /> : <Tag />}
      <h1 className="text-2xl font-creteRound">{title}</h1>
    </Link>
  );
};

export default CategoriesTagsCard;
