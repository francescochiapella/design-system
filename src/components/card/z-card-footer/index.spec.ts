import { newSpecPage } from "@stencil/core/testing";

import { ZCardFooter } from "./index";

describe("Suite test ZCardFooter", () => {
  it("Test render ZCardFooter con props", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019" isbn="123456"></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" isbn=\"123456\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold">
                      123456
                    </span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });

  it("Test render ZCardFooter senza bottone", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });

  it("Test render ZCardFooter senza dati", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer>
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2></h2>
              <div>
                <p class="authors">
                  <span><span class="bold"></span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });

  it("Test render ZCardFooter aperto", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-card-footer>`
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer class="isopen">
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="slot-handler visible">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });
});
