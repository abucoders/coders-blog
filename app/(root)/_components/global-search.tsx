import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { globalSearchBadges } from "@/constants";
import { Search } from "lucide-react";
import GlobalBadge from "./global-badge";

const GlobalSearch = () => {
  return (
    <Drawer>
      <DrawerTrigger className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
        <Search className="size-4" />
        <span className="hidden md:flex">Search</span>
      </DrawerTrigger>

      <DrawerContent className="container mx-auto py-12 px-6">
        <DrawerHeader>
          <DrawerTitle>Global Search</DrawerTitle>
        </DrawerHeader>

        <Input className="bg-secondary" placeholder="Type to search blog..." />

        {/* Global search badges */}
        {globalSearchBadges.map(c => (
          <GlobalBadge key={c.title} items={c.items} title={c.title} />
        ))}
      </DrawerContent>
    </Drawer>
  );
};

export default GlobalSearch;
