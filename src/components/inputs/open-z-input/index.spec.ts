import { newSpecPage } from "@stencil/core/testing";

import { OpenZInput } from "./index";

describe("Suite test OpenZInput", () => {
  it("Test render OpenZInput vuoto", async () => {

    const page = await newSpecPage({
      components: [OpenZInput],
      html: `<open-z-input></open-z-input>`
    });

    expect(page.root).toEqualHtml(`
      <open-z-input>
        <mock:shadow-root>
          <div>
            This is your open-z-input component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </open-z-input>
    `)
  });
});

