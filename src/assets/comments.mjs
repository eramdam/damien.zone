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

    replaceAnonAvatars(mainPost);
  }
}

function replaceAnonAvatars(mainPost) {
  new MutationObserver((_muts) => {
    if (
      mainPost.querySelectorAll(
        "[id^=comentario-]:not([data-anonavatar]) .comentario-avatar.comentario-bg-anonymous",
      ).length
    ) {
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

      const commenterName = idEl.querySelector(".comentario-name").textContent;
      const commentId = idEl.getAttribute("id").replace("comentario-", "");
      getUniqueId(commentId, commenterName).then((commentIdAsInt) => {
        const finalId = possibleIds[commentIdAsInt % possibleIds.length];

        avatar.innerHTML = `<svg><use xlink:href="#${finalId}" /></svg>`;

        idEl.setAttribute("data-anonavatar", "true");
      });
    });
  }
}

async function getUniqueId(commentId, commenterName = "Anonymous") {
  if (commenterName !== "Anonymous") {
    return await digest(commenterName);
  }

  const hex = commentId.split("-");
  const commentIdAsInt = parseInt(hex[0] + "" + hex[1], 16);

  return commentIdAsInt;
}

async function digest(string) {
  return Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-1", new TextEncoder().encode(string)),
    ),
  ).join("");
}
