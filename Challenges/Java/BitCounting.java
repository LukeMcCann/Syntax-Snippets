// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

public class BitCounting {

	public static int countIntegerBitsStringified(int n) {
		String bin = Integer.toBinaryString(n).replaceAll("0", "");
    		return bin.length();
	}
	
	public static int countIntegerBits(int n) {
	    return Integer.bitCount(n);
	}
	
}
