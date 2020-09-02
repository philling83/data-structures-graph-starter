function maxValue(node, visited = new Set()) {
  let queue = [node]
  let maxValue = node.val;

  while (queue.length) {
    let currentNode = queue.shift();
    if (visited.has(currentNode)) continue;
    visited.add(currentNode);
    if (currentNode.val > maxValue) maxValue = currentNode.val;
    queue.push(...currentNode.neighbors)
  }
  return maxValue;
}

module.exports = {
    maxValue
};
