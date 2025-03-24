import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//shadcn/ui function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-US"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};


export const generatePagination = (currentPage: number, totalPage: number) => {
  const pages: (number | string)[] = [];
  const maxPagesToShow = 4;

  if (totalPage <= maxPagesToShow) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage > 2) pages.push(1);
    if (currentPage > 3) pages.push("...");

    const start = Math.max(3, currentPage - 1);
    const end = Math.min(totalPage - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPage - 2) pages.push("...");
    if (currentPage < totalPage - 1) pages.push(totalPage);
  }
  return pages;
};

