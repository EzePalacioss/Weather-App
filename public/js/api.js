/*Es el encargado y el unico autorizado para hablar con el backend usando fetch
No sabe nada de HTML, no usa document.getElementById, no muestra spinners ni toca botones
*/
export const obtenerDatosClima = async(ciudad)=>{
    const respuesta = await fetch(`/api/clima?ciudad=${encodeURIComponent(ciudad)}`)
    const datos = await respuesta.json()

    if(!respuesta.ok){
        throw new Error(datos.err || 'Error al obtener el clima')
    }

    return datos;
}

