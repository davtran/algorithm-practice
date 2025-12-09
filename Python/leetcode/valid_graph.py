def validTree(n, edges):
    # trees are acyclic (no loops) and every node is connected (meaning everything can be traversed)
    # trees are supposed to have n - 1 edges, so if the number of edges is greater than that, then
    # there may be a loop somewhere and it is not a tree
    # n determines the number of nodes, however the list of edges determines the connections
    # it is possible to have n = 4 and edges = [[0, 1]], just means some nodes aren't connected
    # that also means if all nodes are not connected, then that is not a valid tree
    # could use DFS to do traversal, which means a need for an adjacency list and a seen hashmap most likely
    # adjacency list for easier graph traversal and seen hashmap to detect cycles
    # first step, check if edges is n - 1 in relation to n, the number of nodes
    # if that is not true, then return false as it is not a tree
    # then with the list of edges, create an adjancency list which is technically a dict in python
    # dfs logic should start with node 0
    # if the current node is in the seen hashmap and not the parent node, then return false
    # add the current node to the seen hashmap
    # then based on the adjancency list, iterate through the neighbors
    # call dfs on them as well
    # if traversal is complete, then return true

    # check if we have a valid tree based on number of edges
    if len(edges) != n - 1:
        return False
    
    # build adjacency list
    adjacency_list = { i: [] for i in range(n) } # create the empty list based on number of nodes
    for u, v in edges:
        adjacency_list[u].append(v)
        adjacency_list[v].append(u)

    # keep track of seen nodes
    seen = set()

    def dfs(node, parent):
        if node in seen:
            return False
        
        seen.add(node)

        for neighbor in adjacency_list[node]:
            # ignore edge back to parent because the graph is undirected and not enough to detect a cycle
            if neighbor == parent:
                continue
            
            if not dfs(neighbor, node):
                return False
        
        return True
    
    # start at node 0
    if not dfs(0, -1):
        return False # cycle detected
    
    return len(seen) == n

if __name__ == "__main__":
    test_cases = [
        (5, [[0,1], [0,2], [0,3], [1,4]]),  # valid tree
        (4, [[0,1], [0,2]]),                # disconnected
        (4, [[0,1], [1,2], [2,0], [2,3]])   # cycle
    ]

    for i, (n, edges) in enumerate(test_cases):
        result = validTree(n, edges)
        print(f"Test case {i+1}: {result}")
