/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
class Group {
  constructor(){
    this.group = [];
  }
  has(numbers) {
    return this.group.includes(numbers);
  }
  add(numbers) {
    if (!this.group.includes(numbers)) {
      this.group.push(numbers);
    }
  }
  delete(numbers) {
    let items = this.group.indexOf(numbers);
    if (items !== -1) {
      this.group.splice(items, 1);
    }
  }
  static from(a) {
    let b = new Group();
    for (let numbers of a) {
      b.add(numbers);
    }
    return b;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}
  

class GroupIterator {
  constructor(o) {
    this.i = 0;
    this.group = o.group;
  }

  next() {
    if (this.i == this.group.length || this.i > 10) return {done: true};

    let value = this.group[this.i];
    this.i++;
    return {value, done: false};
  }
}

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c