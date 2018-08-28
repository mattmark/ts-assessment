import * as test from "tape";

import { pipe } from "../src";

const increment = (value: number) => value + 1;
const decrement = (value: number) => value - 1;
const double = (value: number) => value * 2;

test("Pipe", (t: test.Test) => {
  // Arrange
  const expected = 11;

  const curried = pipe<number>(
    increment,
    increment,
    double,
    decrement,
  );

  // Act
  const result = curried(4);

  // Asssert
  t.equals(result, expected, "should transform to expected value")
  t.end();
});
