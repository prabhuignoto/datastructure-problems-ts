// this approach takes additional space to collect the leaders
// follows an iterative approach where by it compares every element with other elements
// the rightmost element in the array is always the leader
export function FindLeadersSimple(array: number[]): number[] {
  if (!array) {
    return [];
  }

  let leaders: number[] = [array[array.length - 1]];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        break;
      }
      if (j === array.length - 1) {
        leaders.unshift(array[i]);
      }
    }
  }

  return leaders;
}

export function FindLeadersEfficient(array: number[]): number[] {
  if (!array) {
    return [];
  }

  // the right most element is always a leader
  let maximumElement = array[array.length - 1];
  let leaders = [maximumElement];

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > maximumElement) {
      leaders.unshift(array[i]);
      maximumElement = array[i];
    }
  }
  return leaders;
}