import BlogCard from "@/components/card/blog-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getCategorieBlogs } from "@/service/categories.service";
import { Dot, Home, Layers } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params: { slug } }: Props) {
  const categorie = await getCategorieBlogs(slug);

  return {
    title: categorie.title,
  };
}

interface Props {
  params: {
    slug: string;
  };
}

const CategoriesPage = async ({ params: { slug } }: Props) => {
  const categorie = await getCategorieBlogs(slug);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>{categorie.title}</span>
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
                <BreadcrumbLink asChild>
                  <Link href="/tags" className="flex items-center gap-1">
                    <Layers className="size-4" /> Categories
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Dot className="size-5" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Categorie-blogs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24 max-md:p-2">
        {categorie.blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} isVertical />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
