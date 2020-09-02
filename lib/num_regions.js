let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};

let graph2 = {
    'x': [],
    'y': [],
    'z': []
};

function newRegion(visited, node, graph) {
    if (visited.has(node)) return false;

    visited.add(node);
    graph[node].forEach(neighbor => {
        newRegion(visited, neighbor, graph);
    })

    return true;
}

function numRegions(graph) {

    let visited = new Set();
    let count = 0;

    for (let key in graph) {

        if (newRegion(visited, key, graph)) {

            count++;
        }
    }

    return count;
}

module.exports = {
    numRegions
};

console.log(numRegions(graph1))
console.log(numRegions(graph2))
