function getUser(id, callback) {
    // Simulating database query delay
    return setTimeout(() => {
      if (id === 5) {
        callback(null, { nickname: 'Teddy' })
      } else {
        callback(new Error('User not found'))
      }
    }, 1000)
  }
  
  // Original callback function
  function callback(error, user) {
    if (error) {
      console.error(error.message)
      process.exit(1)
    }
  
    console.log(`User found! Their nickname is: ${user.nickname}`)
  }
  
  // Using getUser with callbacks
  getUser(1, callback) // -> `User not found`
  getUser(5, callback) // -> `User found! Their nickname is: Teddy`
  