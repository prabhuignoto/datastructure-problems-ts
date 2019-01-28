export default function MaxSumSubArrayNaive(array: number[], target: number) {
  if (!array) {
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let currentSum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (currentSum > target) {
        break;
      }
      if (currentSum === target) {
        console.log("Hooray found at ${i} and ${j-1}");
      }
      currentSum += array[j];
    }
  }
}