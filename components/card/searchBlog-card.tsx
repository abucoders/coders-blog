import { IBlog } from "@/types/service.type";
import Link from "next/link";
import React from "react";
import { DrawerClose } from "../ui/drawer";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

const SearchBlogCard = (blog: IBlog) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <DrawerClose className="flex flex-col space-y-1 text-start">
        {/* <Image
          width={200}
          height={200}
          src={blog.image.url}
          alt={blog.title}
          className="rounded-md shadow-xl dark:shadow-white/10"
        /> */}

        <div className="flex items-center gap-2">
          <CalendarDays className="size-4" />
          <p className="text-sm">{format(blog.createdAt, "MMM dd, yyyy")}</p>
        </div>

        <h3 className="font-creteRound text-[20px] line-clamp-2">
          {blog.title}
        </h3>
      </DrawerClose>
    </Link>
  );
};

export default SearchBlogCard;
