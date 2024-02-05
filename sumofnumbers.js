const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumFor = list => {
  let sum = 0;
  for (const item of list) {
    sum += item;
  }
  return sum;
};
console.log(sumFor(testList));

const sumWhile = list => {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
};
console.log(sumWhile(testList));

const sumRecursion = list => {
  // want to sum every element in the list and return the sum using recursion
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
};
console.log(sumRecursion(testList));

const sumTheSimpleWay = (list) => _.reduce(list, (memo, num) => memo + num, 0);
console.log(sumTheSimpleWay(testList));
