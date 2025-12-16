import heapq
from typing import List

"""
Definition of Interval:
"""
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        # the heap should store the end times of meetings currently using a room
        # we'll be using a min heap, so smallest end time is at the time
        # if a start time is greater than/equal to the earliest end time, room can be reused
        # else no room is free, need a new room
        # sort meetings by start time
        # iterate through meetings in that order
        # use a min heap to track earliest ending meetings
        # reuse rooms when possible
        # track the maximum number of rooms needed

        if not intervals:
            return 0
        
        # sort by start time
        intervals.sort(key=lambda x: x[0])
        
        heap = []
        rooms = 0

        for start, end in intervals:
            if heap and start >= heap[0]:
                heapq.heappop(heap)

            heapq.heappush(heap, end)
            rooms = max(rooms, len(heap))
        
        return rooms

if __name__ == "__main__":
    sol = Solution()

    tests = [
        ([[0, 30], [5, 10], [15, 20]], 2),
        ([[7, 10], [2, 4]], 1),
        ([[1, 5], [2, 6], [3, 7], [4, 8]], 4),
        ([[0, 10], [10, 20]], 1),
        ([], 0),
    ]

    for intervals, expected in tests:
        result = sol.minMeetingRooms(intervals)
        print(f"Intervals: {intervals}")
        print(f"Rooms needed: {result} (expected: {expected})")
        print("-" * 40)