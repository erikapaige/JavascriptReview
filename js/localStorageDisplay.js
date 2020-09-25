// ==== FUNCTIONS FOR SET INTERVAL ==== //
let hi = setInterval(() => {
  console.log('hi')
}, 500)
document.getElementById('hiTicker').addEventListener('click', () => {
  clearTimeout(hi)
})
// random number generator 0 - 100
let randomNumberGen = setInterval(() => {
  console.log(Math.floor(Math.random() * 100))
}, 500)
document.getElementById('stopGenerator').addEventListener('click', () => {
  clearTimeout(randomNumberGen)
})


// ==== FUNCTIONS FOR TIME OUTS ==== //
console.log('10 seconds left')

let fiveSeconds = setTimeout(() => {
  console.log('5 seconds left')
}, 5000)

// abort a setTimeOut by clearing the timeout so give it a name
// clearTimeout(fiveSeconds)

let eightSeconds = setTimeout(() => {
  console.log('2 seconds left')
}, 8000)

let timesUp = setTimeout(() => {
  console.log('time is up!')
}, 10000)

// button responsible for stopping timed event
document.getElementById('abort').addEventListener('click', () => {
  clearTimeout(timesUp)
})



// ==== FUNCTIONS FOR LOCAL STORAGE ==== //
// make button clickable
document.getElementById('signUp').addEventListener('click', (event) => {
  event.preventDefault()
  let user = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  console.log(user)
  // want to put object into local storage
  // stringify turns object into string so it can be stored in string
  localStorage.setItem('user', JSON.stringify(user))
})
// to display user
if (localStorage.getItem('user')) {
  // create new object to get information from local storage to display on inner HTML
  // take string of JSON data and turn into JS object
  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  document.getElementById('user').innerHTML = `
      <h3>Username: ${user.username}</h3>
      <h3>Email: ${user.email}</h3>
      <h3>Password: ${user.password} </h3>
      `
}