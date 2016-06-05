package test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import main.java.ComparingStrings;

public class TestComparingStrings {
	ComparingStrings cs;

	@Before
	public void setup() {
		cs = new ComparingStrings();
	}

	@Test
	public void compareStringsTest() {

		assertTrue(cs.compareStrings("bac", "abc"));
	}

	@Test
	public void unevenLengthsTest() {
		assertFalse(cs.compareStrings("baca", "abc"));
	}
	
	@Test
	public void palindromeTest() {
		assertTrue(cs.isPalindrome("aaabb"));
	}
	
	@Test
	public void notPalindromeTest() {
		assertFalse(cs.isPalindrome("ac"));
	}
}
