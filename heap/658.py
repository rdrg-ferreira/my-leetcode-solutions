class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        heap = []
        for i in range(len(arr)):
            distance = abs(arr[i] - x)
            
            if len(heap) < k:
                heapq.heappush(heap, (-distance, i))
            elif distance < -heap[0][0]:
                heapq.heappushpop(heap, (-distance, i))
        
        res = [arr[p[1]] for p in heap]
        res.sort()
        return res
