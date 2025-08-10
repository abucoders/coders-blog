"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import GlobalBadge from "./global-badge";
import { ChangeEvent, useEffect, useState } from "react";
import { getCategoriesTags, getSearchBlogs } from "@/service/search.service";
import { CategorieTag, IBlog } from "@/types/service.type";
import { debounce } from "lodash";
import SearchBlogCard from "@/components/card/searchBlog-card";
import { Separator } from "@/components/ui/separator";

interface IResultData {
  title: string;
  slug: string;
  items: CategorieTag[];
}

const GlobalSearch = () => {
  // Hooks
  const [result, setResult] = useState<IResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  // Function to handle search input changes
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim().toLowerCase();

    if (text.length < 3) {
      setBlogs([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    getSearchBlogs(text)
      .then(data => {
        setBlogs(data);
      })
      .catch(err => {
        console.error("Error fetching search results:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Debounced search handler to prevent excessive API calls
  const debouncedSearch = debounce(handleSearch, 500);

  // Fetch categories and tags data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategoriesTags();
        setResult(res);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Drawer>
      <DrawerTrigger className="hover:bg-primary/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
        <Search className="size-4" />
        <span className="hidden md:flex">Search</span>
      </DrawerTrigger>

      <DrawerContent className="container mx-auto py-12 px-6">
        <DrawerHeader>
          <DrawerTitle>Global Search</DrawerTitle>
        </DrawerHeader>

        <Input
          className="bg-secondary"
          placeholder="Type to search blog..."
          onChange={debouncedSearch}
          disabled={isLoading}
        />

        {/* Search results for blogs */}
        {isLoading && <Loader2 className="animate-spin mx-auto mt-4" />}
        {blogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 space-y-2">
              {blogs &&
                blogs.map(blog => <SearchBlogCard key={blog.slug} {...blog} />)}
            </div>

            <Separator className="mt-3" />
          </>
        )}

        {/* Global search badges */}
        {result.map(c => (
          <GlobalBadge key={c.slug} {...c} title={c.title} slug={c.slug} />
        ))}
      </DrawerContent>
    </Drawer>
  );
};

export default GlobalSearch;
