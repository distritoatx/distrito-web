/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './distritoLoader.tsx',
    domains: ["localhost", "http://107.23.42.247:1337", 'distrito-strapi-bucket.s3.amazonaws.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'distrito-strapi-bucket.s3.amazonaws.com',
      port: '443',
      pathname: '/**'
    }]
  },
  env: {
    APP_TITLE: 'Texas Bear Photos | Photography',
    NEXT_PUBLIC_STRAPI_API_URL: 'http://107.23.42.247:1337'
  }
}

module.exports = nextConfig
