/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

// Your code here (and the code from the previous exercise)
class Group {
  constructor(members) {
    this.members = members;
  }

  static from(members) {
    return new Group(members);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(alphabet) {
    this.alphabet = alphabet;
    this.position = 0;
  }

  next() {
    if (this.position >= this.alphabet.members.length) {
      return { done: true };
    }
    return { value: this.alphabet.members[this.position++], done: false };
  }
}

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c