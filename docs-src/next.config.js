/** @type {import('next').NextConfig} */
const prodConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: '../docs',
}

const devConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
}

const nextConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

module.exports = nextConfig
