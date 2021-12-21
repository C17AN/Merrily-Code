const frontmatterRemarkPlugin = require('./frontmatter')

const mdxPlugin = require('@next/mdx')({
  options: {
    remarkPlugins: [],
  },
})

// export the configuration
module.exports = mdxPlugin({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})