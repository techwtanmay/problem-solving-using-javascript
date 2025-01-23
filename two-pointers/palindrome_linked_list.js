/*
Problem - https://leetcode.com/problems/palindrome-linked-list/
*/

var isPalindrome = function(head) {
    let fastPointer = head, slowPointer = head;

    while (fastPointer != null && fastPointer.next != null)
    {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    // reverse 2nd half
    let prev = null, current = slowPointer, nextNode;

    while (current != null)
    {
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    while (prev != null)
    {
        if (head.val != prev.val)
        {
            return false
        }
        head = head.next;
        prev = prev.next;
    }

    return true
};

/* Test Cases */
/*
let nums_1 = [1, 2, 2, 1], nums_2 = [1 , 2], nums_3 = [1];

console.log(nums_3);

moveZeroes(nums_3);

console.log(nums_3);
*/