package main.java;

/**
 * 1) List is empty
 * 2) List has an item
 *
 */
public class PracticeLinkedList {
	private Node head;
	private int listCount;

	public PracticeLinkedList() {
		head = new Node(null);
		listCount = 0;
	}

	public void add(String data) {
		Node temp = new Node(data);
		Node current = head;
		while (current != null) {
			current = current.next;
		}
		current = temp;
		listCount++;
	}
	
	public void remove(int index) {
		// Get the node from the top of the list
		Node current = head;
		// Set the current node to be n node ex) if second node, loop once.  current node is now second node
		for (int i = 0; i < index; i++) {
			current = current.next;
		}
		// Overwrite the current node that was updated from the for loop
		current = current.next;
		// Reduce the total count
		listCount--;
	}

	private class Node {
		// the guy next in line
		public Node next;
		// just some random data, who cares
		public String data;

		// properties of a node
		public Node(String data) {
			next = null;
			this.data = data;
		}
	}
}
