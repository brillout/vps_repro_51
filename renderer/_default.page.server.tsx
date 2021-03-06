import ReactDOMServer from "react-dom/server";
import React from "react";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";
import { PageLayout } from "./PageLayout";

export { render };
export { passToClient };

const passToClient = ["pageProps", "docTitle"];

function render({
  Page,
  contextProps,
}: {
  Page: (pageProps: any) => JSX.Element;
  contextProps: Record<string, any>;
}) {
  const pageContent = ReactDOMServer.renderToString(
    <PageLayout>
      <Page {...contextProps.pageProps} />
    </PageLayout>
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${contextProps.docTitle || "Demo"}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageContent)}</div>
      </body>
    </html>`;
}
