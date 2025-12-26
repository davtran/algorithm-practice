class BinarySearch:
    """Class containing binary search methods."""

    def traditional_binary_search(self, arr, target):
        """
        Traditional binary search to find the index of a target in a sorted array
        """
        n = len(arr)
        left = 0
        right = n - 1

        while left <= right:
            mid = left + (right - left) // 2

            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1

    def condition_based_binary_search(self, arr, target):
        """
        Binary search based on a condition to find the first index where the condition is met
        """
        n = len(arr)
        left = 0
        right = n - 1

        while left < right:
            mid = (left + right) // 2
            
            if arr[mid]:
                right = mid
            else:
                left = mid + 1
        return left