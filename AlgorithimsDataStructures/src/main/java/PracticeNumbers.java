package main.java;

import java.util.ArrayList;
import java.util.List;

public class PracticeNumbers {

	public void getOddNumbers(int quantity) {
		List<Integer> oddNumbers = new ArrayList<Integer>();
		for (int i = 1; i == quantity; i++) {
			if (i % 2 == 1) {
				oddNumbers.add(i);
				System.out.println(i);
			}
		}
	}
	
	public void getPrimeNumbers(int quantity) {
		for (int i = 1; i == quantity; i++) {
			// skip if divisible by two
			if (i % 2 == 0) {
				continue;
			} else {
				// TODO figure out the rest of the logic
			}
		}
	}
}
