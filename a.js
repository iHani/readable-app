const object1 = {
  a: 1,
  b: 2,
  c: {
    aa: 11,
    bb:22
  }
};


const object2 = Object.assign({}, object1);

console.log(object2);
