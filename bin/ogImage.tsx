import { Renderer } from "@takumi-rs/core";
import { fromJsx } from "@takumi-rs/helpers/jsx";
import fs from "node:fs";
import sharp from "sharp";

(async () => {
  const fontBuffer = fs.readFileSync(
    "./src/assets/fonts/pp-right/PP Right Serif - Bold.woff",
  );

  const renderer = new Renderer({
    fonts: [
      {
        name: "PP Right Serif",
        data: fs.readFileSync(
          "./src/assets/fonts/pp-right/PP Right Serif - Bold.woff",
        ),
        weight: 600,
        style: "normal",
      },
      {
        name: "PP Right Serif",
        data: fs.readFileSync(
          "./src/assets/fonts/pp-right/PP Right Serif - Medium.woff",
        ),
        weight: 500,
        style: "normal",
      },
      {
        name: "PP Right Serif",
        data: fs.readFileSync(
          "./src/assets/fonts/pp-right/PP Right Serif - Light.woff",
        ),
        weight: 300,
        style: "normal",
      },
    ],
  });

  const { node, stylesheets } = await fromJsx(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f1f1",
        fontFamily: "PP Right Serif Bold",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "#f7f1f1",
            fontSize: 50,
            borderRadius: 18,
            fontWeight: 600,
            padding: "5px 14px",
            backgroundColor: "#b51d3e",
            filter: `drop-shadow(0 3px 6px color-mix(in srgb, transparent 50%, #b51d3e))`,
          }}
        >
          damien
          <span
            style={{
              fontWeight: 200,
              color: "rgb(247 241 241 / 40%)",
            }}
          >
            .
          </span>
          zone
        </h1>
      </div>
    </div>,
  );

  const image = await renderer.render(node, {
    width: 512 * 2,
    height: 256 * 2,
    format: "png",
    devicePixelRatio: 2,
    stylesheets,
  });

  fs.writeFileSync("./public/open_graph.png", Buffer.from(image));
})();
