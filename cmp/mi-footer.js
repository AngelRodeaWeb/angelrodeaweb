class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        Copyright &copy; 2021 Rodea Nambo Jose Angel
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
/* En este JS lo que haces es que se hace un formtato de footer el cual el llamado en cada html para no
* declararlo indivuaalmente */
