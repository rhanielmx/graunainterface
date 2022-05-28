/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['conteudo.imguol.com.br'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
