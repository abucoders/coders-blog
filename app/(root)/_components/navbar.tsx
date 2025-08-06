import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import { Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-3xl font-creteRound">ABUcoders</h1>
        </Link>

        {/* Nav links */}
        <div className="gap-2 hidden md:flex">
          {navLinks.map(nav => (
            <Link
              key={nav.name}
              href={nav.route}
              className="gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-1">
          <div className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
            <Search className="size-4" />
            <span className="hidden md:flex">Search</span>
          </div>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
