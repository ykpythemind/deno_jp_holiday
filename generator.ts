import { parse as parseCsv } from "./deps.ts";

type HolidayCsv = { date: string; name: string };

const JP_HOLIDAY_CSV_URL =
  "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv";

const decoder = new TextDecoder("shift-jis");

const resp = await fetch(JP_HOLIDAY_CSV_URL);

const decoded = decoder.decode(await resp.arrayBuffer());

const a = await parseCsv(decoded, {
  skipFirstRow: true,
  columns: ["date", "name"],
}) as HolidayCsv[];

let script = "// Code generated. DO NOT EDIT.\n";
script += "export const holidays: Array<{date: string, name: string}> = [";

a.forEach((holiday) => {
  script += `{date: "${holiday.date}", name:"${holiday.name}"},`;
});

script += "]";

Deno.writeTextFileSync("holidays.ts", script);
console.log("holiday file generated.");

const p = Deno.run({ cmd: ["deno", "fmt", "holidays.ts"] });

const st = await p.status();
if (st.success) {
  console.log("deno fmt.");
} else {
  console.log("deno fmt failed");
  Deno.exit(1);
}
