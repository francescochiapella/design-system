import { newSpecPage } from "@stencil/core/testing";

import { BaseInput } from "./index";

describe("Suite test BaseInput", () => {
  it("Test render BaseInput vuoto", async () => {

    const page = await newSpecPage({
      components: [BaseInput],
      html: `<base-input></base-input>`
    });

    expect(page.root).toEqualHtml(`
      <base-input>
        <mock:shadow-root>
          <div>
            This is your base-input component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </base-input>
    `)
  });
});

