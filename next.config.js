const withMarkdoc = require('@markdoc/next.js')
const withExportImages = require('next-export-optimize-images')
const withPlugins = require('next-compose-plugins')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
}

// module.exports = withMarkdoc()(nextConfig)

module.exports = withPlugins(
  [
    withMarkdoc(),
    withExportImages,
    // your other plugins here
  ],
  nextConfig
)
