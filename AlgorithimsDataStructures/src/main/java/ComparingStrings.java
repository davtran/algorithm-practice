package main.java;

import java.util.HashMap;
import java.util.Map;

public class ComparingStrings {

	public Boolean compareStrings(String string1, String string2) {
		if (string1.toCharArray().length != string2.toCharArray().length) {
			return false;
		}

		Map<Character, Integer> test = new HashMap<Character, Integer>();
		for (char c : string1.toCharArray()) {
			if (test.get(c) == null) {
				test.put(c, 1);
			} else {
				test.put(c, test.get(c) + 1);
			}
		}

		for (char c : string2.toCharArray()) {
			if (test.get(c) != 0 || test.get(c) != null) {
				test.put(c, test.get(c) - 1);
			}
			if (test.get(c) == 0) {
				test.remove(c);
			}
		}

		if (test.isEmpty()) {
			return true;
		} else {
			return false;
		}
	}
	
	public Boolean isPalindrome(String string) {
		Map<Character,Integer> map = new HashMap<Character, Integer>();
		int oddCount = 0;
		
		for (char c : string.toCharArray()) {
			if (map.get(c) == null) {
				map.put(c, 1);
			} else {
				map.put(c, map.get(c) + 1);
			}
		}
		
		for (char c : map.keySet()) {
			if (map.get(c) % 2 == 1) {
				oddCount++;
			}
		}
		
		if (oddCount > 1) {
			return false;
		} else {
			return true;
		}
	}
}
