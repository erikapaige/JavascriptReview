document.getElementById('signIn').addEventListener('click', (event) => {
  event.preventDefault()
  // console.log('ping')

  // retrieve values from inputs, console.log them to make sure it is the info want
  console.log(document.getElementById('email').value)
  console.log(document.getElementById('password').value)

  document.getElementById('user').innerHTML = `
        <h3>Email: ${document.getElementById('email').value}</h3>
        <h3>Password: ${ document.getElementById('password').value}</h3>
      `
  //clear the inputs after submitting
  document.getElementById('email').value = ''
  document.getElementById('password').value = ''
})