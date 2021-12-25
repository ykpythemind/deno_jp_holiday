import * as mod from "./mod.ts";

import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.119.0/testing/asserts.ts";

const { test } = Deno;

test("holiday", () => {
  const bunka_no_hi = new Date("2022/11/3");

  assert(mod.isHoliday(bunka_no_hi));
  assertEquals("文化の日", mod.getHoliday(bunka_no_hi)!.name);

  console.log(mod.getHoliday(bunka_no_hi)!.date)

  const kodomo_no_hi = new Date("1993/5/5");

  assert(mod.isHoliday(kodomo_no_hi));
  assertEquals("こどもの日", mod.getHoliday(kodomo_no_hi)!.name);

  const weekday = new Date("2021/12/23");
  assert(!mod.isHoliday(weekday));
});
