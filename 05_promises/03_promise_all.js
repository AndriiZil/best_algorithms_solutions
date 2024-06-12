'use string';

const input = [
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
];

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument is not iterable'));
    }

    let resolvedValues = [];
    let remainingPromises = promises.length;

    if (remainingPromises === 0) {
      return resolve([]);
    }

    promises.forEach((func, index) => {
      if (typeof func !== 'function') {
        return reject(
          new TypeError(
            'Each item in the array must be a function returning a promise',
          ),
        );
      }

      Promise.resolve(func())
        .then((value) => {
          resolvedValues[index] = value;
          remainingPromises -= 1;
          if (remainingPromises === 0) {
            resolve(resolvedValues);
          }
        })
        .catch(reject);
    });
  });
}

promiseAll(input).then(console.log); // [ 5 ]
