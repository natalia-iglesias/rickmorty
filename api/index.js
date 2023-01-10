const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index')
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeaders')
const {conn} = require('./src/models')
const {PORT} = require('./src/utils/config')
const app = express();

//aca vamos a setear nuestros headers
app.use(express.urlencoded({ extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}));
app.use(morgan('dev'));
app.use(setHeaders);


//setear nuestras rutas 
app.use('/api',routes);

//aca vamos a hacer nuestros middleware de control de errores
app.use(errorHandler);

// aca tenemos que hcaer nuestro server.listen 
conn.sync({force:true})
.then(() =>{ 
    console.log('base de datos conectada')
    app.listen(PORT, ()=>{
        console.log(`el servidor esta escuchando en el puerto ${PORT}`);
    })

})
