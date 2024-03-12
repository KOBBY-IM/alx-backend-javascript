function cleanSet(set, startString) {
  if (!startString || !startString.trim()) {
    return '';
  }
  // check if set is an instance of Set
  if (!(set instanceof Set)) {
    throw new Error('The "set" argumenent must be a Set');
  }
  let result = '';
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}

export default cleanSet;
