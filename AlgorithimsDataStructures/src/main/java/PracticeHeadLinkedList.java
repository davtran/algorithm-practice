package main.java;

/**
 * 1) List is empty 2) List has an item
 * 
 */
public class PracticeHeadLinkedList {
	private Node head;
	private int listCount;

	public PracticeHeadLinkedList() {
		this.head = null;
		listCount = 0;
	}

	/**
	 * if there is already a head, you need to point the new head's "next" to
	 * the existing head we want key2 -> key3, after invoking insert('key1'), to
	 * become key1 -> key2 -> key3
	 */
	public void add(String data) {
		Node current = head;
		if (current == null) {
			current = new Node(data, current);  // the null node is now filled with a value
		} else {
			Node temp = new Node(data, null);  // a new temporary node with data and an empty next
			temp.next = current;  // assuming current value is not empty, that temporary next contains current's data
			current = temp;  // the head now contains the temp node
		}
		listCount++;
	}

	public void remove(String data) { // key2
		// need to iterate through the list of available nodes
		Node current = head; // null
		Node next = current.next; // key2
		for (int i = 0; i < listCount; i++) {
			// assuming head is null, if the next data matches the target string
			// break out of the loop and remove that node
			if (next.data == data) { // key2
				// the target next data is replaced by the data next to it
				next = current.next.next;
			}
			// need to get the next one to continue the loop
			next = next.next;
		}
		listCount--;
	}

	private class Node {
		// the guy next in line
		public Node next;
		// just some random data, who cares
		public String data;

		// properties of a node
		public Node(String data, Node next) {
			this.next = next;
			this.data = data;
		}
	}
}
