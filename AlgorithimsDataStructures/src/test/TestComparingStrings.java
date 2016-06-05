package test;

import static org.junit.Assert.*;

import org.junit.Test;

import main.java.ComparingStrings;

public class TestComparingStrings {

	@Test
	public void compareStringsTest() {
		ComparingStrings cs = new ComparingStrings();
		assertTrue(cs.compareStrings("bac", "abc"));
	}
	
	@Test
	public void unevenLengthsTest() {
		ComparingStrings cs = new ComparingStrings();
		assertFalse(cs.compareStrings("baca", "abc"));
	}
}
