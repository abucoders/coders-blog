import { CalendarDays, Clock, Dot, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { IBlog } from "@/types/service.type";
import { format } from "date-fns";

interface Props {
  blog: IBlog;
  isVertical?: boolean;
}

const BlogCard = ({ blog, isVertical }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "grid gap-4 group",
        isVertical ? "md:grid-cols-1" : "md:grid-cols-2"
      )}
    >
      <div className="relative bg-secondary rounded-md p-2">
        <Image
          width={650}
          height={335}
          src={blog.image.url}
          alt={blog.title}
          className="px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
        />
      </div>

      <div className="flex flex-col space-y-4">
        {/* Time info */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-5" />
            <span>{format(blog.createdAt, "dd MMM Y")}</span>
          </div>
          <Minus className="size-5" />
          <div className="flex items-center gap-2">
            <Clock className="size-5" />
            <span>02 min read</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl max-md:text-2xl font-creteRound group-hover:text-primary transition-colors">
          {blog.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3">{blog.description}</p>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.image.url}
              alt={blog.author.name}
              width={30}
              height={30}
              className="object-cover rounded-sm"
            />
            <span>by {blog.author.name}</span>
            <Dot className="size-5" />
            <div className="flex items-center gap-2">
              {blog.tag.map(item => (
                <Badge
                  key={item.title}
                  variant={"secondary"}
                  className="rounded-sm px-2 py-1 cursor-pointer"
                >
                  {item.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
