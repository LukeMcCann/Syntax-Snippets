// Promise
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()

// Async Await
const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()
