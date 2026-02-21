{
  addEventListener("click", (event) => {
    console.log(event);
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
