
export default function IsEqual<T>(listOne: LinkedList<T>, listTwo: LinkedList<T>) {
  return  Object.is(listOne.toString(), listTwo.toString());
}