"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  // Hooks
  const [active, setActive] = useState(false);

  return (
    <footer className="flex flex-col mx-auto py-24 px-3 max-w-2xl space-y-12">
      <h1 className="text-5xl max-md:text-[34px] font-creteRound text-center">
        Get last posts delivered right to your inbox
      </h1>

      <div className="grid max-md:grid-cols-1 grid-cols-3 md:gap-2 w-full">
        <Input
          className="w-full col-span-2"
          placeholder="Your email address"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />

        <Button
          size={"lg"}
          variant={active ? "default" : "outline"}
          className="cursor-pointer max-md:my-2"
        >
          <User />
          <span>Join today</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
