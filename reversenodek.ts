/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    // Dummy node to handle edge cases
    const dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupEnd = dummy;
    let curr = head;

    while (curr) {
        // Check if there are at least k nodes remaining
        let count = 0;
        let check = curr;
        while (check && count < k) {
            check = check.next;
            count++;
        }

        // If less than k nodes remain, we're done
        if (count < k) break;

        // Reverse k nodes
        const groupStart = curr;
        let prev: ListNode | null = null;
        for (let i = 0; i < k; i++) {
            const next = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect with previous group
        prevGroupEnd.next = prev;  // prev is now the new head of reversed group
        groupStart.next = curr;    // groupStart is now the tail, connect to next group
        prevGroupEnd = groupStart; // Update prevGroupEnd for next iteration
    }

    return dummy.next;
}
