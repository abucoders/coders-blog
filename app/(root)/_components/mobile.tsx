"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mobile = () => {
  // Hooks
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild className="flex md:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <Link href={"/"} className="pl-4 pt-4">
          <h1 className="text-3xl font-creteRound">ABUcoders</h1>
        </Link>

        <Separator className="my-3" />

        <div className="flex flex-col space-y-3">
          {navLinks.map(nav => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                pathName === nav.route && "text-primary/90 bg-primary/20",
                "flex items-center gap-2 hover:bg-primary/20 py-2 px-3 cursor-pointer rounded-sm transition-colors"
              )}
            >
              <nav.icon className="size-5" /> {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
