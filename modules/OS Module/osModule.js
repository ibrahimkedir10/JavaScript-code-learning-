const os = require('os');

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime()
}

console.log(server);

/*

other:

* 		os.type() — to return the computer’s operating system.
* 		os.arch() — to return the operating system CPU architecture.
* 		os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
* 		os.homedir() — to return the current user’s home directory.
* 		os.hostname() — to return the hostname of the operating system.
* 		os.uptime() — to return the system uptime, in seconds.


*/