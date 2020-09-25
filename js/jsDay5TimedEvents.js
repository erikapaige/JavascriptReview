// ==== FUNCTIONS FOR SET INTERVAL ==== //
let hi = setInterval(() => {
  console.log('hi')
}, 500)

document.getElementById('hiTicker').addEventListener('click', () => {
  clearTimeout(hi)
})

// random number generator 0 - 100
let ranNum = setInterval(() => {
  console.log(Math.floor(Math.random() * 100))
}, 500)
document.getElementById('stopGenerator').addEventListener('click', () => {
  clearTimeout(ranNum)
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