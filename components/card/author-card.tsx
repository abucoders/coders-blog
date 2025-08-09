import { IAuthor } from "@/types/service.type";
import Image from "next/image";
import Link from "next/link";

interface Props extends IAuthor {
  blogs: {
    slug: string;
  }[];
}

const AuthorCard = ({ image: { url }, name, blogs, id }: Props) => {
  return (
    <Link
      href={`/author/${id}`}
      className="flex flex-col space-y-2 w-52 text-center"
    >
      <div className="w-full h-52 relative">
        <Image
          src={url}
          alt={name}
          fill
          className="object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>

      <h2 className="text-2xl font-creteRound">{name}</h2>
      <p className="text-muted-foreground">
        <span className="font-bold text-foreground">
          {blogs.length <= 9 ? "0" + blogs.length : blogs.length}
        </span>{" "}
        Published posts
      </p>
    </Link>
  );
};

export default AuthorCard;
