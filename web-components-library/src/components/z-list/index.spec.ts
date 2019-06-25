import { newSpecPage } from "@stencil/core/testing";
import { ZList } from "./index";
import { ZListItem } from "../z-list-item/index";

describe("Suite test z-list", () => {
  it("Test render lista vuota", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista con un elemento testuale", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    page.root.inputrawdata = '[{"text":"elemento lista"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <li>
                  <span>
                      elemento lista
                  </span>
                </li>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista con un elemento link", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <li>
                  <span>
                    <a href=\"http://www.google.it\"> elemento lista</a>
                  </span>
                </li>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista 2 un elemento, testo e link", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list inputrawdata='[{"text":"elemento lista"},{"text":"link lista","link":"http://www.google.it"}]'></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list inputrawdata=\"[{&quot;text&quot;:&quot;elemento lista&quot;},{&quot;text&quot;:&quot;link lista&quot;,&quot;link&quot;:&quot;http://www.google.it&quot;}]\">
      <mock:shadow-root>
        <ul>
          <z-list-item>
            <mock:shadow-root>
              <li>
                <span>
                  elemento lista
                </span>
              </li>
            </mock:shadow-root>
          </z-list-item>
          <z-list-item>
            <mock:shadow-root>
              <li>
                <span>
                  <a href=\"http://www.google.it\">
                    link lista
                  </a>
                </span>
              </li>
            </mock:shadow-root>
          </z-list-item>
        </ul>
      </mock:shadow-root>
    </z-list>
    `);
  });

  it("Test aggiornamento lista da proprietà raw", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);

    page.rootInstance.inputrawdata = '[{"text":"testo di esempio"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <li>
                  <span>
                      testo di esempio
                  </span>
                </li>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });
});