/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com']
  }
}
module.exports = {
  distDir: 'build',
}

module.exports = nextConfig
