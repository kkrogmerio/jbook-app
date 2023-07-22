new Promise((resolve, reject) => {
  // some async operation here
  setTimeout(() => {
    resolve("Success!")
  }, 0)
})
.then(result => {
  console.log(result)  // "Success!"
})

console.log("result")