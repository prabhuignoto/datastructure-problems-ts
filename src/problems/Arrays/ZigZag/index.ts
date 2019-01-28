export default function ZigZag<T>(array: T[]) {
  let flag: boolean = true;
  for (let i = 0; i < array.length; i++) {
    if (flag) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    } else {
      if (array[i] < array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    flag = !flag;
  }

  return array;
}
