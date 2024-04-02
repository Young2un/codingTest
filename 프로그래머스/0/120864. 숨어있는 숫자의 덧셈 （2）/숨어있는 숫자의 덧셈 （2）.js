const solution = (my_string) =>
  [...my_string]
    .map((v) => +v)
    .join("")
    .split("NaN")
    .reduce((a, c) => a + +c, 0);