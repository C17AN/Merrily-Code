const withPlugins = require('next-compose-plugins')
const frontmatterRemarkPlugin = require('./frontmatter')
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === 'true',
})

const mdxPlugin = require('@next/mdx')({
  options: {
    remarkPlugins: [frontmatterRemarkPlugin],
  },
})

module.exports = withPlugins([mdxPlugin, withBundleAnalyzer], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['drive.google.com', 'github.com']
  },
})
