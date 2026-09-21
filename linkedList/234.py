# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time - O(n)
# Space - O(1)

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head:
            return True

        # find the middle of the linked list
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # reverse second half of the linked list
        prev = slow
        cur = slow.next

        while cur:
            next_ = cur.next
            cur.next = prev
            prev = cur
            cur = next_
        
        # now use 2 pointer to check if it is a palindrome
        left = head
        right = prev

        while left != slow:
            if left.val != right.val:
                return False
            
            left = left.next
            right = right.next
        
        return True 
