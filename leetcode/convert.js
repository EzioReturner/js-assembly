// convert list to tree
const list = [
  {
    "id": 19,
    "parentId": 0,
  },
  {
    "id": 18,
    "parentId": 16,
  },
  {
    "id": 17,
    "parentId": 16,
  },
  {
    "id": 16,
    "parentId": 0,
  }
];

/**
 * @param list {object[]}, 
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */
function convert(list, parentKey, currentKey, rootValue) {
  let tree = {
    id: rootValue,
    children: createNode(list, parentKey, currentKey, rootValue)
  }

  function createNode(list, parentKey, currentKey, parentId) {
    let {tar, rest} = list.reduce((total, obj) => {
      if(obj[parentKey] !== parentId) {
        total.rest.push(obj);
      } else {
        total.tar.push(obj);
      }
      return total;
    }, {tar: [], rest: []});

    return tar.map(obj => {
      let children = createNode(rest, parentKey, currentKey, obj[currentKey]);
      let node = {...obj};
      children.length && (node.children = children);
      return node;
    })
  }

  return tree;
}

console.log(convert(list, 'parentId', 'id', 0));
    