import BlogCard from "@/components/card/blog-card";
import { Badge } from "@/components/ui/badge";
import { getAuthor } from "@/service/author.service";
import { TicketCheck } from "lucide-react";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const AuthorPage = async ({ params: { id } }: Props) => {
  const author = await getAuthor(id);

  return (
    <div className="max-w-6xl mx-auto pt-36">
      <div className="flex mt-6 gap-6 items-center max-md:flex-col p-2">
        <Image
          src={author.image.url}
          alt="author"
          width="200"
          height="200"
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <p className="text-muted-foreground text-xl">
            <Badge className="rounded-sm px-2 py-1" variant={"secondary"}>
              <TicketCheck className="size-6" /> {author.blogs.length} Published
              posts
            </Badge>
          </p>
          <h2 className="text-3xl font-creteRound">{author.name}</h2>
          <p className="text-muted-foreground max-w-xl">{author.bio}</p>
        </div>
      </div>

      <h2 className="text-center text-4xl section-title font-creteRound my-12">
        <span>Published posts</span>
      </h2>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24 max-md:p-2">
        {author.blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} isVertical />
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
