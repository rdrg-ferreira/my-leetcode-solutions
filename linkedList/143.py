# class ListNode:
#     def __init__(self, val: int = 0, next: Optional['ListNode'] = None):
#         self.val = val
#         self.next = next

# Time - O(n)
# Space - O(1)

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # get middle of the linked list
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # reverse second half
        prev = None
        cur = slow

        while cur:
            next_ = cur.next
            cur.next = prev
            prev = cur
            cur = next_
        
        # merge the first half with the new reversed second half
        first = head
        second = prev
        
        while second.next:
            first.next, first = second, first.next
            second.next, second = first, second.next
