import {
  cargaRoles, terminaSesión
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            Sesión Principal</a>
        </li>
        <li>
          <a href="chat.html">
            Cerrar Sesion</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  /**
   * @param {import(
      "../lib/tiposFire.js").User}
      usu */
  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles =
        await cargaRoles(
          usu.email);
      if (roles.has("Cliente")) {
        html += /* html */
          `<li>
            <a href= "chat.html">Chat</a>
          </li>`;
      }
      if (roles.has(
        "Administrador")) {
        html += /* html */
          `<li>
            <a href= "pacientes.html">Pacientes</a>
          </li>`;
      }
      this.ul.innerHTML += html;
    }
  }
}

/** @type {HTMLFormElement} */
const forma = document["forma"];
forma.terminarSesión.
  addEventListener(
    "click", terminaSesión);

customElements.define(
  "mi-nav", MiNav);

/* Formato de nav */
