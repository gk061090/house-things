export const setQuery = (key: string, value: string) => {
  // eslint-disable-next-line no-restricted-globals
  if (!!history.pushState) {
    var newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      `?${key}=${value}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
};
