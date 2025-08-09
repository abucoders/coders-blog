import BlogCard from "@/components/card/blog-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTagBlogs } from "@/service/tag.service";
import { Dot, Home, Tag } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

const TagsPage = async ({ params: { slug } }: Props) => {
  const tag = await getTagBlogs(slug);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>{tag.title}</span>
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
                    <Tag className="size-4" /> Tags
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Dot className="size-5" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Tag-blogs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24 max-md:p-2">
        {tag.blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} isVertical />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
