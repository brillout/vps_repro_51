import React from "react";
import ReactDOM from "react-dom";
import { PageLayout } from "./PageLayout";

export { render }
export const clientRouting = true

  function render(cp: any) {
    const page = (
      <PageLayout>
        <cp.Page {...cp.pageProps} />
      </PageLayout>
    );
    const container = document.getElementById("page-view");
    if (cp.isHydration) {
      ReactDOM.hydrate(page, container);
    } else {
      ReactDOM.render(page, container);
    }
    document.title = cp.docTitle || "Demo";
  }
