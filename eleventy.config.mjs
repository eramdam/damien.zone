import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { helpersPlugin } from "./11ty/helpers.mjs";
import markdownItFootnote from "markdown-it-footnote";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default function (config) {
  config.addPlugin(syntaxHighlight);
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(helpersPlugin);

  config.amendLibrary("md", (mdLib) => mdLib.use(markdownItFootnote));

  // Styles, scripts and media used by the general layout
  config.addPassthroughCopy("src/assets");
  // Buttons, stuff people might want to grab/reference
  config.addPassthroughCopy("src/public");
  // Images used inside articles/pages
  config.addPassthroughCopy("src/img");
  config.setLiquidOptions({
    // https://liquidjs.com/tutorials/options.html#jsTruthy
    jsTruthy: true,
    // https://liquidjs.com/tutorials/options.html#Strict
    strictVariables: true,
    strictFilters: true,
  });

  config.setInputDirectory("src");
  config.setOutputDirectory("_site");
  config.setServerOptions({
    port: 3000,
  });
}
