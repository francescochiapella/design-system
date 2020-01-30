import { Component, Prop, h, State } from "@stencil/core";
import { MenuItem } from "../../beans/index.js";

@Component({
  tag: "z-menu-dropdown",
  styleUrl: "styles.css",
  shadow: true
})
export class ZMenuDropdown {
  @Prop() nomeutente: string;
  @Prop() menucontent: string | MenuItem[];
  @Prop() buttonid: string;

  @State() ismenuopen: boolean = false;

  linkarray: MenuItem[];

  constructor() {
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }

  handleKeyUp(ev: KeyboardEvent) {
    if (ev.key === "Enter" || ev.key === "Space") {
      this.ismenuopen = !this.ismenuopen;
    }
  }

  renderMenuOpen() {
    if (this.ismenuopen) {
      return (
        <ul>
          {this.linkarray.map(bean => (
            <li>
              <z-link
                linkid={bean.id}
                url={bean.link}
                label={bean.label}
                icon={bean.icon}
              />
            </li>
          ))}
        </ul>
      );
    }
  }

  renderButtonMenu() {
    return (
      <span class="arrow">
        <z-icon name="drop-down" width={14} height={14} />
      </span>
    );
  }

  retriveMenuClass() {
    if (this.ismenuopen) {
      return "menu-opened";
    }
  }

  render() {
    return (
      <div class={this.retriveMenuClass()} role="button">
        <div
          class="container"
          onKeyUp={(ev: KeyboardEvent) => this.handleKeyUp(ev)}
          onClick={() => (this.ismenuopen = !this.ismenuopen)}
          tabindex="0"
        >
          <z-icon name="user" width={14} height={14} />
          <span class="user">{this.nomeutente}</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </div>
    );
  }
}
