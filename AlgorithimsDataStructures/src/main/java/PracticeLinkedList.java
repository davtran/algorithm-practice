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
	
	public void delete(String data) {
		
	}

	private class Node {
		public Node next;
		public String data;

		public Node(String data) {
			next = null;
			this.data = data;
		}
	}
}
