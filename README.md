# deno_jp_holiday

Japanese holiday for Deno.

## Usage

```typescript
import { isHoliday } from 'https://deno.land/x/jp_holiday@v1.0.0/mod.ts'
```

```
isHoliday(date: Date): boolean
getHoliday(date: Date): Holiday | null

type Holiday = {
  name: string // name of Japanese holiday
}
```

