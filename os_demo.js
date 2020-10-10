const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('Free mem: ',os.freemem(), ' bytes');
console.log('Total mem: ',os.totalmem(), ' bytes');