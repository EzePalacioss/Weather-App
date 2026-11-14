import express from 'express'
import dotenv from 'dotenv' // -> lee el archivo secreto
import weatherRoutes from './src/routes/weatherRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//1. Cargamos las variables de entorno del archivo .env
dotenv.config(); // -> busca el archivo .env, lee lo que se puso dentro y lo guarda en un onjeto global de node, llamando a process.env. asi podemos acceder a nuestras claves desde cualquier archivo

// cargamos express y el servidor
const app = express()
const PORT = process.env.PORT || 3000;

// middlewares

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))); // Sirve automáticamente los archivos de la carpeta 'public'

// rutas para nuestra api
// le decimos al servidor que cualquier peticion que empiece con api clima, sea derivado a weatherRoutes.js
app.use('/api/clima', weatherRoutes);

// encendemos el servidor
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

export default app;