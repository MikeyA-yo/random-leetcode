/**
 * Definition for singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const res = new ListNode(0);
  if (l1 && l2) {
    // add the last values of l1 and l2
    // check if the result is greater than 10,
    // if greater convert to string then take the first digit and store it temporarily
    // store the last digit in the res list node
    // add that digit to the addition of the next node values
    // repeat
    let tempDigit = 0;
    let done = false;
    let tempRes = [];
    while (!done) {
      let currentDigit;
      let initAdd = l1.val + l2.val + tempDigit;
      // store temp digit
      if (initAdd >= 10) {
        tempDigit = parseInt(String(initAdd).charAt(0));
        currentDigit = parseInt(String(initAdd).charAt(1));
      } else {
        currentDigit = initAdd;
        tempDigit = 0;
      }
      console.log({ currentDigit, tempDigit, l1Val: l1.val, l2Val: l2.val });
      tempRes.push(currentDigit);
      if (l1.next) {
        l1 = l1.next;
      } else {
        l1 = new ListNode(0);
      }
      if (l2.next) {
        l2 = l2.next;
      } else {
        l2 = new ListNode(0);
      }

      if (!l1.next && !l2.next && l1.val === 0 && l2.val === 0) {
        done = true;
        if (tempDigit > 0) {
          tempRes.push(tempDigit);
        }
      }

    //   if (last) {
    //     if (tempDigit > 0) {
    //       tempRes.push(tempDigit);
    //     }
    //     done = true;
    //   }
    //   if (!l1.next && !l2.next) {
    //     last = true;
    //   }
    }
    console.log(tempRes);
    let dummRes = res;
    for (const v of tempRes) {
      dummRes.next = new ListNode(v);
      dummRes = dummRes.next;
    }
  }
  return res.next;
}

// Helper function to build a linked list from an array
function buildListFromArray(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print a linked list
function printList(node: ListNode | null): string {
  const values: number[] = [];
  let current = node;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values.join(" -> ");
}

// Test cases
const l1_test1 = buildListFromArray([9, 9, 9, 9, 9, 9, 9]);
const l2_test1 = buildListFromArray([9, 9, 9, 9]);
const result1 = addTwoNumbers(l1_test1, l2_test1);
console.log("Test 1 Result:", printList(result1));

const l1_test2 = buildListFromArray([2, 4, 3]);
const l2_test2 = buildListFromArray([5, 6, 4]);
const result2 = addTwoNumbers(l1_test2, l2_test2);
console.log("Test 2 Result:", printList(result2));

const l1_test3 = buildListFromArray([0]);
const l2_test3 = buildListFromArray([0]);
const result3 = addTwoNumbers(l1_test3, l2_test3);
console.log("Test 3 Result:", printList(result3));
