function sortItems(items, order) {
  let tempDic = {};
  if (items === undefined || order === undefined) {
    return undefined;
  }
  if (items === null || order === null) {
    return null;
  }
  for (let i = 0; i < items.length; i++) {
    if (!tempDic[items[i]]) {
      tempDic[items[i]] = [];
    }
    tempDic[items[i]].push(items[i]);
  }

  let result = [];
  for (let i = 0; i < order.length; i++) {
    if (tempDic[order[i]]) {
      result.push(...tempDic[order[i]]);
    }
  }
  return result;
}
module.exports = sortItems;
