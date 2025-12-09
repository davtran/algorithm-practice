class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        // if head is empty
        if (!this.head)  {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // add to end
            this.tail = newNode; // add tail marker
        }
        // need to increase the length
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        
        let penultimateNode = current;
        let current = this.head;
        while (current.next) {
            penultimateNode = current;
            current = current.next;
        }
        this.tail = penultimateNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;

        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }
        if (index === 0) {
            this.unshift(value);
            return true;
        }

        const newNode = new newNode(value);
        let previous = this.get(index -1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
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

        let previousNode = this.get(index -1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
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