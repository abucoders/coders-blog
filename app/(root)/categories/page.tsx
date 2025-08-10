import CategoriesTagsCard from "@/components/card/categoriesTags-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { baseUrl } from "@/constants";
import { getCategories } from "@/service/categories.service";
import { Dot, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Categories | ABUcoders Blog",
  description:
    "Explore various categories of programming and technology blogs.",
  openGraph: {
    title: "Categories | ABUcoders Blog",
    description:
      "Explore various categories of programming and technology blogs.",
    url: `${baseUrl}/categories`,
  },
};

const Page = async () => {
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>Categories</span>
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
                <BreadcrumbPage>Categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 max-md:p-2 gap-3">
        {categories.map(categorie => (
          <CategoriesTagsCard
            key={categorie.slug}
            {...categorie}
            type={"categories"}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
