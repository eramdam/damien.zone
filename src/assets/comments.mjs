const urlsAllowList = ["damien.zone", "localhost:8080"];
if (urlsAllowList.some((url) => window.location.href.includes(url))) {
  const mainPost = document.querySelector("body.post > main");
  // If we're not on a post page, nothing to do.
  if (mainPost) {
    mainPost.insertAdjacentHTML(
      "beforeend",
      `<comentario-comments live-update="false" no-fonts="true"></comentario-comments>`,
    );

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://comments.friendsofeggbug.org/comentario.js",
    );
    mainPost.insertAdjacentElement("beforeend", script);
  }
}
