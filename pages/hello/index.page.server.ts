export { onBeforeRender };
export { prerender };

async function onBeforeRender(
  contextProps: any
) {
  const { name } = contextProps.routeParams;
  const pageProps = { name };
  return {
    pageContext: {pageProps },
  };
}

function prerender() {
  const names = ["evan", "rom", "alice", "jon", "eli"];
  const urls = names.map((name) => `/hello/${name}`);
  return urls;
}
