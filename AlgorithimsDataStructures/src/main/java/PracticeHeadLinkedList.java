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
		current = new Node(data, current);
		listCount++;
	}

	public void remove(String data) {
		Node current = head;
		for (int i = 0; i < listCount; i++) {
			Node next = current.next;
			if (data == current.data) {
				
			}
		}
		// Get the node from the top of the list
		
		// Set the current node to be n node ex) if second node, loop once.
		// current node is now second node
//		for (int i = 0; i < index; i++) {
//			current = current.next;
//		}
		// Overwrite the current node that was updated from the for loop
//		current = current.next;
		// Reduce the total count
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
