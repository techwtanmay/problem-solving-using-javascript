/*
Problem - https://leetcode.com/problems/intersection-of-two-linked-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* My Solution */
var getIntersectionNode = function (headA, headB) {
  let currentNodeA = headA,
    currentNodeB = headB;

  let num_of_nodes_A = 0,
    num_of_nodes_B = 0;

  while (currentNodeA.next != null) {
    num_of_nodes_A = num_of_nodes_A + 1;
    currentNodeA = currentNodeA.next;
  }

  while (currentNodeB.next != null) {
    num_of_nodes_B = num_of_nodes_B + 1;
    currentNodeB = currentNodeB.next;
  }

  let longer_linked_list, shorter_linked_list;

  if (Math.max(num_of_nodes_A, num_of_nodes_B) == num_of_nodes_A) {
    longer_linked_list = headA;
    shorter_linked_list = headB;
  } else {
    longer_linked_list = headB;
    shorter_linked_list = headA;
  }

  let starting_nodes_to_ignore =
    Math.max(num_of_nodes_A, num_of_nodes_B) -
    Math.min(num_of_nodes_A, num_of_nodes_B);

  let nodes_processed = 0;
  let intersectionNodeValue = null;

  if (longer_linked_list == shorter_linked_list) {intersectionNodeValue = shorter_linked_list}

  while (longer_linked_list != null && shorter_linked_list != null) {
    if (nodes_processed < starting_nodes_to_ignore) {
      nodes_processed++;
      longer_linked_list = longer_linked_list.next
    } else {
      if (
        longer_linked_list == shorter_linked_list &&
        longer_linked_list.next == shorter_linked_list.next
      ) {
        intersectionNodeValue = shorter_linked_list;
        break;
      }
      else {
        longer_linked_list = longer_linked_list.next
        shorter_linked_list = shorter_linked_list.next
      }
    }
  }

  return intersectionNodeValue
};

/* 
  Clever Solution 

  2 + 3 = 5 = 3 + 2

  Connect the linked list during traversal to make one single loop.

*/
var getIntersectionNodeClever = function(headA, headB) {
  if (!headA || !headB) return null;

  let dummy1 = headA, dummy2 = headB;

  while (dummy1 !== dummy2) {
      dummy1 = dummy1 ? dummy1.next : headB;
      dummy2 = dummy2 ? dummy2.next : headA;
  }

  return dummy1;
};

/* 

Intersection at node '8'

listA = [4, 1, 8, 4, 5]

listB = [5, 6, 1, 8, 4, 5]

4, 1, 8, 4, 5, 5, 6, 1, 8

5, 6, 1, 8, 4, 5, 4, 1, 8

No Intersection case

listA = [4, 1, 8, 4, 5]

listB = [3, 2, 9, 7, 6, 0]

4, 1, 8, 4, 5, 3, 2, 9, 7, 6, 0

3, 2, 9, 7, 6, 0, 4, 1, 8, 4, 5

In the end both pointers traversed both the lists and ended up with null values

*/