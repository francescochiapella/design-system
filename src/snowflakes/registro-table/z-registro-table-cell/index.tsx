import { Component, Element, h, Host, Prop, State } from "@stencil/core";
import { ButtonVariantEnum, ButtonSizeEnum } from "../../../beans";
import classNames from "classnames";

@Component({
  tag: "z-registro-table-cell",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZRegistroTableCell {
  @Element() host: HTMLElement;

  /** [Optional] Show contextual menu button */
  @Prop() showButton?: boolean;

  @State() isMenuOpened: boolean = false;

  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }

  render() {
    return (
      <Host>
        {this.showButton && (
          <div
            class={classNames("button-container", {
              visible: this.isMenuOpened,
            })}
          >
            <div class="button-content">
              <z-button
                icon="contextual-menu"
                variant={ButtonVariantEnum.tertiary}
                size={ButtonSizeEnum["x-small"]}
                onClick={() => this.handleMenu()}
                square
              />
              <div
                class={classNames("contextual-menu-container", {
                  visible: this.isMenuOpened,
                })}
              >
                <slot name="contextual-menu" />
              </div>
            </div>
          </div>
        )}
        <slot />
      </Host>
    );
  }
}
