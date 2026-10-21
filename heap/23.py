# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: list[ListNode | None]) -> ListNode | None:
        heap = []
        res = ListNode()

        for i in range(len(lists)):
            node = lists[i]
            if node:
                heapq.heappush(heap, (node.val, i, node))
        
        cur = res
        while len(heap):
            (val, _, root) = heapq.heappop(heap)
            cur.next = ListNode(val)
            cur = cur.next
            
            if root.next:
                heapq.heappush(heap, (root.next.val, _, root.next))

        return res.next
