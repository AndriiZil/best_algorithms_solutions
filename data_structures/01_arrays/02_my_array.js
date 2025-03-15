class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;

    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItem(index);

    return item;
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;
  }
}

const myArray = new MyArray();

myArray.push('a');
myArray.push('b');
myArray.push('c');
myArray.push('d');

console.log('-------------');

console.log(myArray.get(0));
console.log(myArray.get(1));
console.log(myArray.get(2));

console.log('-------------');

myArray.delete(1);

console.log(myArray.data);

console.log('-------------');

console.log(myArray.pop());
console.log(myArray.pop());
console.log(myArray.pop());
