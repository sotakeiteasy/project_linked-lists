import { LinkedList } from "./script";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("bird");
console.log(list.toString());
console.log("Size:", list.size());
console.log("Tail:", list.getTail());
console.log("Element at index 0:", list.at(0));
console.log("Popped element:", list.pop());
console.log("Head:", list.getHead());
list.prepend("dino");
console.log(list.toString());
console.log("Contains empty string:", list.contains(""));
list.insertAt("Dragon", 0);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());