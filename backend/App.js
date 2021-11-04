/** Llamar dependencias */
const express = require('express');
const { dbConnection } = require('./database/db.config');
require ('dotenv').config();

/** Crear servidor express */
const app = express ();

/** Conectar BD */
dbConnection();

/** Utilizar CORS */
//app.use(cors());

/** Definir directorio público */
app.use(express.static('public'));

/** Capturar peticiones */
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

/** Importar rutas */
const { product_routes, sale_routes, user_routes } = require('./routes');
app.use('/api', product_routes);
app.use('/api', sale_routes);
app.use('/api', user_routes);

/** Escuchar peticiones */
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}...`);
});
