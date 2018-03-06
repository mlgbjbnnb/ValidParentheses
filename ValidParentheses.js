export default function validParentheses(str) {
  let parenthesesArr = str.split('');
  let arr = [];
  for(let index = 0; index < parenthesesArr.length; index++) {
    switch(parenthesesArr[index]) {
      case '(':
        arr.push(parenthesesArr[index]);
        break;
      case ')':
        let symbol = arr.pop();
        if (symbol !== '(') {
          return false;
        }
        break;
    }
  }
  return !(arr.length > 0);
}
