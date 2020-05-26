import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  dinVisheshToday,
  dinVishesh,
  dinVisheshAll,
  dinVisheshByCategory,
  dinVisheshData,
} from "../src/main.ts";

Deno.test("dinVisheshToday", async () => {
  assert(dinVisheshToday());
  assertEquals(typeof dinVisheshToday(), "object");
});

Deno.test("dinvishesh", async () => {
  const categoryMonthDayTheories = [
    ["janm", "february", "29"],
    ["mrutyu", "april", "20"],
    ["ghatana", "september", "15"],
  ];

  categoryMonthDayTheories.map(([category, month, day]) => {
    assert(dinVishesh(category, month, day));
    assertEquals(
      dinVishesh(category, month, day),
      dinVisheshData.category[category][month][day],
    );
  });
});

Deno.test("dinVisheshAll", async () => {
  assert(dinVisheshAll());
  assertEquals(dinVisheshAll(), dinVisheshData);
});

Deno.test("dinVisheshByCategory", async () => {
  const definedCategory = [
    "janm",
    "mrutyu",
    "ghatana",
  ];

  definedCategory.map((category) => {
    assert(dinVisheshByCategory(category));
    assertEquals(
      dinVisheshByCategory(category),
      dinVisheshData.category[category],
    );
  });
});
