import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getReadingTime = (content: string) => {
  const WPS = 275 / 60; // Words per second

  let images = 0;
  const regex = /\w/;

  const words = content.split(" ").filter(word => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  const readingTimeSeconds = words / WPS;
  const imageSeconds = images * 10;
  const totalTimeSeconds = Math.ceil(readingTimeSeconds + imageSeconds);
  const minutes = Math.ceil(totalTimeSeconds / 60);

  return {
    minutes,
    text: `${minutes} min read`,
  };
};
