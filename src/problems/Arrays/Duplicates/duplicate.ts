export default function RemoveDuplicates<T>(array: T[]) {
  // create a auxillary array
  const auxArray: T[] = [];

  // iterate through the actual array and
  // only insert the item to auxarray if its already not present
  for (let item of array) {
    if (auxArray.indexOf(item) < 0) {
      auxArray.push(item);
    }
  }

  return auxArray;
}
