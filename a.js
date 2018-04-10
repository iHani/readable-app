// const object1 = {
//   obj1: 'ONE1'
// };
//
// const object2 = Object.assign({ text: 'hala'}, object1);
// console.log(object2);

const isLargerOrEqualTo100 = (a) => {
  return new Promise((resolve, reject) => {
    if (a >= 100) {
      resolve(`${a} is >= 100`)
    } else {
      reject(`${a} is < 100`)
    }
  })
}

const howLargeIs = async (number) => {
  // await is used ONLY inside an async functions
  // await used with functions that returns Promises
  // The resolved value will be used from the called promise'd-function
  return await isLargerOrEqualTo100(number)
}

howLargeIs(88).then((status) => {
  console.log('Resolved: ', status)
}).catch(e => {
  console.log('Rejected: ', e)
})
