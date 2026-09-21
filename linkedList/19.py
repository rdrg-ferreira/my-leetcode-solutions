# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time - O(n)
# Space - O(1)

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # get length of the linked list
        cur = head
        length = 0

        while cur:
            length += 1
            cur = cur.next
        
        # remove the n-th element starting from the end
        dummy = ListNode(0)
        dummy.next = head

        prev = dummy
        cur = head
        for i in range(length - n):
            prev = cur
            cur = cur.next

        prev.next = cur.next

        return dummy.next   
