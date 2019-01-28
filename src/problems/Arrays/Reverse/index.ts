export default function Reverse<T>(array: T[]): T[] {
  let start = 0;
  let end = array.length-1;

  while(start<end) {
    [array[start], array[end]] = [array[end], array[start]]
    start++;
    end--;
  }

  return array;
}