import AuthorCard from "@/components/card/author-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAuthors } from "@/service/author.service";
import { Dot, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = async () => {
  // Fetch authors from the service
  const authors = await getAuthors();

  return (
    <div className="max-w-6xl mx-auto max-md:p-2">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>About Us</span>
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
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <h1 className="text-center text-4xl font-creteRound">
        We are the ABUcoders, <br /> Team of developers and designers
      </h1>

      <div className="grid grid-cols-4 gap-4 min-h-96 mt-6">
        <div className="col-span-2 max-md:col-span-4 relative h-80">
          <Image
            src={"/about/01.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-80 self-end relative max-md:col-span-2 max-md:h-72">
          <Image
            src={"/about/00.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="h-80 relative max-md:col-span-2 max-md:mb-8 max-md:h-72">
          <Image
            src={"/about/02.jpg"}
            alt="about"
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 flex flex-col text-center space-y-4 text-muted-foreground">
        <p className="">
          We are a team of passionate developers and designers who love to
          create beautiful and functional web applications. Our mission is to
          build innovative solutions that make a difference in the world. We
          belive that technology can be a force for good, and we strive to use
          our skills to create positive impact. Whether it`s through open-source
        </p>

        <p className="">
          I`ve included a pulgin in the stup of thos theme that will make adding
          columns to your pages and posts a piece of cake. Let creativity take
          control, and forget abput the technical of thing , I`ve got your six.
        </p>
      </div>

      <h2 className="text-center text-4xl section-title font-creteRound my-12">
        <span>Our writers</span>
      </h2>

      <div className="flex justify-around max-md:flex-col max-md:space-y-4 max-md:items-center">
        {authors.map(author => (
          <AuthorCard key={author.id} {...author} blogs={[author.blogs]} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
