// set Interval, every time second passes
// keep track of hours

let count = 120

// calculate amount of time passed
const getTime = () => {
  // console.log(count)

  // get total number of minutes (add floor to get whole amount)
  let tempMinutes = Math.floor(count / 60)
  let hours = Math.floor(tempMinutes / 60)
  let minutes = tempMinutes % 60
  // get remainder of division (aka seconds)
  let seconds = count % 60
  // console.log(`${hours} hours, ${minutes} minutes, ${seconds} seconds`)

}

setInterval(() => {
  // every second passes move count up
  count++
  getTime()
}, 1000)

