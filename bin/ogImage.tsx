import { Renderer } from "@takumi-rs/core";
import { fromJsx } from "@takumi-rs/helpers/jsx";
import fs from "node:fs";

(async () => {
  const fontBuffer = fs.readFileSync(
    "./node_modules/@fontsource-variable/merriweather/files/merriweather-latin-standard-normal.woff2",
  );
  const imgData = fs.readFileSync("./public/avatar/avatar-border.png");

  const renderer = new Renderer({
    fonts: [
      {
        name: "Merriweather Variable",
        data: fontBuffer,
      },
    ],
    persistentImages: [
      {
        src: "avatar",
        data: imgData,
      },
    ],
  });

  const node = await fromJsx(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1517",
        fontFamily: "Merriweather Variable",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="avatar"
          height={80}
          width={80}
          style={{
            marginRight: 14,
          }}
        />
        <h1
          style={{
            color: "hsl(0, 33%, 96%)",
            fontSize: 36,
            fontWeight: "777",
            padding: "5px 14px",
            backgroundColor: "#be133c",
            borderRadius: 16,
          }}
        >
          damien.zone
        </h1>
      </div>
    </div>,
  );

  const image = await renderer.render(node, {
    width: 512,
    height: 256,
    format: "webp",
  });

  fs.writeFileSync("./public/open_graph.webp", Buffer.from(image));
})();
