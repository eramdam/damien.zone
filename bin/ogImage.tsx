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
            fontSize: 70,
            borderRadius: 20,
            fontWeight: 600,
            padding: "5px 16px",
            backgroundColor: "#b51d3e",
            // filter: `drop-shadow(0 3px 6px color-mix(in srgb, transparent 50%, #b51d3e))`,
            filter: `drop-shadow(0 6px 12px color-mix(in srgb, transparent 50%, #b51d3e))`,
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
    width: 600 * 2,
    height: 315 * 2,
    format: "webp",
    devicePixelRatio: 2,
    stylesheets,
  });

  fs.writeFileSync("./public/open_graph.webp", Buffer.from(image));
})();
