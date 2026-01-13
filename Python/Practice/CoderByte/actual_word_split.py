def WordSplit(strArr):
    word = strArr[0]
    dictionary = set(strArr[1].split(","))
    
    for i in range(1, len(word)):
        left = word[:i]
        right = word[i:]
        
        if left in dictionary and right in dictionary:
            return f"{left}, {right}"
    
    return "not possible"

if __name__ == "__main__":
    test_cases = [
        ["hello,cat,hell,o,ca,t", "hellocat"],
        ["a,b,c", "abc"],
        ["a,ab,abc", "abcd"],
        ["apple,pen", "applepenapple"]
    ]

    for case in test_cases:
        print(f"{case[1]} -> {WordSplit([case[1], case[0]])}")