# deno_jp_holiday

Japanese holiday for Deno.

## Usage

```typescript
import { isHoliday } from "https://deno.land/x/jp_holiday@v1.0.1/mod.ts";
```

```
isHoliday(date: Date): boolean
getHoliday(date: Date): Holiday | undefined

class Holiday {
  name: string // Name of Japanese holiday
  date: Date   // Date of Japanese holiday
}
```
