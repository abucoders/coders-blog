import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dot, Home, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound">
          <span>Contact</span>
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6 max-md:p-2">
        <div className="flex flex-col">
          <h1 className="text-4xl font-creteRound">Contact ABUcoders</h1>
          <p className="mt-2 text-muted-foreground">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="size-4" />
            <p className="text-sm">info@abucoder.ac</p>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Phone className="size-4" />
            <p className="text-sm">+998 93 444-34-88</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-creteRound mb-2">Contact form</h1>
          <div className="flex flex-col space-y-3">
            <Textarea
              className="resize-none h-32"
              placeholder="Ask question or just say Hi"
            />
            <Input placeholder="Email address" />
            <Input placeholder="Your name here" />
            <Button className="w-fit" size={"lg"}>
              <span>Send</span>
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
