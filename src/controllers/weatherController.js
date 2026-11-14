export async function obtenerClima(req,res){
    const {ciudad} = req.query;
    if(!ciudad) return res.status(400).json({err: 'No se colocó ninguna ciudad'})
        
        const tieneLetras = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(ciudad);
    if (!tieneLetras) {
        return res.status(400).json({ err: 'Ingresá un nombre de ciudad válido' });
    }
    try {
        // guardamos la apikey en esta variable
          const apiKey = process.env.OPENWEATHER_API_KEY;
          // q= la query de la ciudad que se va a buscar aplicada con la key
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
        
          let respuesta = await fetch(url)

          // Si no se encontro la ciudad, o sea si respuesta no fue ok
          if(!respuesta.ok){
              return res.status(respuesta.status).json({err: "Ciudad no encontrada"})
        } 

            // si paso la validacion, convertimos los datos en un objeto json
            const datos = await respuesta.json()
            res.json(datos) // se la pasamos al frontend
    } catch (error) {
            console.error(error)
            res.status(500).json({err: 'Error interno del servidor'})
    }
}

/*
La función del controller es recibir la solicitud que llega de la ruta, 
ejecutar una logica de negocio (validar datos, consultar bases de datos 
o llamar a APIs externas) y devolver una respuesta ordenada al usuario.
*/
