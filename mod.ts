import { holidays } from "./holidays.ts";

import { format } from "./deps.ts";

export type Holiday = {
  name: string;
  // todo: meta information for translation??
};

export const getHoliday = (date: Date): Holiday | null => {
  // 内閣府のcsv依存のフォーマット...
  const d = format(date, "yyyy/M/d");

  const h = holidays[d];

  if (h) {
    return { name: h };
  } else {
    return null;
  }
};

export const isHoliday = (date: Date): boolean => {
  return getHoliday(date) ? true : false;
};

// TODO:
// getHolidaysBetween(date: Date, date: Date)
