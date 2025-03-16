class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

export class LinkedList {
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

    getHead() {
        return this.head
    }

    getTail() {
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

    pop() {
        if(!this.head) return null
        
        if(this.length===1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this
        }

        let prev = null
        let current = this.head
        while(current.nextNode) {
            prev = current
            current = current.nextNode
        }
        prev.nextNode=null
        this.tail = prev
        this.length--

        return this
    }

    contains(value) {
        if(!this.head) return null
        let current = this.head
        for(let i=0; i < this.length; i++) {
            if(current.value === value) return true
            current = current.nextNode
        }
        return false
    }

    find(value) {
        if(!this.head) return null
        let current = this.head
        for(let i=0; i < this.length; i++) {
            if(current.value === value) return i
            current = current.nextNode
        }
        return null
    }

    toString() {
        let result = ""
        let current = this.head
        for(let i=0; i < this.length; i++) {
            result += `( ${current.value} ) -> `
            current = current.nextNode
        }
        result += 'null'
        return result
        // ( value ) -> ( value ) -> ( value ) -> null
    }

    insertAt(value, index) {
        if(index === 0) {
            this.prepend(value);
            return this
        }

        if(index === this.length) {
            this.append(value);
            return this
        }
        
        const current = this.at(index-1)
        const newNode = new Node(value);
        newNode.nextNode = current.nextNode
        current.nextNode = newNode

        this.length++
        return this
    }

    removeAt(index){
        if(!this.head || index < 0 || index >= this.length) return this;
        if(index === 0) {
            this.head = this.head.nextNode
            if(!this.head) this.tail = null
        } else {
            let nodeBeforeDelete = this.at(index-1);
            let nodeToDelete = nodeBeforeDelete.nextNode;
            nodeBeforeDelete.nextNode = nodeToDelete.nextNode;
            if(index === this.length-1) this.tail = nodeBeforeDelete
        }
        this.length--
        return this
    }
}