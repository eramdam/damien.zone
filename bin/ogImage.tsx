import satori from "satori";
import fs from "node:fs";
import { optimize } from "svgo";
import sharp from "sharp";

(async () => {
  const fontBuffer = fs.readFileSync(
    "./src/assets/styles/@fontsource/young-serif/files/young-serif-latin-400-normal.woff",
  );
  const imgBase64 = fs.readFileSync("./src/static/avatar/avatar-border.png", {
    encoding: "base64",
  });
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#212028",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={`data:image/png;base64,${imgBase64}`}
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
            fontWeight: "normal",
            padding: "5px 14px",
            backgroundColor: "#be133c",
            borderRadius: 16,
          }}
        >
          damien's zone
        </h1>
      </div>
    </div>,
    {
      width: 512,
      height: 256,
      fonts: [
        {
          name: "Young Serif",
          data: fontBuffer,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
  const result = optimize(svg, {
    multipass: true,
  });

  await sharp(Buffer.from(result.data))
    .webp({
      lossless: true,
    })
    .toFile("./src/assets/open_graph.webp");
})();
