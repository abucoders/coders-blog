import CategoriesTagsCard from "@/components/card/categoriesTags-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTags } from "@/service/tag.service";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const tags = await getTags();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>Tags</span>
        </h2>

        <div className="mt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="size-4" /> Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Dot className="size-5" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Tags</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 max-md:p-2 gap-3">
        {tags.map(categorie => (
          <CategoriesTagsCard
            key={categorie.slug}
            {...categorie}
            type={"tags"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
