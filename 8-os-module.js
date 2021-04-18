const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/(1024 * 1024 * 1024),
    freemem: os.freemem()/ (1024 * 1024 * 1024)
}

console.log(currentOS)