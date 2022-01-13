const frontmatterRemarkPlugin = require('./frontmatter')

const mdxPlugin = require('@next/mdx')({
  options: {
    remarkPlugins: [frontmatterRemarkPlugin],
  },
})

// export the configuration
module.exports = mdxPlugin({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['drive.google.com', 'github.com']
  }
})