import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraPacientes
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoPaciente =
    getFirestore().
    collection("Paciente");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
    protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
      ["Administrador"])) {
    forma.addEventListener(
        "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
        new FormData(forma);
    const folio = getString(
        formData, "folio").trim();
    const nombre = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const enfermedad = getString(formData, "enfermedad").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      folio,
      nombre,
      telefono,
      enfermedad,
      fecha
    };
    await daoPaciente.
    add(modelo);
    muestraPacientes();
  } catch (e) {
    muestraError(e);
  }
}


