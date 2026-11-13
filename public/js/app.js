/*Importa las herramientas de api.js 
y ui.js y las coordina cuando el usuario interactúa con la página
*/
import { obtenerDatosClima } from "./api.js";
import { mostrarCargando, mostrarClima, mostrarError } from "./ui.js";

const searchform = document.getElementById('search-form')
const cityinput = document.getElementById('city-input')

searchform.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const ciudad = cityinput.value.trim()
    if(!ciudad) return
    const tieneLetras = /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(ciudad);
if (!tieneLetras) {
    mostrarError('Ingresá un nombre de ciudad válido');
    return;
}
try {
    mostrarCargando()
    const datos = await obtenerDatosClima(ciudad)
    mostrarClima(datos)
} catch (error) {
    mostrarError(error.message)
}
})