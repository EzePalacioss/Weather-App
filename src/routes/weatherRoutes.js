import { Router } from 'express' // extraemos solo el modulo enrutador
import { obtenerClima } from "../controllers/weatherController.js"

const router = Router(); // vamos registrando nuestros endpoints

/*
Define la regla de tráfico: cuando llegue una petición HTTP de tipo GET a la ruta '/' (que sumada al prefijo de server.js forma /api/clima), Express le entrega automáticamente los objetos (req, res) a tu función obtenerClima para que ella haga el trabajo.
*/
router.get('/', obtenerClima)

export default router;