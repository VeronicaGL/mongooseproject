const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI 

mongoose.connect(MONGODB_URI)
.then(() => console.info(`conectado a ${MONGODB_URI}`))
.catch((error) => console.error('Error a conectarse a la base de datos', error))