(() => {
  const urlsAllowList = ["damien.zone", "localhost:8080"];
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

  replaceAnonAvatars(mainPost);
})();

function replaceAnonAvatars(mainPost) {
  new MutationObserver((_muts, obs) => {
    if (
      mainPost.querySelectorAll(
        "[id^=comentario-]:not([data-anonavatar]) .comentario-avatar.comentario-bg-anonymous",
      ).length
    ) {
      console.log("Got avatars");
      replaceAnonAvatars(
        mainPost.querySelectorAll(
          "[id^=comentario-]:not([data-anonavatar]) .comentario-avatar.comentario-bg-anonymous",
        ),
      );
    }
  }).observe(mainPost, {
    subtree: true,
    childList: true,
  });

  function replaceAnonAvatars(avatarEls) {
    const possibleSymbols = document
      .querySelector("#svg-sprites")
      ?.querySelectorAll("symbol");
    if (!possibleSymbols.length) {
      return;
    }

    const possibleIds = Array.from(possibleSymbols).map((e) => {
      if (!(e instanceof SVGSymbolElement)) {
        return;
      }

      return e.getAttribute("id");
    });

    Array.from(avatarEls).forEach((avatar) => {
      if (!(avatar instanceof Element)) {
        return;
      }

      const idEl = avatar.closest('[id^="comentario-"]');
      if (!idEl) {
        return;
      }

      const commentId = idEl.getAttribute("id").replace("comentario-", "");
      const hex = commentId.split("-");
      const commentIdAsInt = parseInt(hex[0] + "" + hex[1], 16);
      const finalId = possibleIds[commentIdAsInt % possibleIds.length];

      avatar.innerHTML = `<svg><use xlink:href="#${finalId}" /></svg>`;

      idEl.setAttribute("data-anonavatar", "true");
    });
  }
}

{
  addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const img = event.target.closest("img");
    const parent = img?.closest("figure") || img?.closest("p");
    const anchor = img?.closest("a");
    if (!(img && parent && !anchor)) {
      return;
    }

    event.preventDefault();
    location.href = img.src;
  });
}
