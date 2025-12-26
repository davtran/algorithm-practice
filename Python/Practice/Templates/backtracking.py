class Backtracking:

    def subsets_example(self, nums):
        n = len(nums)
        result = []
        solution = []

        def bactrack(i):
            if i == n :
                result.append(solution[:])
                return
            
            # don't pick nums[i]
            backtrack(i + 1)

            # pick nums[i]
            solution.append(nums[i])
            backtrack(i + 1)

        backtrack(0)
        return result
    
    def permutations_example(self, nums):
        n = len(nums)
        result = []
        solution = []
        used = [False] * n

        def backtrack():
            if len(solution) == n:
                result.append(solution[:])
                return
            
            for i in range(n):
                if used[i]:
                    continue
                
                used[i] = True
                solution.append(nums[i])
                backtrack()
                solution.pop()
                used[i] = False

        backtrack()
        return result