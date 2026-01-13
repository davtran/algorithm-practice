def WordSplit(strArr):
    target = strArr[0]
    wordDict = set(strArr[1])
    n = len(target)
    
    memo = {}

    def backtrack(start):
        if start == n:
            return ""
        if start in memo:
            return memo[start]

        for end in range(n, start, -1):  # reversed to prefer longer words
            word = target[start:end]
            if word in wordDict:
                rest = backtrack(end)
                if rest is not False:
                    result = word if rest == "" else word + " " + rest
                    memo[start] = result
                    return result

        memo[start] = False
        return False

    return backtrack(0)

if __name__ == "__main__":
    test_cases = [
        ["hellocat", ["hello","cat","hell","o","ca","t"]],
        ["abc", ["a","b","c"]],
        ["abcd", ["a","ab","abc"]],
        ["applepenapple", ["apple","pen"]]
    ]

    for case in test_cases:
        print(f"{case[0]} -> {WordSplit(case)}")