import React from "react";
import ReactDOM from "react-dom";
import { AnalyticsBrowser } from '@segment/analytics-next';
import { PageLayout } from "./PageLayout";

export { render }
export const clientRouting = true

  function render(cp: any) {
    console.log(AnalyticsBrowser)
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
