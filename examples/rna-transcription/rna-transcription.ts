export function toRna(string: String) {
  //throw new Error('Remove this statement and implement this function')
  let result = '';
  for (let i = 0; i < string.length; ++i) {
    switch (string[i]) {
      case 'G':
        result += 'C';
      break;
      case 'C':
        result += 'G';
      break;
      case 'T':
        result += 'A';
      break;
      case 'A':
        result += 'U';
      break;
      default:
        throw new Error('Invalid input DNA.');
        break;
    }
  }
  return result;
}
