import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "z-card-alert",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCardAlert {
  @Prop() iconname: string;
  @Prop() contenttext: string;
  @Prop() actiontext?: string;
  @Prop() type: string;

  @Event() undoAction: EventEmitter;
  emitUndoAction() {
    console.log("undoAction");
    this.undoAction.emit({ actionType: this.type });
  }

  handleSpaceKeyPress(e: KeyboardEvent): void {
    e.preventDefault();
    if (e.keyCode == 32 || e.keyCode == 13) {
      this.emitUndoAction();
    }
  }

  handleActionButtonClick(e: MouseEvent): void {
    e.preventDefault();
    this.emitUndoAction();
  }

  retrieveClass(): string {
    let className = "";
    switch (this.type) {
      case "add":
        className = "addAlert";
        break;
      case "remove":
        className = "removeAlert";
        break;
      default:
        className = "";
        break;
    }
    return className;
  }

  render() {
    return (
      <div class={`relativeContainer ${this.retrieveClass()}`}>
        <z-icon
          name={this.iconname}
          width={18}
          height={18}
          class={this.retrieveClass()}
        ></z-icon>
        <span class="contentText">{this.contenttext}</span>
        {this.actiontext && !!this.actiontext.trim().length && (
          <span
            role="button"
            tabindex="0"
            class="contentAction"
            onClick={(e: MouseEvent) => {
              this.handleActionButtonClick(e);
            }}
            onKeyPress={(e: KeyboardEvent) => {
              this.handleSpaceKeyPress(e);
            }}
          >
            {this.actiontext}
          </span>
        )}
      </div>
    );
  }
}
