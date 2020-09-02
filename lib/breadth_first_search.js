// let graph = {
//     "a": ["b", "c", "d"],
//     "b": [],
//     "c": ["b", "d"],
//     "d": [],
//     "e":["a"],
//     "f":["e"]
// }

function breadthFirstSearch(startingNode, targetVal) {

    if (startingNode.val === targetVal) return startingNode;

    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let currentNode = queue.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        if (currentNode.val === targetVal) return currentNode;
        queue.push(...currentNode.neighbors);
    };

    return null;
};

// console.log(breadthFirstSearch(graph, graph["a"][1], "a"));

module.exports = {
    breadthFirstSearch
};
