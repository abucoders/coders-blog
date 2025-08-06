"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  // Hooks
  const { setTheme, resolvedTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount && resolvedTheme === "dark" ? (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("light")}>
      <Sun className="size-4" />
    </Button>
  ) : (
    <Button variant={"ghost"} size={"icon"} onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  );
};

export default ModeToggle;
