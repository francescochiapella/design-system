import { Component, Prop, h, State, Element, Listen } from "@stencil/core";

@Component({
  tag: "z-header",
  styleUrl: "styles.css",
  shadow: true
})
export class ZHeader {
  @Prop() prop: string;
  @State() isSticky: boolean = false;

  @Element() private element: HTMLElement;

  @Listen("scroll", { target: "document" })
  handleScroll(): void {
    const navbar = this.element.shadowRoot.getElementById("main-header");
    const sticky = navbar.offsetTop;
    this.handleStickyNav(sticky);
  }

  handleStickyNav(sticky): void {
    if (window.pageYOffset > sticky) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  handleHomeButtonClick(): void {
    const dropdown = this.element.shadowRoot.getElementById("dropdown-menu");
    dropdown.classList.toggle("visible");
  }

  handleDizionariButtonClick(): void {
    const dropdown = this.element.shadowRoot.getElementById("dropdown-menu");
    dropdown.classList.remove("visible");
  }

  render() {
    return (
      <header>
        <div class="top-header">
          <div class="editors">
            <span>Testo a caso</span>
            <span>Testo a caso</span>
            <span>Testo a caso</span>
            <span>Testo a caso</span>
          </div>
        </div>
        <div
          id="main-header"
          class={`main-header ${this.isSticky && "sticky"}`}
        >
          <div class="logo">
            <slot name="logo" />
          </div>
          <div class="link-int">
            <span>
              <a
                href="#home"
                id="home"
                class="menu-item"
                onClick={() => this.handleHomeButtonClick()}
              >
                Home
              </a>
              <svg height="8" width="16" class="hidden">
                <polygon points="8,0 16,8 0,8" class="arrow" />
              </svg>
            </span>
            <span>
              <a
                href="#dizionari"
                id="dizionari"
                class="menu-item"
                onClick={() => this.handleDizionariButtonClick()}
              >
                Dizionari
              </a>
              <svg height="8" width="16" class="hidden">
                <polygon points="8,0 16,8 0,8" class="arrow" />
              </svg>
            </span>
          </div>
          <div class="void" />
          <div class="link-ext">
            <a href="#supporto">Supporto</a>
            <a href="#shop">E-shop</a>
            <a href="#chiedi">Chiedi al tuo responsabile</a>
          </div>
          <div class={`login ${this.isSticky && "sticky"}`}>
            <slot name="login" />
          </div>
        </div>
        <div
          id="dropdown-menu"
          class={`dropdown-menu ${this.isSticky && "sticky"}`}
        >
          <div class="dropdown-links">
            <a href="#libreria" class="active">
              La mia Libreria
            </a>
            <a href="#ambienti">Ambienti Zanichelli</a>
            <a href="#idee">Idee per insegnare</a>
          </div>
        </div>
      </header>
    );
  }
}
