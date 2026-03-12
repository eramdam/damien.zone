{
  if (document.querySelector("#color-change-demo")) {
    const input = document.querySelector("#color-change-demo input");
    if (input instanceof HTMLInputElement) {
      input.value = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent");
      input.addEventListener("input", (e) => {
        document.documentElement.style.setProperty(
          "--color-accent",
          e.target.value,
        );
      });
    }
  }
}

{
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
