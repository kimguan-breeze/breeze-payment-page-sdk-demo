import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const clientLocalStorage = (): Storage | null => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    return localStorage;
  } catch (error) {
    throw error;
  }
};
