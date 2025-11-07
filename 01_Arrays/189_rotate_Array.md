# [Leetcode 189: Rotate Array](https://leetcode.com/problems/rotate-array/)

## Approaches

1. [Splice and Unshift Approach]
2. [Reverse Approach (Most Optimal)](#reverse-approach)


## Splice and Unshift Approach

### Intuition
We will first splice the reverse elements and then append them at the starting of the array

### Steps
1. Splice k elements
2. append those splice k elemnts at the start of array

### Code

```javascript
function rotate(nums, k) {
    k = k % nums.length;
    let sliced = nums.splice(nums.length - k);
    nums.unshift(...sliced);
    return nums;
}
```

### Complexity Analysis
- **Time Complexity**: O(k) (for slicing) + O(n) (for unshifting) --> Total : O(n)
- **Space Complexity**: O(k), for storing the spliced elements.

## Reverse Approach (Most Optimal)

### Intuition
The most efficient way to solve this problem is by realizing that the rotation rearrangement can be achieved by reversing parts of the array.

### Steps
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the last n-k elements.

### Code

```javascript
function rotate(nums, k) {
    let n = nums.length;
    k = k % n; // To handle k > n
    
    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    
    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first k elements to restore order
    reverse(0, k - 1);
    // Reverse the last n-k elements to restore order
    reverse(k, n - 1);
}
```

### Complexity Analysis
- **Time Complexity**: O(n), since each reverse operation is O(n).
- **Space Complexity**: O(1), as we're modifying the array in place.
