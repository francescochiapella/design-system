import { Component, h, Element, Event, Prop, } from "@stencil/core";
import { State } from "@stencil/core/internal";
import { ButtonVariantEnum, InputStatusEnum, } from "../../../beans";
/**
 * @slot username - username input
 * @slot password - password input
 * @slot login - login button
 * @slot signup - signup button
 * @slot provider - expternal providers login buttons
 */
export class zModalLogin {
  constructor() {
    /** Login modal title */
    this.heading = "Entra in MyZanichelli";
    this.externalProviderCheck = false;
  }
  componentDidLoad() {
    this.externalProviderCheck = !!this.hostElement.querySelectorAll('[slot="provider"]').length;
  }
  emitLoginSubmit() {
    const usernameInput = this.hostElement.querySelector("z-input#username");
    const passwordInput = this.hostElement.querySelector("z-input#password");
    // INFO: slotted inputs
    if (!usernameInput || !passwordInput)
      return;
    let username = usernameInput.value;
    let password = passwordInput.value;
    if (!username || !password) {
      this.status = InputStatusEnum.error;
      return;
    }
    username = this.cleanUsername(username);
    this.loginSubmit.emit({
      username,
      password,
      originalUsername: usernameInput.value,
    });
  }
  emitSignupClick() {
    this.signupClick.emit();
  }
  emitZainoDigitaleClick() {
    this.zainoDigitaleClick.emit();
  }
  handleInputKeyUp(e) {
    if (e.code !== "Enter")
      return;
    this.emitLoginSubmit();
  }
  cleanUsername(username) {
    username = username.trim().toLowerCase();
    const mobileRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    if (mobileRegex.test(username)) {
      username = username.replace(/[- .)(]/g, "");
      if (/^[\d ]*$/.test(username))
        username = "+39" + username;
    }
    return username;
  }
  renderZainoDigitaleButton() {
    return (h("z-button", { variant: ButtonVariantEnum.secondary, onClick: () => this.emitZainoDigitaleClick(), class: "zainoDigitale" },
      h("div", { class: "zd" },
        h("svg", { width: "18px", height: "24px", viewBox: "0 0 18 24" },
          h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            h("g", { transform: "translate(-313.000000, -329.000000)", fill: "#E2001A", "fill-rule": "nonzero" },
              h("g", { transform: "translate(25.000000, 191.000000)" },
                h("g", null,
                  h("g", { transform: "translate(0.000000, 100.000000)" },
                    h("g", null,
                      h("g", { transform: "translate(276.000000, 28.000000)" },
                        h("path", { d: "M29.8953704,30.5632326 C29.9143039,30.3327754 29.5356326,30.0447041 29.1380277,29.8142469 C29.2516291,28.7963947 29.4409647,26.9719425 29.2705626,26.3189807 C29.0433598,25.416357 28.3428178,24.8018047 28.380685,23.822362 C28.4185521,22.8429193 28.1913493,16.5437582 27.0364017,15.1802202 C26.1654576,14.162368 25.4649156,12.8372396 23.4390239,12.2418921 C23.4390239,12.0498445 23.4390239,11.8770016 23.4200903,11.7425683 C23.3822232,10.9167637 21.9622056,10.090959 21.6214014,10.0525495 C21.2805972,10.01414 20.371786,9.95652568 20.0309818,10.0525495 C19.6901775,10.1293685 19.0464362,11.128016 18.7434992,11.4352922 C18.5920306,11.5889302 18.5541635,11.9538207 18.5730971,12.3187111 C17.437083,12.6836015 16.1306669,13.4325871 15.4490584,14.9497631 C14.2941108,17.676839 13.4799674,18.9251483 13.6693031,24.1680477 C13.5935688,25.1090809 13.2906318,25.6084046 13.1012961,25.6852237 C12.9119604,25.7620427 12.798359,25.9156808 12.7604919,26.1077284 C12.7226247,26.2805712 12.5522226,28.37389 12.7415583,29.8718612 C12.3818205,30.1023183 12.0788834,30.3519802 12.097817,30.5632326 C12.1546177,31.0625563 11.8516806,31.7731324 12.097817,32.0612038 C12.230352,32.2148419 12.7226247,32.5413228 13.3284989,32.8293942 C13.6125024,33.4631512 14.199443,33.9240655 15.467992,33.9816797 C18.1565586,34.0584988 26.2601254,33.8664512 26.5630625,33.9048607 C26.847066,33.9432702 28.4374857,34.0008845 28.683622,32.8293942 C29.2894962,32.5413228 29.781769,32.2148419 29.9143039,32.0612038 C30.1415067,31.7731324 29.8385697,31.0625563 29.8953704,30.5632326 Z M12.0319858,31.2 C12.1173988,31.1230769 12.3736379,31.0461538 12.743761,31 C12.857645,31.3230769 12.914587,31.6615385 13,32 C12.4021089,31.8153846 11.8611598,31.5692308 12.0319858,31.2 Z M21.1618497,12.8394441 C21.1618497,12.8394441 20.6763006,12.8165075 20,13 L20,12.9770634 C20,12.5642053 20.3121387,11.3256309 20.3988439,11.1192018 C20.4855491,10.9127728 21.265896,11.0274556 21.8554913,11.0733287 C22.6358382,11.0503922 22.4624277,11.2568212 22.8092486,11.9907912 C22.9306358,12.2889666 22.982659,12.6559516 23,13 C22.4797688,12.8623806 21.8728324,12.8165075 21.1618497,12.8394441 Z M28.3324094,30 C28.6648189,30.0833333 28.9085858,30.2222222 28.9750677,30.3888889 C29.1301921,31.1666667 28.5318551,31.6388889 28,32 C28.0221606,31.5 28.0664819,31.1111111 28.0664819,31.1111111 L28.2437669,30.6111111 L28.3324094,30 Z M21.8571429,23 L21.8571429,23.8 L22.7142857,23.8 L22.7142857,24.6 L23.5714286,24.6 L23.5714286,25.4 L24.4285714,25.4 L24.4285714,26.2 L25.2857143,26.2 L25.2857143,27 L26.1428571,27 L26.1428571,27.8 L27,27.8 L27,28.6 L24.4285714,28.6 L24.4285714,29.4 L25.2857143,29.4 L25.2857143,31 L24.4285714,31 L24.4285714,30.2 L23.5714286,30.2 L23.5714286,29.4 L22.7142857,29.4 L22.7142857,30.2 L21.8571429,30.2 L21.8571429,31 L21,31 L21,23 L21.8571429,23 Z" }))))))))),
        h("span", null, "ZAINO DIGITALE"))));
  }
  render() {
    return (h("z-modal", { modaltitle: this.heading },
      h("div", { class: "wrapper", slot: "modalContent" },
        h("form", { method: "post" },
          h("div", { class: "username" },
            h("slot", { name: "username" },
              h("z-input", { id: "username", label: "email o numero di cellulare", placeholder: "Inserisci l'email o il cellulare", autocomplete: "username", name: "username", status: this.status, message: this.message, onKeyUp: (e) => this.handleInputKeyUp(e), onInputChange: () => (this.status = null) }))),
          h("div", { class: "password" },
            h("slot", { name: "password" },
              h("z-input", { id: "password", label: "password", placeholder: "Inserisci la tua password", type: "password", name: "password", autocomplete: "current-password", status: this.status, onKeyUp: (e) => this.handleInputKeyUp(e), onInputChange: () => (this.status = null) }))),
          h("z-link", { class: "forget", href: "https://my.zanichelli.it" }, "Password dimenticata?"),
          h("div", { class: "login" },
            h("slot", { name: "login" },
              h("z-button", { variant: ButtonVariantEnum.primary, onClick: () => this.emitLoginSubmit() }, "Accedi")))),
        h("hr", null),
        h("z-body", { class: "signup", level: 4, variant: "semibold" }, "Non hai ancora un account?"),
        h("div", { class: "signup" },
          h("slot", { name: "signup" },
            h("z-button", { variant: ButtonVariantEnum.secondary, onClick: () => this.emitSignupClick() }, "Registrati"))),
        h("div", { class: "providers" },
          h("z-body", { class: "provider", level: 5, variant: "regular" }, "OPPURE ACCEDI CON:"),
          !this.externalProviderCheck && (h("slot", { name: "provider" },
            this.renderZainoDigitaleButton(),
            h("z-link", { icon: "informationsource", href: "https://www.zainodigitale.it/#/landing" }, "Cos'\u00E8 Zaino Digitale?")))))));
  }
  static get is() { return "z-modal-login"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "heading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Login modal title"
      },
      "attribute": "heading",
      "reflect": false,
      "defaultValue": "\"Entra in MyZanichelli\""
    },
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "InputStatusBean",
        "resolved": "\"error\" | \"selecting\" | \"success\" | \"warning\"",
        "references": {
          "InputStatusBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Username/password input status"
      },
      "attribute": "status",
      "reflect": false
    },
    "message": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Username helper message"
      },
      "attribute": "message",
      "reflect": false
    }
  }; }
  static get states() { return {
    "externalProviderCheck": {}
  }; }
  static get events() { return [{
      "method": "loginSubmit",
      "name": "loginSubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on login submit"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "signupClick",
      "name": "signupClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on signup button click"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "zainoDigitaleClick",
      "name": "zainoDigitaleClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on zaino digitale button click"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
