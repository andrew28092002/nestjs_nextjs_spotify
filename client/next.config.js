/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_GRAPHQL: process.env.URL_GRAPHQL,
    URL_REST: process.env.URL_REST
  }
}

module.exports = nextConfig
