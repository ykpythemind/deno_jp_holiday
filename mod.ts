import { holidays } from "./holidays.ts";

import { format } from "./deps.ts";

class Holiday {
  name: string;
  date: Date;

  constructor(name: string, date: Date) {
    this.name = name;
    this.date = date;
  }

  // todo: meta information for translation??
}

const buildHolidayMap = () => {
  const m = new Map<string, Holiday>();

  for (const t of holidays) {
    // holidaysは時系列にソートされている
    const holiday = new Holiday(t.name, new Date(t.date));
    m.set(t.date, holiday);
  }

  return m;
};

const holidayMap = buildHolidayMap();

export const getHoliday = (date: Date): Holiday | undefined => {
  // 内閣府のcsv依存のフォーマット...
  const d = format(date, "yyyy/M/d");
  return holidayMap.get(d);
};

export const isHoliday = (date: Date): boolean => {
  return typeof getHoliday(date) !== "undefined";
};

// TODO:
// getHolidaysBetween(date: Date, date: Date)
