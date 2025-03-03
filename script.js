class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    append(value) {
        const node = new Node()
        
        if (!this.head) {
            this.head = node
        } else if (this.head) {
            const current = this.head;
            while (current.next) {
                current.next = current
            }
            current.next = node
        }

        this.size++; 
        this.tail = node

        return this
    }
}


const list = new LinkedList()
console.log(list.append(5))
console.log(list.append(7))

console.log(list.size())
console.log(list.head())
console.log(list.at(1))
console.log(list.toString())

