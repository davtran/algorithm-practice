class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (this.head === null) {
            return undefined;
        }
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }

    shift () {
        if (this.length === 0) {
            return undefined;
        }
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift (value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while(count !== index) {
                current = current.previous;
                count--;
            }
            return current;
        }   
    }

    set (index, value) {
        const foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert (index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return !!this.unshift(value);
        }

        if (index === this.length) {
            return !!this.push(value);
        }

        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.previous = beforeNode;
        newNode.next = afterNode;
        afterNode.previous = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length -1) {
            return this.pop();
        }

        const removedNode = this.get(index);
        const beforeNode = removedNode.previous;
        const afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.previous = beforeNode;
        // or
        // removedNode.previous.next = removedNode.next;
        // removedNode.next.prev = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let previous = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
}
