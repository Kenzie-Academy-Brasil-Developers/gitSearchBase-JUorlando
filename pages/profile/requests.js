const baseUrl = `https://api.github.com/users`
const myHeaders = {
  'Content-Type': 'application/json'
}

function getAllUsers() {
  fetch(`${baseUrl}`, {
    method: 'GET',
    headers: myHeaders
  })
  .then(resp => resp.json())
  .then(resp => {
    render(resp)
    console.log(resp)
    
    return resp
  })
}

getAllUsers()