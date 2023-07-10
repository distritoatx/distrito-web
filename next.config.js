/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'custom',
    loaderFile: './distritoLoader.tsx',
    domains: ["localhost", "https://strapi.distritoatx.com", 'distrito-strapi-bucket.s3.amazonaws.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'distrito-strapi-bucket.s3.amazonaws.com',
      port: '443',
      pathname: '/**'
    }]
  },
  env: {
    APP_TITLE: 'Distrito | Underground Fine Dining',
    NEXT_PUBLIC_STRAPI_API_URL: 'https://strapi.distritoatx.com'
  },
  locales: ['en-US', 'es', 'jp'],

}

module.exports = nextConfig
