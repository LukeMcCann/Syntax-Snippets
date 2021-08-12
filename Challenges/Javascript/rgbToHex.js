function rgb(r, g, b) {

    const rgb = keepRange([r,g,b]);

    return colorToHexcode(rgb);
}

function keepRange(nums, range = [0, 255]) {
    for (num in nums) {
        if (nums[num] < range[0]) {
            nums[num] = range[0];
        }

        if (nums[num] > range[1]) {
            nums[num] = range[1];
        }
    }

    return nums;
}

function colorToHexcode(arr = [0,0,0]) {
    const rgb = arr;
    const result = ['#'];

    for (color in rgb) {
        let quotient = Math.floor(rgb[color] / 16);
        let exponent = rgb[color] % 16;
        result.push(
            quotient.toString(16).toUpperCase(), 
            exponent.toString(16).toUpperCase()
        );
    }
    return result.join("");
}
