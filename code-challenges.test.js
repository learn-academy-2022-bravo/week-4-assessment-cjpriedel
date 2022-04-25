// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe ("cutOffIndexZeroAndShuffle", () => {
    it("removes zero index of array, randomizes remaining values index locations", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      expect(cutOffIndexZeroAndShuffle(colors1)).toEqual(expect.arrayContaining(colors1));
      expect(cutOffIndexZeroAndShuffle(colors2)).toEqual(expect.arrayContaining(colors2));

    })
  })

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// declare function with arr for argument
// .shift to remove index value 0
// .sort using 0.5 - Math.random to mimic "pseudo-randomness"
// return the shuffled array with remaining values 

const cutOffIndexZeroAndShuffle = (array) => {
    array.shift()
    const shuffArr = array.sort((a, b) => 0.5 - Math.random())
    return shuffArr
}

console.log(cutOffIndexZeroAndShuffle(colors1))


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

describe('hiLow', () => {
    it('returns the highest and lowest values in an array from low to high', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
        expect(hiLow(nums1)).toEqual([-8, 90]);
        expect(hiLow(nums2)).toEqual([5, 109]);
    });
  })

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [-8, 90]

// Expected output: [5, 109]


// b) Create the function that makes the test pass.

//PSEUDOCODE 
// func hiLow (array)
// reduce() to get min/max values from array
// return variables using .reduce in new array. 

const hiLow = (arr) => {
    
    let hi = arr.reduce(function(a, b) {
        return Math.max(a, b) 
    }),
    low = arr.reduce(function(a, b) {
        return Math.min(a, b) 
    })
    return [low, hi] 
}
console.log(hiLow(nums1))
console.log(hiLow(nums2))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('uniqueSetArray', () => {
    it('combines two arrays, removes duplicate values', () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
      expect(uniqueSetArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
    });
  });

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.

//PSEUDOCODE
//function that takes 2 arrays
// use new Set to concat arrays and check for duplicate values
// Set forces a new array containing unique values only 

const uniqueSetArray = (arr1, arr2) => {
    return arr3 = [...new Set([...arr1, ...arr2])]
}

console.log(uniqueSetArray(testArray1, testArray2))


//////// JEST RESULTS

// PASS  ./code-challenges.test.js
// cutOffIndexZeroAndShuffle
//   ✓ removes zero index of array, randomizes remaining values index locations (1 ms)
// hiLow
//   ✓ returns the highest and lowest values in an array from low to high (1 ms)
// uniqueSetArray
//   ✓ combines two arrays, removes duplicate values

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.18 s
// Ran all test suites.
// ✨  Done in 0.95s.