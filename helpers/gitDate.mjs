import spawn from "cross-spawn";

/* Thank you to Vuepress!
 * https://github.com/vuejs/vuepress/blob/89440ce552675859189ed4ab254ce19c4bba5447/packages/%40vuepress/plugin-last-updated/index.js
 * MIT licensed: https://github.com/vuejs/vuepress/blob/89440ce552675859189ed4ab254ce19c4bba5447/LICENSE
 */
function getGitLastUpdatedTimeStamp(filePath) {
  return (
    parseInt(
      spawn
        .sync(
          "git",
          // Formats https://www.git-scm.com/docs/git-log#_pretty_formats
          // %at author date, UNIX timestamp
          ["log", "-1", "--format=%at", filePath],
        )
        .stdout.toString("utf-8"),
    ) * 1000
  );
}

export function getLastUpdatedTimestamp(pageData) {
  let timestamp = getGitLastUpdatedTimeStamp(pageData.inputPath);

  if (!timestamp) {
    return pageData.date;
  }

  return new Date(timestamp);
}
