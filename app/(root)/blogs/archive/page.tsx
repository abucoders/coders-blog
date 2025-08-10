import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getArchiveBlogs } from "@/service/archive.service";
import { format } from "date-fns";
import { Archive, Dot, FileCode2, Home } from "lucide-react";
import Link from "next/link";

const ArchivePage = async () => {
  // Fetching blogs from the service
  const blogs = await getArchiveBlogs();

  return (
    <div className="max-w-6xl mx-auto max-md:p-2">
      <div className="relative min-h-[40vh] flex items-center justify-end flex-col">
        <p className="text-lg text-muted-foreground">Showing posts from</p>
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>Archive</span>
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
                  <Link href="/blogs" className="flex items-center gap-1">
                    <FileCode2 className="size-4" /> Blogs
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <Dot className="size-5" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>Archive</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {Object.entries(blogs).map(([year, blogs]) => (
        <div key={year}>
          <div className="flex flex-col space-y-3 mt-8">
            <div className="relative">
              <span className="text-5xl font-creteRound relative z-20">
                {year}
              </span>
              <Archive className="absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10" />
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-8">
            {blogs.map(blog => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog.slug}
                className="flex gap-2 text-lg text-muted-foreground"
              >
                <p>{format(blog.createdAt, "dd MMM")}</p>
                <Dot className="text-foreground w-8 h-8" />
                <div className="hover:text-foreground hover:underline cursor-pointer">
                  {blog.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchivePage;
