(() => {
  const urlsAllowList = [
    "damien.zone",
    "6dbd5db13be1.ngrok.app",
    "localhost:8080",
  ];
  if (urlsAllowList.every((url) => !window.location.href.includes(url))) {
    return;
  }
  const mainPost = document.querySelector("body.post > main");
  // If we're not on a post page, nothing to do.
  if (!mainPost) {
    return;
  }

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
})();
