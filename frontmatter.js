const matter = require("gray-matter");
const readingTime = require("reading-time");

module.exports = () => (tree, file) => {
  const { data: frontMatter, content } = matter(file.contents);
  const { text } = readingTime(content);
  frontMatter.timeToRead = text;

  tree.children.push({
    type: "export",
    value: `export const frontMatter = ${JSON.stringify(frontMatter)}`,
  });

  if (tree.children[0].type === "thematicBreak") {
    const firstHeadingIndex = tree.children.findIndex((t) => t.type === "heading");
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1);
    }
  }
};
