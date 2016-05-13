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
		this.head = null;
		listCount = 0;
	}

	/**
	 * if there is already a head, you need to point the new head's "next" to the existing head
	 * we want key2 -> key3, after invoking insert('key1'), to become key1 -> key2 -> key3
	 */
	public void add(String data) {
		Node temp = new Node(data);
//		if (current != null) {			
//			current.next = new Node(data, current);
//		} else {
//			current = new Node(data, this.head);
//		}
		// useful for checking the tail O(n)
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
			this.data = data;
		}
	}
}
