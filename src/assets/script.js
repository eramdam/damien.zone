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
})();

function html(strings, ...values) {
  let finalString = "";
  for (let k = 0; k < strings.length; k++) {
    finalString += strings[k];

    const value = values[k];
    if (Array.isArray(value)) {
      finalString += value.join("");
    } else if (value instanceof Element) {
      finalString += value.outerHTML;
    } else if (value === undefined || value === null) {
      // Do not add anything
    } else {
      finalString += value.toString();
    }
  }

  return Array.from(
    new DOMParser().parseFromString(finalString, "text/html").body.childNodes,
  );
}

function addDebugStuff() {
  const debugWrapper = document.createElement("div");
  debugWrapper.id = "debugWrapper";
  debugWrapper.style = "position: fixed; top: 0; right: 0; background: grey;";

  document.body.append(debugWrapper);

  debugWrapper.append(
    ...html`
      <form>
        <label>
          Black level %: <br />
          <input id="black-level" type="range" min="0" max="100" />
        </label>
      </form>
    `,
  );

  document.documentElement.style.setProperty("--dark-mix-color", "100%");

  document.getElementById("black-level").addEventListener("input", (e) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }

    const newPercentage = parseInt(e.target.value, 10);
    document.documentElement.style.setProperty(
      "--dark-mix-color",
      newPercentage + "%",
    );
  });
}
