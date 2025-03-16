class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0;
        this.tail = null
    }

    append(value) {
        const node = new Node(value, null);

        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.nextNode) {
                current = current.nextNode
            }
            current.nextNode = node
        }

        this.tail = node;
        this.length++

        return this
    }

    prepend(value) {
        const node = new Node(value, null);
        if(!this.head) {
            this.tail = node;
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node
        }

        this.length++;
        return this
    }

    size() {
        return this.length
    }

    head() {
        return this.head
    }

    tail() {
        return this.tail
    }

    at(index) {
        if(!this.head) return null
        let current = this.head
        let i = 0
        while(i < index && current) {
            current = current.nextNode
            i++
        }
        return current
    }
}


// const list = new LinkedList()
// console.log(list.append(5))
// console.log(list.append(7))
// console.log(list.prepend(7))

// console.log(list.size())
// console.log(list)

// console.log(list.head())
// console.log(list.at(1))
// console.log(list.toString())

