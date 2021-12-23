import * as mod from "./mod.ts";

import {
  assert,
  assertEquals
} from "https://deno.land/std@0.119.0/testing/asserts.ts";

const { test } = Deno

test("holiday", () => {
  const umino_hi = new Date(2021, 6, 22) // 2021/7/22

  assert(mod.isHoliday(umino_hi))
  assertEquals('海の日', mod.getHoliday(umino_hi)!.name)

  const kodomo_no_hi = new Date('1993/5/5')

  assert(mod.isHoliday(kodomo_no_hi))
  assertEquals('こどもの日', mod.getHoliday(kodomo_no_hi)!.name)

  const weekday = new Date('2021/12/23')
  assert(!mod.isHoliday(weekday))
})
