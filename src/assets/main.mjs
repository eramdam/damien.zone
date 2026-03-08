(() => {
  const commentUrlsAllowList = ["damien.zone", "localhost:8080"];

  if (commentUrlsAllowList.some((url) => window.location.href.includes(url))) {
    const mainPost = document.querySelector("body.post > main");
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

      replaceAnonAvatars(mainPost);
    }
  }

  const avatar = document.querySelector(".index-avatar img");

  if (avatar instanceof HTMLImageElement) {
    if (avatar.complete) {
      document.querySelector(".img-shadow.hidden")?.classList.remove("hidden");
    } else {
      avatar.onload = () => {
        console.log("avatar.onload");
        document
          .querySelector(".img-shadow.hidden")
          ?.classList.remove("hidden");
      };
    }
  }
})();

function replaceAnonAvatars(mainPost) {
  new MutationObserver((_muts) => {
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
