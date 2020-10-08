import { newSpecPage } from "@stencil/core/testing";

import { ClosedZInput } from "./index";

describe("Suite test ClosedZInput", () => {
  it("Test render ClosedZInput vuoto", async () => {

    const page = await newSpecPage({
      components: [ClosedZInput],
      html: `<closed-z-input></closed-z-input>`
    });

    expect(page.root).toEqualHtml(`
      <closed-z-input>
        <mock:shadow-root>
          <div>
            This is your closed-z-input component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </closed-z-input>
    `)
  });
});

