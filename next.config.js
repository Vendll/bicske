const withMarkdoc = require('@markdoc/next.js')
const withPlugins = require('next-compose-plugins')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
}

// module.exports = withMarkdoc()(nextConfig)

module.exports = withPlugins(
  [
    withMarkdoc(),

    // your other plugins here
  ],
  nextConfig
)
