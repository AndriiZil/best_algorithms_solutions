'use string';

function reverse1(str) {
  let result = '';
  const string = str.split('');

  while (string.length) {
    result += string.pop();
  }

  return result;
}

function reverse2(str) {
  let result = '';

  for (let i = str.length; i > 0; i--) {
    result += str[i - 1];
  }

  return result;
}

function reverse3(str) {
  return [...str].reverse().join('');
}

console.log(reverse1('string'));
console.log(reverse2('string'));
console.log(reverse3('string'));
