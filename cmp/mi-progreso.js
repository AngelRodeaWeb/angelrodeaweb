class MiProgeso
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<progress max="100">
        Procesando…
      </progress>`;
  }
}

customElements.define(
  "mi-progreso", MiProgeso);
/* aqui se usa una barra que representa que sera llamada en por cada html */
