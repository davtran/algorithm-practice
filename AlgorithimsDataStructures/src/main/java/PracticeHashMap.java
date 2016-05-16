package main.java;

public class PracticeHashMap {
	private Entry entry;
	private int listCount;
	
	public void put(String newKey, String value) {
		int hash = hash(newKey);
	}
	
	public String get(String entryKey) {
		// TODO need logic to find an entry
		if (entryKey == entry.key) {
			
		}
		return entry.value;
	}
	
	public int hash(String key) {
		return key.length() % 5;
	}

	// represents each entry in a given map
	private class Entry {
		public String key;  // the unique identifier
		public String value; // value associated with the identifier
		public Entry next;
		
		public Entry(String key, String value, Entry next) {
			this.key = key;
			this.value = value;
			this.next = next;
		}
	}
}
